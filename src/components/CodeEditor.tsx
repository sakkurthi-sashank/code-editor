import React from "react";
import { CompileWindow } from "./CompileWindow/CompileWindow";
import { EditorWindow } from "./EditorWindow/EditorWindow";
import { FeaturesWindow } from "./FeaturesWindow/FeaturesWindow";
import { Header } from "./Header";

export const CodeEditor = () => {
  return (
    <div className="h-screen w-full bg-gray-100">
      <Header />
      <div className="flex h-[92.5vh] w-full space-x-2 pt-[0.5vh]">
        <FeaturesWindow />
        <div className="flex h-full w-1/2 flex-col">
          <EditorWindow />
          <CompileWindow />
        </div>
      </div>
    </div>
  );
};
