import { useState } from "react";
import { Listbox } from "@headlessui/react";

const people = [
  { id: 50, name: "C (GCC 9.2.0)" },
  { id: 54, name: "C++ (GCC 9.2.0)" },
  { id: 62, name: "Java (OpenJDK 13)" },
  { id: 71, name: "Python (3.8.1)" },
];

export const LanguageSelect = () => {
  const [selectedPerson, setSelectedPerson] = useState(people[0]);
  return (
    <div className="relative w-40">
      <Listbox value={selectedPerson} onChange={setSelectedPerson}>
        <Listbox.Button className="w-full rounded-sm border bg-white px-4 py-2 text-left text-xs">
          {selectedPerson.name}
        </Listbox.Button>
        <Listbox.Options className="absolute top-10 w-full space-y-3 rounded-sm border bg-white px-4 py-2 text-xs">
          {people.map((person) => (
            <Listbox.Option key={person.id} value={person}>
              {person.name}
            </Listbox.Option>
          ))}
        </Listbox.Options>
      </Listbox>
    </div>
  );
};
