import { Select } from "@mantine/core";
import { languageOptions } from "@/constants/languageOptions";
import { useEditorStore } from "@/store/editorStore";

export const LanguageSelection = () => {
  const { setLanguageId, setLanguage } = useEditorStore((state) => ({
    setLanguageId: state.setLanguageId,
    setLanguage: state.setLanguage,
  }));

  const handleOnChange = (value: string) => {
    setLanguageId(
      languageOptions.find((option) => option.value === value)?.id!
    );
    setLanguage(value);
  };

  return (
    <div className="max-w-sm">
      <Select
        radius={"xl"}
        size="xs"
        defaultValue={languageOptions[0].value}
        data={languageOptions}
        onChange={handleOnChange}
      />
    </div>
  );
};
