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
        <nav>
            <ul>
                {MENU_LIST.map((menu, idx) => (
                <li
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
    );

  }

  export default NavBar;