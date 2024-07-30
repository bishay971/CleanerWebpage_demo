import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import * as Icons from "react-icons/fa";
import "./Navbar.css";
import { navItems } from "./NavItems";
import Dropdown from "./Dropdown";

const Navbar = () => {
  const [dropdown, setDropdown] = useState(false);
  const [isOpen, setIsOpen] = useState(false);
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth <= 768); // Adjust this value based on your mobile breakpoint
    };

    handleResize(); // Check initial size
    window.addEventListener("resize", handleResize);

    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  const toggleNavbar = () => {
    setIsOpen(!isOpen);
    document.body.style.marginLeft = isOpen ? "0" : "0";
  };

  const closeNavbar = () => {
    setIsOpen(false);
    document.body.style.marginLeft = "0";
  };

  return (
    <>
      <div className={`navi-bar ${isOpen ? "open" : ""}`}>
        <nav className="navbar-second container">
          <ul className={`nav-items-second ${isOpen ? "open" : ""}`}>
            {navItems.map((item) => {
              if (item.title === "SERVICES") {
                return (
                  <li
                    key={item.id}
                    className={item.cName}
                    onMouseEnter={() => !isMobile && setDropdown(true)}
                    onMouseLeave={() => !isMobile && setDropdown(false)}
                  >
                    <Link to={item.path} onClick={closeNavbar}>
                      {item.title}
                    </Link>
                    {dropdown && !isMobile && <Dropdown />}
                  </li>
                );
              }
              return (
                <li key={item.id} className={item.cName}>
                  <Link to={item.path} onClick={closeNavbar}>
                    {item.title}
                  </Link>
                </li>
              );
            })}
          </ul>
          <button
            className={`hamburger ${isOpen ? "open" : ""}`}
            onClick={toggleNavbar}
          >
            <Icons.FaBars />
          </button>
        </nav>
      </div>
    </>
  );
};

export default Navbar;
