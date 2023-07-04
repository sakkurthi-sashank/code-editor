import { create } from "zustand";
import { languageOptions } from "@/constants/languageOptions";

interface EditorStore {
  code: string;
  setCode: (code: string) => void;
  customInput: string;
  setCustomInput: (customInput: string) => void;
  outputDetails: string;
  setOutputDetails: (outputDetails: string) => void;
  processing: string;
  setProcessing: (processing: string) => void;
  languageId: number;
  setLanguageId: (language: number) => void;
  language: string;
  setLanguage: (language: string) => void;
}

export const useEditorStore = create<EditorStore>((set) => ({
  code: "",
  setCode: (code: string) => set({ code }),
  customInput: "",
  setCustomInput: (customInput: string) => set({ customInput }),
  outputDetails: "",
  setOutputDetails: (outputDetails: string) => set({ outputDetails }),
  processing: "",
  setProcessing: (processing: string) => set({ processing }),
  languageId: languageOptions[0].id,
  setLanguageId: (languageId: number) => set({ languageId }),
  language: languageOptions[0].value,
  setLanguage: (language: string) => set({ language }),
}));
