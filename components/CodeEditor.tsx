"use client";
import React, { useEffect, useRef, useState } from "react";
import * as monaco from "monaco-editor";
import loader from "@monaco-editor/loader";
 // Import your utility function

const CodeEditor = () => {
  const editorRef = useRef<HTMLDivElement | null>(null);
  const [editorInstance, setEditorInstance] = useState<monaco.editor.IStandaloneCodeEditor | null>(null);


  // Initialize Monaco editor
  useEffect(() => {
    loader.init().then((monacoInstance) => {
      if (editorRef.current) {
        const editor = monacoInstance.editor.create(editorRef.current, {
          value: "// Welcome to Mood Sync...\nprint('Hello World')",
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

  // Callback to update the UI with the API response
  
  // Function to submit code to Judge0 and retrieve output
  

  return (
    <div>
      <div
        style={{ scrollbarWidth: "none" }}
        ref={editorRef}
        className="w-full h-full min-h-[550px] overflow-y-scroll p-2 border rounded-2xl shadow-md bg-[#1e1e1e]"
      />
     
    </div>
  );
};

export default CodeEditor;
