import React from "react";

export const Buttons = () => {
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
