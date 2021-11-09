import React from "react";
import { FiArrowRight } from "react-icons/fi";
import Header from "../../compoenents/Scrum/Header";

const Messages = () => {
  const messages = [];
  for (let i = 0; i < 20; i++) {
    messages.push("messages" + i);
  }

  const chatHistory = [
    {
      type: "text",
      from: "Ajay Kumbhar",
      to: "Manoj Kumavat",
      message: "Hello Monoj !",
      send: Date.now(),
      received: Date.now(),
      read: Date.now(),
    },
    {
      type: "text",
      from: "Manoj Kumavat",
      to: "Ajay Kumbhar",
      message: "Hi Ajay ",
      send: Date.now(),
      received: Date.now(),
      read: Date.now(),
    },
    {
      type: "file",
      from: "Manoj Kumavat",
      to: "Ajay Kumbhar",
      file: "https://via.placeholder.com/150",
      alt: "placeholder com",
      type: "image",
      send: Date.now(),
      received: Date.now(),
      read: Date.now(),
    },
    {
      type: "text",
      from: "Manoj Kumavat",
      to: "Ajay Kumbhar",
      message: "Can you fix this",
      send: Date.now(),
      received: Date.now(),
      read: Date.now(),
    },
  ];

  return (
    <div className="h-full">
      <Header title="Messages"></Header>
      <div className="grid grid-cols-12">
        <div className="w-80 col-span-3 h-screen overflow-y-scroll">
          {messages.map((task, index) => (
            <div
              key={index}
              className="px-2 py-4 border-b-2 flex items-center cursor-pointer hover:bg-gray-200"
            >
              <div>
                <img
                  className="h-10 w-10 border border-white rounded-full"
                  style={{ minWidth: "2rem", minHeight: "2rem" }}
                  src="https://via.placeholder.com/150"
                  alt="image_1"
                />
              </div>
              <div className="ml-4 text-xs">
                <p className="block capitalize">Ajay Kumbhar</p>
                <p className="mt-1 text-gray-500 ">
                  We are bringing together the best together
                </p>
              </div>
            </div>
          ))}
        </div>
        <div className="w-full col-span-9 h-screen overflow-y-scroll flex justify-between flex-col">
          <div className="p-4 bg-gray-200 flex items-center sticky top-0 left-0">
            <div>
              <img
                className="h-10 w-10 border border-white rounded-full"
                style={{ minWidth: "2rem", minHeight: "2rem" }}
                src="https://via.placeholder.com/150"
                alt="image_1"
              />
            </div>
            <div className="ml-4">
              <h3> Ajay Kumbhar </h3>
              <p className="text-xs text-gray-500"> last seen 4 PM </p>
            </div>
          </div>
          <div className="">
            {messages.map((message) => {
              if (message.type == "text") {
                return <MessageFile message={message} />;
              } else if (message.type == "file") {
                return <MessageRichTextEditor message={message} />;
              }
            })}
          </div>
          <div className="p-2 flex items-center">
            <div className="px-3 w-full">
              <input
                type="text"
                className="input border border-gray-300 w-full"
              />
            </div>
            <button className="btn btn-circle font-medium text-2xl btn-outline btn-accent">
              <FiArrowRight />
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

const MessageFile = ({ message }) => {
  return (
    <div className="p-4 border border-gray-400 rounded ">{message.altm}</div>
  );
};

const MessageRichTextEditor = ({ message }) => {};

export default Messages;
