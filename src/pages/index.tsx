import { Editor } from "@/components/Editor";
import { Header } from "@/components/Header";
import { LanguageSelect } from "@/components/LanguageSelect";
import { Questions } from "@/components/Questions";

import { Inter } from "@next/font/google";

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
});

export default function Home() {
  return (
    <div className={inter.variable}>
      <div className="h-screen w-full bg-neutral-100">
        <Header />
        <div className="flex h-[93vh] w-full space-x-2">
          <div className="h-full w-[45%] bg-white">
            <Questions />
          </div>
          <div className="flex h-full w-[55%] flex-col bg-white px-2">
            <div className="z-10 flex h-[7vh] items-center">
              <LanguageSelect />
            </div>
            <Editor />
          </div>
        </div>
      </div>
    </div>
  );
}
