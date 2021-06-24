import React, { useState } from "react";
import * as FaIcons from "react-icons/fa";
import * as AiIcons from "react-icons/ai";
import { Link } from "react-router-dom";
import Sidebar from "./Sidebar";
import "./Nav.css";

function Nav() {
  const [sidebar, setSidebar] = useState(false);
  const [navbar, setNavbar] = useState(false);

  const showSidebar = () => setSidebar(!sidebar);

  const changeBackground = () => {
    if (window.scrollY >= 80) {
      setNavbar(true);
    } else {
      setNavbar(false);
    }
  };

  window.addEventListener("scroll", changeBackground);
  return (
    <header>
      <>
        <div className={navbar ? "navbar navbar-scroll" : "navbar"}>
          <Link to="#" className="menu-bars">
            <FaIcons.FaBars onClick={showSidebar} />
          </Link>
        </div>
        <nav className={sidebar ? "nav-menu active " : "nav-menu"}>
          <ul className="nav-menu-items" onClick={showSidebar}>
            <li className="navbar-toggle">
              <Link to="#" className="menu-bars">
                <AiIcons.AiOutlineClose />
              </Link>
            </li>
            <Sidebar />
          </ul>
        </nav>
      </>
    </header>
  );
}

export default Nav;
