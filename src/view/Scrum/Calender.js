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
    </div>
  );
};

export default Calender;
