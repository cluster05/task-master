import React, { useState } from "react";
import { FiSearch, FiUser, FiBell, FiHelpCircle } from "react-icons/fi";
import { Link } from "react-router-dom";
import Notification from "./Notification";
const Navbar = () => {
  const [showNotification, setShowNotification] = useState(false);

  const toggleShowNotification = () => {
    setShowNotification(!showNotification);
  };

  return (
    <div className="flex justify-between items-center">
      <div className="p-1 border flex items-center bg-white rounded-lg">
        <span className="ml-2  text-xl">
          <FiSearch />
        </span>
        <input
          className="px-4 py-2 text-sm focus:outline-none"
          placeholder="Search"
        />
      </div>
      <div>
        <button
          className="m-1 p-3 bg-white border rounded-lg relative"
          onClick={toggleShowNotification}
        >
          <FiBell />
          {showNotification && <Notification />}
        </button>
        <button className="m-1 p-3 bg-white border rounded-lg">
          <FiHelpCircle />
        </button>
        <Link to="/app/account">
          <button className="m-1 p-3 bg-white border rounded-lg">
            <FiUser />
          </button>
        </Link>
      </div>
    </div>
  );
};

export default Navbar;
