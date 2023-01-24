import { CodeEditor } from "@/components/CodeEditor";
import { Inter } from "@next/font/google";

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
});

export default function Home() {
  return (
    <div className={inter.variable}>
      <CodeEditor />
    </div>
  );
}
