import React from "react";
import { MdAccessAlarms } from "react-icons/md";
import { FiCheckCircle, FiPaperclip } from "react-icons/fi";
const ScrumCard = () => {
  return (
    <div className="my-2 p-4 rounded border bg-white text-sm">
      <div className="cursor-pointer">
        <title className="block capitalize ">The Future of React Router</title>
        <p className="mt-1 text-gray-500 text-xs leading-5">
          We are bringing together the best of React Router and Reach Router
          into a new, hook-based API. React Router will be the surviving
          project.
        </p>
      </div>
      <div className="select-none">
        <div className="mt-2 flex justify-between items-center text-sm">
          <span className="text-gray-400 text-xs"> 50 of 100 % </span>
          <div className="px-1 rounded text-warning border border-warning bg-yellow-50 flex items-center">
            <span>
              <MdAccessAlarms />
            </span>
            <span className="ml-1">2 W left</span>
          </div>
        </div>
        <progress
          className="progress progress-success h-1 "
          value="50"
          max="100"
        ></progress>
      </div>
      <div className="flex items-center justify-between select-none">
        <div className="flex items-center">
          <div data-tip="Ajay Kumbhar" className="tooltip">
            <img
              className="h-8 w-8 border border-white rounded-full"
              src="https://via.placeholder.com/150"
              alt="image_1"
            />
          </div>
        </div>
        <div className="flex items-center text-2xs">
          <div className="px-2 m-1 flex items-center rounded bg-gray-200 text-gray-400">
            <span className="mr-1">
              <FiPaperclip />
            </span>
            <span>6</span>
          </div>
          <div className="px-2 m-1 flex items-center rounded bg-gray-200 text-gray-400">
            <span className="mr-1">
              <FiCheckCircle />
            </span>
            <span>1 / 8</span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ScrumCard;
