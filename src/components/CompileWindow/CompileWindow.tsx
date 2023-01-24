import React from "react";
import { Tab } from "@headlessui/react";
import { TestCase } from "./TestCases";
import { Buttons } from "./Buttons";

function classNames(...classes: string[]) {
  return classes.filter(Boolean).join(" ");
}

const tabs = [{ name: "TestCase" }, { name: "Result" }];

export const CompileWindow = () => {
  return (
    <div className="mt-[1vh] h-[36vh] w-full bg-white">
      <Tab.Group>
        <Tab.List className="flex h-[6vh] border-b">
          {tabs.map((tab) => (
            <Tab
              key={tab.name}
              className={({ selected }) =>
                classNames(
                  "h-full w-28 text-center font-inter text-xs font-normal focus:outline-none",
                  selected
                    ? "border-b-2 border-gray-900 text-gray-900"
                    : "text-gray-600"
                )
              }
            >
              {tab.name}
            </Tab>
          ))}
        </Tab.List>
        <Tab.Panels className="h-[34vh] bg-white">
          <Tab.Panel className="relative">
            <TestCase />
            <Buttons />
          </Tab.Panel>
        </Tab.Panels>
      </Tab.Group>
    </div>
  );
};
