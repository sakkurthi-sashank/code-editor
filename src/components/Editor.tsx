import React from "react";
import MonacoEditor from "@monaco-editor/react";

export const Editor = () => {
  return (
    <div className="overflow-hidden rounded-sm">
      <MonacoEditor
        theme="vs-dark"
        height="45vh"
        options={{
          fontSize: 14,
          scrollBeyondLastLine: false,
          minimap: {
            enabled: false,
          },
          padding: {
            top: 10,
          },
        }}
      />
    </div>
  );
};
