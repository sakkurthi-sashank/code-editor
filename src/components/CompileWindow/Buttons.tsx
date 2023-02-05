import { useCodeStore } from "@/store/codeStore";
import { TestCase } from "./TestCases";
import axios from "axios";
import React from "react";

export const Buttons = () => {
  const {
    code,
    setCode,
    languageId,
    setLanguageId,
    output,
    setOutput,
    outputs,
    setOutputs,
  } = useCodeStore((state) => ({
    code: state.code,
    setCode: state.setCode,
    languageId: state.languageId,
    setLanguageId: state.setLanguageId,
    output: state.output,
    setOutput: state.setOutput,
    outputs: state.outputs,
    setOutputs: state.setOutputs,
  }));

  const compileCode = async () => {
    const { data } = await axios.post(
      "https://judge0-ce.p.rapidapi.com/submissions/",
      {
        source_code: code,
        language_id: languageId,
        stdin: "",
      },
      {
        headers: {
          "content-type": "application/json",
          "Content-Type": "application/json",
          "X-RapidAPI-Key":
            "b2f946a196mshbd72e2a594c1d2dp19c5b8jsn37222908adf1",
          "X-RapidAPI-Host": "judge0-ce.p.rapidapi.com",
        },
        params: {
          base64_encoded: "true",
          fields: "*",
        },
      }
    );

    setTimeout(async () => {
      await axios
        .get(`https://judge0-ce.p.rapidapi.com/submissions/${data.token}`, {
          headers: {
            "content-type": "application/json",
            "Content-Type": "application/json",
            "X-RapidAPI-Key": process.env.NEXT_PUBLIC_JUDGE0_API_KEY,
            "X-RapidAPI-Host": "judge0-ce.p.rapidapi.com",
          },
          params: {
            base64_encoded: "true",
            fields: "*",
          },
        })
        .then((res) => {
          setOutput(res.data.stdout);
        });
    }, 3000);
  };

  const submitCode = async () => {};

  return (
    <div className="flex h-[7vh] w-full justify-end space-x-3 p-2">
      <button className="rounded-md border bg-gray-200 px-3 py-1 text-sm text-gray-700">
        Run
      </button>
      <button className="rounded-md bg-sky-600 px-3 py-1 text-base text-white hover:bg-sky-700">
        Submit
      </button>
    </div>
  );
};
