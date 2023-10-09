"use client";

import { Accordion } from '@nextui-org/react';
import { AccordionItem } from '@nextui-org/react';
import { Dropdown } from '@nextui-org/react';
import { DropdownItem } from '@nextui-org/react';
import { DropdownMenu } from '@nextui-org/react';
import { DropdownTrigger } from '@nextui-org/react';
import React from 'react';

const Sidebar_OFNBC: React.FC = () => {
  const defaultContent =
    "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.";

  return (
    <div className="flex flex-col h-screen bg-gray-100 dark:bg-black">
      <div className="flex-grow overflow-y-auto">
        <Accordion>
          <AccordionItem key="1" aria-label="Accordion 1" title="Accordion 1">
            <Dropdown>
              <DropdownTrigger>
                <button className="bg-white dark:bg-gray-800 text-gray-700 dark:text-gray-300 py-2 px-4 rounded-md shadow-md hover:bg-gray-200 dark:hover:bg-gray-700 transition-colors duration-300">
                  Dropdown
                </button>
              </DropdownTrigger>
              <DropdownMenu>
                <DropdownItem>
                  <a href="#">Option 1</a>
                </DropdownItem>
                <DropdownItem>
                  <a href="#">Option 2</a>
                </DropdownItem>
                <DropdownItem>
                  <a href="#">Option 3</a>
                </DropdownItem>
              </DropdownMenu>
            </Dropdown>
            {defaultContent}
          </AccordionItem>
          <AccordionItem key="2" aria-label="Accordion 2" title="Accordion 2">
            <Dropdown>
              <DropdownTrigger>
                <button className="bg-white dark:bg-gray-800 text-gray-700 dark:text-gray-300 py-2 px-4 rounded-md shadow-md hover:bg-gray-200 dark:hover:bg-gray-700 transition-colors duration-300">
                  Dropdown
                </button>
              </DropdownTrigger>
              <DropdownMenu>
                <DropdownItem>
                  <a href="#">Option 1</a>
                </DropdownItem>
                <DropdownItem>
                  <a href="#">Option 2</a>
                </DropdownItem>
                <DropdownItem>
                  <a href="#">Option 3</a>
                </DropdownItem>
              </DropdownMenu>
            </Dropdown>
            {defaultContent}
          </AccordionItem>
          <AccordionItem key="3" aria-label="Accordion 3" title="Accordion 3">
            <Dropdown>
              <DropdownTrigger>
                <button className="bg-white dark:bg-gray-800 text-gray-700 dark:text-gray-300 py-2 px-4 rounded-md shadow-md hover:bg-gray-200 dark:hover:bg-gray-700 transition-colors duration-300">
                  Dropdown
                </button>
              </DropdownTrigger>
              <DropdownMenu>
                <DropdownItem>
                  <a href="#">Option 1</a>
                </DropdownItem>
                <DropdownItem>
                  <a href="#">Option 2</a>
                </DropdownItem>
                <DropdownItem>
                  <a href="#">Option 3</a>
                </DropdownItem>
              </DropdownMenu>
            </Dropdown>
            {defaultContent}
          </AccordionItem>
        </Accordion>
      </div>
    </div>
  );
};

export default Sidebar_OFNBC;