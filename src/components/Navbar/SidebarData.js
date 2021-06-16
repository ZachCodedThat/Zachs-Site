import React from "react";
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
