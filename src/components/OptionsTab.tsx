import React from "react";
import { Tab } from "@headlessui/react";

function classNames(...classes: string[]) {
  return classes.filter(Boolean).join(" ");
}

const tabs = [
  { name: "Description" },
  { name: "Discussion" },
  { name: "Submission" },
  { name: "Solutions" },
];

export const OptionsTab = () => {
  return (
    <Tab.Group>
      <Tab.List className="flex w-full justify-between">
        {tabs.map((tab) => (
          <Tab
            key={tab.name}
            className={({ selected }) =>
              classNames(
                "h-10 w-full text-center font-inter text-xs font-normal text-gray-600 focus:outline-none",
                selected ? "rounded-t-md bg-white" : ""
              )
            }
          >
            {tab.name}
          </Tab>
        ))}
      </Tab.List>
      <Tab.Panels className="h-[87vh] bg-white">
        <Tab.Panel>
          <div className=""></div>
        </Tab.Panel>
        <Tab.Panel></Tab.Panel>
        <Tab.Panel></Tab.Panel>
        <Tab.Panel></Tab.Panel>
      </Tab.Panels>
    </Tab.Group>
  );
};
