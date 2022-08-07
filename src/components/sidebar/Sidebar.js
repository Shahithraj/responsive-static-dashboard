import React, { useState } from "react";
import "./Sidebar.css";
import { SidebarData } from "./Data";
import { UilSignOutAlt } from "@iconscout/react-unicons";
const Sidebar = () => {
  const [selectedMenu, setSelectedMenu] = useState(0);

  return (
    <div className="sidebar">
      {/* logo */}
      <div className="logo">
        <img
          src="https://github.com/ZainRk/React-Admin-Dashboard-public/blob/master/src/imgs/logo.png?raw=true"
          alt=""
        />
        <span>
          Sh<span>o</span>ps
        </span>
      </div>
      {/* menu */}
      <div className="menu">
        {SidebarData.map((item, index) => (
          <div
            key={index}
            className={selectedMenu === index ? "menuItem active" : "menuItem"}
            onClick = {() =>setSelectedMenu(index)}
          >
            <item.icon></item.icon>
            <span>{item.heading}</span>
          </div>
        ))}
        <div className="menuItem">
          <UilSignOutAlt />
        </div>
      </div>
    </div>
  );
};

export default Sidebar;
