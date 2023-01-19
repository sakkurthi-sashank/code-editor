import React from "react";
import { Tab } from "@headlessui/react";

function classNames(...classes: string[]) {
  return classes.filter(Boolean).join(" ");
}

const tabs = [
  { name: "Statement" },
  { name: "Submission" },
  { name: "Solution" },
];

export const Questions = () => {
  return (
    <Tab.Group>
      <Tab.List className="flex w-full justify-between border-b border-gray-200">
        {tabs.map((tab) => (
          <Tab
            key={tab.name}
            className={({ selected }) =>
              classNames(
                "h-12 w-full text-center font-inter font-medium text-gray-700 focus:outline-none",
                selected
                  ? "border-b-2 border-blue-500"
                  : "border-b-2 border-transparent"
              )
            }
          >
            {tab.name}
          </Tab>
        ))}
      </Tab.List>
      <Tab.Panels>
        <Tab.Panel>
          <div className=""></div>
        </Tab.Panel>
        <Tab.Panel></Tab.Panel>
        <Tab.Panel></Tab.Panel>
      </Tab.Panels>
    </Tab.Group>
  );
};
