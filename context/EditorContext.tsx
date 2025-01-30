"use client"
import { createContext, ReactNode, useState, useContext } from "react";

// Define context type
interface EditorContextType {
  input: string;
  setInput: (value: string) => void;
  output: string;
  setOutput: (value: string) => void;
  error: string;
  setError: (value: string) => void;
  isLoading: boolean;
  setIsLoading: (value: boolean) => void;
}

// Create context with undefined as a fallback
export const EditorContext = createContext<EditorContextType | undefined>(undefined);

// Provider component
export const EditorProvider = ({ children }: { children: ReactNode }) => {
  const [input, setInput] = useState<string>("");
  const [output, setOutput] = useState<string>("");
  const [error, setError] = useState<string>("");
  const [isLoading, setIsLoading] = useState<boolean>(false);

  return (
    <EditorContext.Provider value={{ input, setInput, output, setOutput, error, setError, isLoading, setIsLoading }}>
      {children}
    </EditorContext.Provider>
  );
};

// Custom hook to use context (for convenience)
export const useEditorContext = (): EditorContextType => {
  const context = useContext(EditorContext);
  if (!context) {
    throw new Error("EditorContext is not provided. Please wrap your component tree with EditorProvider.");
  }
  return context;
};
