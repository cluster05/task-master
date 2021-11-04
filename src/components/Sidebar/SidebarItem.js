import React from "react";
import "./SidebarItem.css";

const SidebarItem = ({ icon, title }) => {
  return (
    <div className="h-12 w-12 m-1 cursor-pointer border-2 border-green-400 text-green-400  hover:bg-green-400 hover:text-white rounded-2xl flex justify-center items-center icon">
      <div className="text-2x0l relative ">
        <span>{icon}</span>
        <span className="px-3 py-1 rounded tracking-wide whitespace-nowrap text-sm bg-black bg-opacity-75 absolute -top-2 left-12 title">
          {title}
        </span>
      </div>
    </div>
  );
};

export default SidebarItem;
