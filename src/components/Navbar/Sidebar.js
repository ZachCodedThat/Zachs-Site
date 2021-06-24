import React from "react";
import { Link } from "react-router-dom";
import * as AiIcons from "react-icons/ai";
import * as ImIcons from "react-icons/im";

export const SidebarData = [
  {
    title: "Home",
    path: "/",
    icon: <AiIcons.AiFillHome />,
    className: "nav-text",
  },
  {
    title: "Projects",
    path: "/Projects",
    icon: <AiIcons.AiOutlineFundProjectionScreen />,
    className: "nav-text",
  },
  {
    title: "Profile",
    path: "/Profile",
    icon: <ImIcons.ImProfile />,
    className: "nav-text",
  },
];

function Sidebar() {
  return (
    <div>
      {SidebarData.map((item, index) => {
        return (
          <li key={index} className={item.className}>
            <Link to={item.path}>
              {item.icon}
              <span>{item.title}</span>
            </Link>
          </li>
        );
      })}
    </div>
  );
}

export default Sidebar;
