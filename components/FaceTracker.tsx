'use client';

import { useEffect, useRef, useState } from 'react';
import { loadModels, detectExpression } from '@/recognition/faceDetection';

const FaceTracker = () => {
  const videoRef = useRef<HTMLVideoElement | null>(null);
  const [expression, setExpression] = useState<string>('neutral');

  // Map expressions to background colors
  const getBackgroundColor = (exp: string) => {
    switch (exp) {
      case 'neutral': return '#1e1e1e'; // Default dark mode
      case 'happy': return '#3b82f6'; // Blue for a fresh feel
      case 'angry': return '#ef4444'; // Red to alert
      case 'sad': return '#a855f7'; // Purple for calmness
      case 'surprised': return '#facc15'; // Yellow for excitement
      case 'disgusted': return '#10b981'; // Green for disgust
      case 'fearful': return '#d97706'; // Orange for fear
      default: return 'smoke-white';
    }
  };
  

  // Start monitoring facial expressions at fixed intervals (every 5 seconds)
  const startMonitoring = () => {
    setInterval(async () => {
      if (videoRef.current) {
        const exp = await detectExpression(videoRef.current);
        setExpression(exp);
      }
    }, 1000); // Check expression every 5 seconds
  };

  useEffect(() => {
    const init = async () => {
      await loadModels(); // Load AI models
      try {
        const stream = await navigator.mediaDevices.getUserMedia({ video: true });
        if (videoRef.current) {
          videoRef.current.srcObject = stream;
          videoRef.current.play(); // Ensure video starts playing
        }
        startMonitoring(); // Start expression detection loop every 5 seconds
      } catch (error) {
        console.error("Error accessing camera:", error);
      }
    };

    init();

    return () => {
      if (videoRef.current) videoRef.current.srcObject = null;
    };
  }, []);

  return (
    <div
      style={{ backgroundColor: getBackgroundColor(expression) }}
      className="min-h-screen flex flex-col items-center justify-center transition-all duration-500"
    >
      {/* Video element for capturing webcam */}
      <video ref={videoRef} autoPlay muted className="w-[400px] h-[500px]" />
      
      {/* Display current facial expression */}
      <p className="text-white text-2xl">Current Mood: {expression.toUpperCase()}</p>
    </div>
  );
};

export default FaceTracker;
