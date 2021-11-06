import React from "react";

const Notification = () => {
  const notifications = [];

  return (
    <div className="w-96 bg-white  border shadow absolute top-12 right-0">
      <title className="py-2 bg-gray-100 text-sm block">Notifications</title>
      <div className="text-left overflow-y-auto" style={{ maxHeight: "30rem" }}>
        {notifications.map((notification) => (
          <div className="text-sm m-2 py-2 border-b" key={notification.id}>
            <p> {notification.timestamp} </p>
            <title className="block capitalize">{notification.title}</title>
            <p className="text-gray-400 text-2xs">
              {notification.description}{" "}
            </p>
          </div>
        ))}
        {notifications.length === 0 && (
          <div className="py-5 capitalize text-center text-gray-300">
            no new notification
          </div>
        )}
      </div>
    </div>
  );
};

export default Notification;
