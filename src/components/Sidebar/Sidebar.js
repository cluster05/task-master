import React from "react";
import { FaGreaterThan, FaPlus } from "react-icons/fa";
import SidebarIcon from "./SidebarIcon";

const Sidebar = () => {
  return (
    <div>
      <SidebarIcon icon={FaGreaterThan} title="title" />
      <SidebarIcon icon={FaPlus} title="title" />
    </div>
  );
};

export default Sidebar;
