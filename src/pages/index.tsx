import Compile from "@/components/Compile";
import { Editor } from "@/components/Editor";
import { Header } from "@/components/Header";
import { LanguageSelect } from "@/components/LanguageSelect";
import { OptionsTab } from "@/components/OptionsTab";

import { Inter } from "@next/font/google";

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
});

export default function Home() {
  return (
    <div className={inter.variable}>
      <div className="h-screen w-full bg-gray-100">
        <Header />
        <div className="flex h-[92%] w-full space-x-2 pt-[1%]">
          <div className="h-full w-[45%]">
            <OptionsTab />
          </div>
          <div className="flex h-full w-[55%] flex-col">
            <div className="z-10 mb-[1%] flex h-[5%] items-center">
              <LanguageSelect />
            </div>
            <Editor />
            <Compile />
          </div>
        </div>
      </div>
    </div>
  );
}
