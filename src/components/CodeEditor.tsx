import { useEditorStore } from "@/store/editorStore";
import MonacoEditor from "@monaco-editor/react";

export const CodeEditor = () => {
  const { code, setCode, language } = useEditorStore((state) => ({
    code: state.code,
    setCode: state.setCode,
    language: state.language,
  }));

  return (
    <div>
      <MonacoEditor
        height="100vh"
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
        language={language}
        theme="vs-dark"
        value={code}
        onChange={(value) => setCode(value!)}
      />
    </div>
  );
};
