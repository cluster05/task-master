import React from "react";
import Header from "../../compoenents/Scrum/Header";
const Calender = () => {
  return (
    <div>
      <Header title="Calender"></Header>
      <input
        className=" input text-sm bg-gray-200 text-gray-500 focus:shadow-none rounded-full"
        type="date"
      />
      <div className="mb-10 grid grid-cols-3">
        <div className="col-span-2 px-4 ">
        </div>
        <div className="border-l">
        </div>
      </div>
    </div>
  );
};

export default Calender;
