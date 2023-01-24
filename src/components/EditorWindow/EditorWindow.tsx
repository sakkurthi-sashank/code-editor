import MonacoEditor from "@monaco-editor/react";
import { LanguageSelect } from "./LanguageSelect";

export const EditorWindow = () => {
  return (
    <>
      <div className="z-10 mb-[0.5vh] flex h-[5.5vh] items-center">
        <LanguageSelect />
      </div>
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
    </>
  );
};
