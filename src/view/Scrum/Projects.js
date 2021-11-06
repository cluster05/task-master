import React from "react";
import Header from "../../compoenents/Scrum/Header";
import { FiFilter, FiX } from "react-icons/fi";
const Projects = () => {
  return (
    <div>
      <Header title="Projects">
        <button className="mx-1 btn btn-sm btn-accent text-xs btn-outline ">
          <span className="mr-1 rotate-45 transform">
            <FiX />
          </span>
          <span className="font-normal">New Project</span>
        </button>
        <button className="mx-1 btn btn-sm btn-accent text-xs">
          <span className="mr-1">
            <FiFilter />
          </span>
          <span className="font-normal bg-purple-500 ">Filter</span>
        </button>
      </Header>
    </div>
  );
};

export default Projects;
