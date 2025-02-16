"use client";

import Anchor from "@/components/anchor";
import Button from "@/components/button";
import { MenuIcon } from "@/components/icons";
import { useState } from "react";

const Menu = () => {
  const [expanded, setExpanded] = useState(false);

  return (
    <>
      <Button
        type="button"
        className="inline-flex items-center px-2 justify-center text-sm text-gray-500 rounded-lg md:hidden hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200"
        onClick={() => setExpanded((prev) => !prev)}
      >
        <span className="sr-only">Open main menu</span>
        <MenuIcon className="w-5 h-5" fill="none" viewBox="0 0 17 14" />
      </Button>
      <div
        className={`${
          expanded ? "max-h-[300px]" : "max-h-0"
        } block overflow-hidden transition-all duration-300 ease-in-out w-full md:max-h-full md:w-auto`}
        id="navbar-default"
      >
        <ul className="font-medium flex flex-col items-center p-4 md:p-0 mt-4 border border-gray-100 rounded-lg bg-gray-100 md:flex-row md:space-x-8 md:mt-0 md:border-0 md:bg-white">
          <li className="w-full text-center py-2 md:w-auto">
            <Anchor className="w-full md:w-auto" href="/">
              Buy
            </Anchor>
          </li>
          <li className="w-full text-center py-2 md:w-auto">
            <Anchor className="w-full md:w-auto" href="/">
              Rent
            </Anchor>
          </li>
          <li className="w-full text-center py-2 md:w-auto">
            <Anchor className="w-full md:w-auto" href="/">
              Place of Advertisment
            </Anchor>
          </li>
          <li className="w-full md:w-auto">
            <Button className="w-full md:w-auto">Sign in</Button>
          </li>
          <li className="w-full mt-2 md:mt-0 md:w-auto">
            <Button className="w-full md:w-auto uppercase" variant="secondary">
              Eng
            </Button>
          </li>
        </ul>
      </div>
    </>
  );
};

export default Menu;
