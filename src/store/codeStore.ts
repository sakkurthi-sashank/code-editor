import { create } from "zustand";

type CodeStore = {
  code: string;
  setCode: (code: string) => void;
  languageId: number;
  setLanguageId: (languageId: number) => void;
  output: string;
  setOutput: (output: string) => void;
  outputs: string[];
  setOutputs: (outputs: string[]) => void;
};

export const useCodeStore = create<CodeStore>((set) => ({
  code: "",
  setCode: (code: string) => set({ code }),
  languageId: 50,
  setLanguageId: (languageId: number) => set({ languageId }),
  output: "",
  setOutput: (output: string) => set({ output }),
  outputs: [],
  setOutputs: (outputs: string[]) => set({ outputs }),
}));
