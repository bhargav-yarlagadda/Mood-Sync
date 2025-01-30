"use client";
import React from 'react';
import { useEditorContext } from '@/context/EditorContext'; // Use the custom hook for context

const CodeOutput = () => {
  const { input, setInput, output, error } = useEditorContext(); // Access the context values

  // Function to format the output text and replace \n with actual line breaks
  const formatOutput = (text: string) => {
    if (!text) return "No output yet...";

    return text.split("\n").map((line, index) => (
      <p key={index}>{line}</p>
    ));
  };

  return (
    <div
    style={{scrollbarWidth:'none'}}
    className="w-full flex-col  h-[550px] p-4 flex justify-center items-center border rounded-lg shadow-md bg-gray-800 text-white overflow-y-scroll">
      {/* Output Section */}
      <div className="w-full h-1/2">
        <h2 className="text-xl font-semibold mb-2">Output</h2>
        <div className={`output-box w-full h-full p-4 bg-gray-900 rounded-lg overflow-auto ${error ? "border-2 border-red-600" : ""}`}>
          {error ? (
            <pre className="text-red-500">{error}</pre>
          ) : (
            <>{formatOutput(output)}</> // Using the formatOutput function to render each line
          )}
        </div>
      </div>

      {/* Input Section */}
      <div className="mt-12 w-full">
        <h3 className="text-lg font-semibold mb-2">Input</h3>
        <textarea
          className="w-full h-36 p-3 bg-gray-700 text-white rounded-lg shadow-inner"
          value={input}
          onChange={(e) => setInput(e.target.value)} // Handling the input change
        />
      </div>
    </div>
  );
};

export default CodeOutput;
