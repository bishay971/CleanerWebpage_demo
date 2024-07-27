import React, { useState } from "react";
import { Link } from "react-router-dom";
import * as Icons from "react-icons/fa";
import "./Navbar.css";
import { navItems } from "./NavItems";
import Dropdown from "./Dropdown";

const Navbar = () => {
  const [dropdown, setDropdown] = useState(false);

  return (
    <div className="navi-bar">
      <nav className="navbar-second container">
        {/* <Link to="/" className="navbar-logo">
          Nature
        </Link> */}
        <ul className="nav-items-second">
          {navItems.map((item) => {
            if (item.title === "SERVICES") {
              return (
                <li
                  key={item.id}
                  className={item.cName}
                  onMouseEnter={() => setDropdown(true)}
                  onMouseLeave={() => setDropdown(false)}
                >
                  <Link to={item.path}>{item.title}</Link>
                  {dropdown && <Dropdown />}
                </li>
              );
            }

            return (
              <li key={item.id} className={item.cName}>
                <Link to={item.path}>{item.title}</Link>
              </li>
            );
          })}
        </ul>
      </nav>
    </div>
  );
};

export default Navbar;
