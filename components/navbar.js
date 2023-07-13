import Link from "next/link";
import Image from "next/image";
import React, { useState } from "react";
import NavItem from "./navitem";

const MENU_LIST = [
    // TODO: Make this dynamic based on structure in notion?
    { text: "Home", href: "/" },
    { text: "About", href: "/about" },
    { text: "Contact", href: "/contact" },
    { text: "Projects", href: "/projects"}
  ];

  const NavBar = () => {
    const [navActive, setNavActive] = useState(null);
    const [activeIdx, setActiveIdx] = useState(-1);

    return (
        <header>
            <nav className="bg-white border-gray-200 dark:bg-gray-900">
                <ul className="font-medium flex flex-col p-4 md:p-0 mt-4 border border-gray-100 rounded-lg bg-gray-50 md:flex-row md:space-x-8 md:mt-0 md:border-0 md:bg-white dark:bg-gray-800 md:dark:bg-gray-900 dark:border-gray-700">
                    {MENU_LIST.map((menu, idx) => (
                    <li
                        className="block py-2 pl-3 pr-4 text-white bg-blue-700 rounded md:bg-transparent md:text-blue-700 md:p-0 dark:text-white md:dark:text-blue-500"
                        onClick={() => {
                        setActiveIdx(idx);
                        setNavActive(false);
                        }}
                        key={menu.text}
                    >
                        <NavItem active={activeIdx === idx} {...menu} />
                    </li>
                    ))}
                </ul>
            </nav>
        </header>
    );

  }

  export default NavBar;