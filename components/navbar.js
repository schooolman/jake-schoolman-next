import React, { useState, useEffect } from "react";
import NavItem from "./navitem";
import navStyles from '../styles/components/navigation.module.scss';

const MENU_LIST = [
    { text: "Home", href: "/" },
    { text: "About", href: "/about" },
    { text: "Work", href: "/projects"},
    { text: "Contact", href: "/contact" },
];

const NavBar = () => {
    const [navActive, setNavActive] = useState(null);
    const [activeIdx, setActiveIdx] = useState(-1);
    const [menuState, toggleMenu] = useState('closed');

    let computedClass = menuState === 'closed' ? navStyles.menuClosed : navStyles.menuOpen;

    useEffect(() => {
        const handleKeyPress = (e) => {
            if (e.key === 'Escape') {
                toggleMenu('closed');
            }
        };

        document.addEventListener('keydown', handleKeyPress);

        return () => {
            document.removeEventListener('keydown', handleKeyPress);
        };
    }, []);

    return (
        <nav className={`${navStyles.navigation} ${computedClass}`}>
            <ul>
                {MENU_LIST.map((menu, idx) => (
                <li
                    onClick={() => {
                    setActiveIdx(idx);
                    setNavActive(false);
                    }}
                    key={menu.text}>
                    <NavItem active={activeIdx === idx} {...menu} />
                </li>
                ))}
            </ul>
            <div className={navStyles.menuButton}>
                <svg 
                    className={navStyles.hamburgerClosed} 
                    xmlns="http://www.w3.org/2000/svg" 
                    width="50" 
                    height="50" 
                    viewBox="0 0 50 50" 
                    fill="none"
                    onClick={() => {
                        toggleMenu('open');
                    }}
                    >
                    <path fillRule="evenodd" clipRule="evenodd" d="M7.8125 25C7.8125 23.8135 8.77439 22.8516 9.96094 22.8516H40.0391C41.2256 22.8516 42.1875 23.8135 42.1875 25C42.1875 26.1865 41.2256 27.1484 40.0391 27.1484H9.96094C8.77439 27.1484 7.8125 26.1865 7.8125 25Z" fill="white"/>
                    <path fillRule="evenodd" clipRule="evenodd" d="M7.8125 17.1875C7.8125 16.001 8.77439 15.0391 9.96094 15.0391H40.0391C41.2256 15.0391 42.1875 16.001 42.1875 17.1875C42.1875 18.374 41.2256 19.3359 40.0391 19.3359H9.96094C8.77439 19.3359 7.8125 18.374 7.8125 17.1875Z" fill="white"/>
                    <path fillRule="evenodd" clipRule="evenodd" d="M7.8125 32.8125C7.8125 31.626 8.77439 30.6641 9.96094 30.6641H40.0391C41.2256 30.6641 42.1875 31.626 42.1875 32.8125C42.1875 33.999 41.2256 34.9609 40.0391 34.9609H9.96094C8.77439 34.9609 7.8125 33.999 7.8125 32.8125Z" fill="white"/>
                </svg>
                <svg
                    className={navStyles.hamburgerOpen}
                    xmlns="http://www.w3.org/2000/svg"
                    width="50"
                    height="50"
                    viewBox="0 0 50 50"
                    fill="none"
                    onClick={() => {
                        toggleMenu('closed');
                    }}>
                    <path d="M28.3147 24.9997L37.5921 15.7224C38.0324 15.2829 38.28 14.6864 38.2806 14.0643C38.2811 13.4422 38.0345 12.8453 37.595 12.405C37.1555 11.9647 36.5591 11.717 35.9369 11.7165C35.3148 11.7159 34.7179 11.9626 34.2776 12.4021L25.0003 21.6794L15.7229 12.4021C15.2826 11.9618 14.6855 11.7144 14.0628 11.7144C13.4401 11.7144 12.8429 11.9618 12.4026 12.4021C11.9623 12.8424 11.715 13.4396 11.715 14.0622C11.715 14.6849 11.9623 15.2821 12.4026 15.7224L21.68 24.9997L12.4026 34.2771C11.9623 34.7174 11.715 35.3146 11.715 35.9372C11.715 36.5599 11.9623 37.1571 12.4026 37.5974C12.8429 38.0377 13.4401 38.285 14.0628 38.285C14.6855 38.285 15.2826 38.0377 15.7229 37.5974L25.0003 28.32L34.2776 37.5974C34.7179 38.0377 35.3151 38.285 35.9378 38.285C36.5605 38.285 37.1576 38.0377 37.5979 37.5974C38.0382 37.1571 38.2856 36.5599 38.2856 35.9372C38.2856 35.3146 38.0382 34.7174 37.5979 34.2771L28.3147 24.9997Z" fill="white"/>
                </svg>
            </div>
        </nav>
    );

}

export default NavBar;