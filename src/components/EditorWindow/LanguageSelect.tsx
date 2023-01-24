import { useState } from "react";
import { Listbox } from "@headlessui/react";

const language = [
  { id: 50, name: "C" },
  { id: 54, name: "C++" },
  { id: 62, name: "Java" },
  { id: 71, name: "Python" },
];

export const LanguageSelect = () => {
  const [selectedPerson, setSelectedPerson] = useState(language[0]);
  return (
    <div className="relative w-20">
      <Listbox value={selectedPerson} onChange={setSelectedPerson}>
        <Listbox.Button className="flex w-full items-center justify-between rounded-md border bg-gray-200 px-2 py-2">
          <div className=" text-xs">{selectedPerson.name}</div>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth={1.5}
            stroke="currentColor"
            className="h-3 w-3"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M19.5 8.25l-7.5 7.5-7.5-7.5"
            />
          </svg>
        </Listbox.Button>
        <Listbox.Options className="absolute top-9 w-24 rounded-md border bg-white px-1 py-1 text-xs">
          {language.map((language) => (
            <Listbox.Option
              className="cursor-pointer rounded-md py-2 px-2 hover:bg-gray-100"
              key={language.id}
              value={language}
            >
              {language.name}
            </Listbox.Option>
          ))}
        </Listbox.Options>
      </Listbox>
    </div>
  );
};
