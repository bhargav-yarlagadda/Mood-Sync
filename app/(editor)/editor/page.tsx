"use client";
import CodeEditor from "@/components/CodeEditor";
import CodeOutput from "@/components/CodeOutput";
import React, { useEffect, useRef, useState } from "react";
import { useEditorContext } from "@/context/EditorContext";
import Loader from "@/components/Loader";
import { detectExpression, loadModels } from "@/recognition/faceDetection";
import { getBackgroundColor } from "@/utils/execution";

const Page = () => {
  const videoRef = useRef<HTMLVideoElement | null>(null);
  const [expression, setExpression] = useState<string>("neutral");
  const [bgColor, setBgColor] = useState<string>("#fff");
  const { isLoading, enableAITracking } = useEditorContext();

  

  useEffect(() => {
    setBgColor(getBackgroundColor(expression));
  }, [expression]);

  useEffect(() => {
    if (!enableAITracking) {
      // Stop the video stream when tracking is disabled
      if (videoRef.current && videoRef.current.srcObject) {
        const stream = videoRef.current.srcObject as MediaStream;
        stream.getTracks().forEach(track => track.stop());
      }
      return;
    }

    if (typeof window === "undefined") return; // Ensure it's client-side

    const init = async () => {
      await loadModels();
      try {
        const stream = await navigator.mediaDevices.getUserMedia({ video: true });
        if (videoRef.current) {
          videoRef.current.srcObject = stream;
          videoRef.current.play();
        }

        setInterval(async () => {
          if (videoRef.current) {
            const exp = await detectExpression(videoRef.current);
            setExpression(exp);
          }
        }, 1000);
      } catch (error) {
        console.error("Error accessing camera:", error);
      }
    };

    init();

    return () => {
      // Clean up the video stream on component unmount
      if (videoRef.current && videoRef.current.srcObject) {
        const stream = videoRef.current.srcObject as MediaStream;
        stream.getTracks().forEach(track => track.stop());
      }
    };
  }, [enableAITracking]); // Run the effect when enableAITracking changes

  return (
    <div
      style={{
        backgroundColor: bgColor,
        transition: "background-color 1s ease-in-out",
      }}
      className="w-full h-full py-3 grid grid-cols-1 gap-5 md:gap-0 md:grid-cols-2"
    >
      {enableAITracking && <video ref={videoRef} autoPlay muted  />}
      {isLoading && <Loader />}
      <div className="col-span-1 mt-20 px-8">
        <CodeEditor />
      </div>
      <div className="col-span-1 mt-20 px-8">
        <CodeOutput />
      </div>
    </div>
  );
};

export default Page;
