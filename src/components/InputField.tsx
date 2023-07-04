import { useEditorStore } from "@/store/editorStore";
import { Textarea } from "@mantine/core";

export const InputField = () => {
  const { customInput, setCustomInput } = useEditorStore((state) => ({
    customInput: state.customInput,
    setCustomInput: state.setCustomInput,
  }));

  return (
    <div>
      <Textarea
        placeholder="Enter your input here"
        value={customInput}
        onChange={(event) => setCustomInput(event.currentTarget.value)}
      />
    </div>
  );
};
