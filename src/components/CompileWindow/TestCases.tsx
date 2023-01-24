import { Tab } from "@headlessui/react";

const testCaseDate = [
  {
    uid: 1,
    name: "Case 1",
    input: "1 2 3 4 5 6 7 8 9 10",
    output: "55",
  },
  {
    uid: 2,
    name: "Case 2",
    input: "10 9 8 7 6 5 4 3 2 1",
    output: "44",
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
