import { useEditorStore } from "@/store/editorStore";
import { Button } from "@mantine/core";
import { useState } from "react";

export const CompileAndExecute = () => {
  const [processing, setProcessing] = useState(false);
  const { languageId, code, customInput, setOutputDetails } = useEditorStore(
    (state) => ({
      languageId: state.languageId,
      code: state.code,
      customInput: state.customInput,
      setOutputDetails: state.setOutputDetails,
    })
  );

  const checkStatus = async (submissionId: string) => {
    const result = await fetch(
      `https://judge0-ce.p.rapidapi.com/submissions/${submissionId}?base64_encoded=true&fields=*`,
      {
        method: "GET",
        headers: {
          "x-rapidapi-key": process.env.NEXT_PUBLIC_JUDGE0_API_KEY!,
          "x-rapidapi-host": "judge0-ce.p.rapidapi.com",
        },
      }
    );
    const resultData = await result.json();
    if (resultData.status.id <= 2) {
      setTimeout(() => checkStatus(submissionId), 1000);
    } else {
      setOutputDetails(
        resultData.stdout || resultData.stderr || resultData.compile_output
      );
      setProcessing(false);
    }
  };


  const handleOnClick = async () => {
    setProcessing(true);
    const response = await fetch(
      "https://judge0-ce.p.rapidapi.com/submissions?base64_encoded=true&fields=*",
      {
        method: "POST",
        headers: {
          "content-type": "application/json",
          "x-rapidapi-key": process.env.NEXT_PUBLIC_JUDGE0_API_KEY!,
          "x-rapidapi-host": "judge0-ce.p.rapidapi.com",
        },
        body: JSON.stringify({
          language_id: languageId,
          source_code: btoa(code),
          stdin: btoa(customInput),
        }),
      }
    );
    const data = await response.json();
    const submissionId = data.token;
    checkStatus(submissionId);
  };

  return (
    <div className="flex justify-end">
      <Button
        color="dark"
        fw={400}
        radius={"xl"}
        loading={processing}
        onClick={handleOnClick}
      >
        Compile and Execute
      </Button>
    </div>
  );
};
