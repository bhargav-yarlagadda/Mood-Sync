"use client";
import React, { useEffect, useRef, useState } from "react";
import * as monaco from "monaco-editor";
import loader from "@monaco-editor/loader";
import { createSubmission } from "@/utils/execution";
import { useEditorContext } from "@/context/EditorContext";

const CodeEditor = () => {
  const editorRef = useRef<HTMLDivElement | null>(null);
  const [editorInstance, setEditorInstance] = useState<monaco.editor.IStandaloneCodeEditor | null>(null);
  const { setError, setOutput, input,setIsLoading } = useEditorContext();

  // Initialize Monaco editor
  useEffect(() => {
    loader.init().then((monacoInstance) => {
      if (editorRef.current) {
        const editor = monacoInstance.editor.create(editorRef.current, {
          value: "# Welcome to Mood Sync...\nprint('Hello World')",
          language: "python", // Default language
          fontFamily: "Fira Code, Monaco, monospace",
          lineNumbers: "on",
          minimap: { enabled: true },
          theme: "vs-dark",
        });
        setEditorInstance(editor);
      }
    });

    return () => editorInstance?.dispose(); // Cleanup on unmount
  }, []);

  // Function to submit code to Judge0 and retrieve output
  const submitAndExecuteCode = async () => {
    
    const code = editorInstance?.getValue();
    if (code) {
      setIsLoading(true)
      setError('')
      setOutput('')
      const res = await createSubmission(code, input);

      if (res.stderr) {
        setError(atob(res.stderr)); // Set error if response contains error
      } else {
        setOutput(atob(res.stdout)); // Set the output
      }
      setIsLoading(false)
    }
  };

  return (
    <div className="flex flex-col gap-4">
      {/* Monaco Editor */}
      <div
        style={{ scrollbarWidth: "none" }}
        ref={editorRef}
        className="w-full h-full min-h-[550px] overflow-y-scroll p-2 border rounded-2xl shadow-md bg-[#1e1e1e]"
      />
      <button
        className="bg-blue-600 rounded-lg mb-4 p-2"
        onClick={submitAndExecuteCode}
      >
        Run
      </button>

      {/* Run Button */}
    </div>
  );
};

export default CodeEditor;
