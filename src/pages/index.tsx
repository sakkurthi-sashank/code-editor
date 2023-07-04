import { CodeEditor } from "@/components/CodeEditor";
import { CompileAndExecute } from "@/components/CompileAndExecute";
import { InputField } from "@/components/InputField";
import { LanguageSelection } from "@/components/LanguageSelection";
import { OutputField } from "@/components/OutputField";

export default function HomePage() {
  return (
    <div className="w-full flex">
      <div className="w-1/2">
        <CodeEditor />
      </div>
      <div className="w-1/2 p-6 space-y-6">
        <LanguageSelection />
        <InputField />
        <OutputField />
        <CompileAndExecute />
      </div>
    </div>
  );
}
