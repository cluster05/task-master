import React from "react";
import { FaGreaterThan, FaPlus } from "react-icons/fa";
import SidebarItem from "./SidebarItem";

const Sidebar = () => {
  return (
    <div className="flex flex-col items-center">
      <SidebarItem icon={<FaGreaterThan />} title="Home" />
      <div className="h-1 w-12 m-1 bg-gray-200 rounded-full"></div>
      <SidebarItem icon={<FaPlus />} title="Create New Scrum" />
    </div>
  );
};

export default Sidebar;
