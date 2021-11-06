import React from "react";
import {
  FiBarChart2,
  FiFolder,
  FiFileText,
  FiCalendar,
  FiMessageSquare,
  FiSettings,
} from "react-icons/fi";
import { BiTask } from "react-icons/bi";
import { Link } from "react-router-dom";
const Sidebar = () => {
  const sidebarMenu = [
    { title: "Dashboard", icon: <FiBarChart2 />, link: "dashboard" },
    { title: "Projects", icon: <BiTask />, link: "projects" },
    { title: "Tasks", icon: <FiFolder />, link: "tasks" },
    { title: "Documents", icon: <FiFileText />, link: "documents" },
    { title: "Calender", icon: <FiCalendar />, link: "calender" },
    { title: "Messages", icon: <FiMessageSquare />, link: "messages" },
    { title: "Settings", icon: <FiSettings />, link: "settings" },
  ];

  return (
    <div className="h-screen w-56 py-1 pr-5">
      {sidebarMenu.map((sidebarItem) => (
        <Link to={`/app/${sidebarItem.link}`} key={sidebarItem.title}>
          <div className="w-full my-3 px-4 py-2 bg-gray-100 rounded-tr-full cursor-pointer rounded-br-full  flex items-center">
            <span className="mx-3 text-lg"> {sidebarItem.icon} </span>
            <span className="m-1 text-sm"> {sidebarItem.title} </span>
          </div>
        </Link>
      ))}
    </div>
  );
};

export default Sidebar;
