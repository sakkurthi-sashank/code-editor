import { useEditorStore } from "@/store/editorStore";

export const OutputField = () => {
  const { outputDetails } = useEditorStore((state) => ({
    outputDetails: state.outputDetails,
  }));

  return (
    <div className="w-full">
      <div className="p-2 font-mono text-gray-600 text-sm">Output</div>
      <div className="bg-gray-100 h-40 rounded-md w-full overflow-y-scroll">
        <div className="p-2 font-mono text-xs text-gray-700">{atob(outputDetails)}</div>
      </div>
    </div>
  );
};
