import { Tab } from "@headlessui/react";

const testCaseDate = [
  {
    uid: 1,
    name: "Case 1",
    input: "[2, 7, 11, 15]",
    output: "[0, 1]",
  },
  {
    uid: 2,
    name: "Case 2",
    input: "[3, 2, 4]",
    output: "[1, 2]",
  },
  {
    uid: 3,
    name: "Case 3",
    input: "[3, 3]",
    output: "[0, 1]",
  },
];

export const TestCase = () => {
  return (
    <div className="h-[27vh] overflow-scroll p-2">
      <Tab.Group>
        <Tab.List className="space-x-3 p-2">
          {testCaseDate.map((item) => (
            <Tab
              key={item.uid}
              className="rounded-md bg-gray-100 px-2 py-1 text-sm focus:outline-none"
            >
              {item.name}
            </Tab>
          ))}
        </Tab.List>
        <Tab.Panels>
          {testCaseDate.map((item) => (
            <Tab.Panel key={item.uid}>
              <div className="ml-2 space-y-1">
                <div className="font-inter text-sm text-gray-600">Input</div>
                <pre className="rounded-md bg-gray-100 px-4 py-3 text-sm text-gray-700">
                  {item.input}
                </pre>
                <div className="font-inter text-sm text-gray-600">Output</div>
                <pre className="rounded-md bg-gray-100 px-4 py-3 text-sm text-gray-700">
                  {item.output}
                </pre>
              </div>
            </Tab.Panel>
          ))}
        </Tab.Panels>
      </Tab.Group>
    </div>
  );
};
