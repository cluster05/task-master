import React from "react";
import { FiMoreHorizontal } from "react-icons/fi";
import ScrumCard from "./ScrumCard";

const ScrumBar = ({ title, color }) => {
  const numberofTask = Math.round(Math.random() * 10 + 1);
  const tasks = [];
  for (let i = 0; i < numberofTask; i++) {
    tasks.push("title" + i);
  }

  return (
    <div>
      <div className="flex items-center justify-between">
        <div className="flex items-center">
          <span className={`w-3 h-3 rounded-full bg-${color}`}></span>
          <h3 className="mx-2"> {title} </h3>
          <button className="btn btn-square bg-gray-300 hover:bg-gray-300 border-none text-gray-500 btn-xs">
            {numberofTask}
          </button>
        </div>
        <span className="text-xl">
          <FiMoreHorizontal />
        </span>
      </div>
      <div>
        {tasks.map((task, index) => (
          <ScrumCard key={`${title}-${index}`} />
        ))}
      </div>
    </div>
  );
};

export default ScrumBar;
