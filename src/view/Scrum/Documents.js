import React from "react";
import Header from "../../compoenents/Scrum/Header";
import { FiStar, FiSearch } from "react-icons/fi";

const Documents = () => {
  return (
    <div>
      <Header title="Documents"></Header>
      <div>
        <div> </div>
        <div className="grid grid-cols-4 gap-4">
          <div className="p-3 rounded shadow-md bg-white"></div>
        </div>
      </div>
    </div>
  );
};

export default Documents;
