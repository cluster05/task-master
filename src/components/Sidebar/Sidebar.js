import React, { useState } from "react";
import { FaGreaterThan, FaPlus } from "react-icons/fa";
import SidebarItem from "./SidebarItem";
import CreateScrum from "./CreateScrum/CreateScrum";

const Sidebar = () => {
  const [createScrumPopUp, setCreateScrumPopUp] = useState(false);

  return (
    <div className="flex flex-col items-center">
      <SidebarItem icon={<FaGreaterThan />} title="Home" />
      <div className="h-1 w-10 m-1 bg-gray-200 rounded-full"></div>
      <SidebarItem
        icon={<FaPlus />}
        title="Create New Scrum"
        onclickHandler={() => setCreateScrumPopUp(true)}
      />
      <CreateScrum
        createScrumPopUp={createScrumPopUp}
        closeBackdrop={() => setCreateScrumPopUp(false)}
      />
    </div>
  );
};

export default Sidebar;
