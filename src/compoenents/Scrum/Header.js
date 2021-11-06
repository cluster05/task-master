import React from "react";

const Header = ({ title, children }) => {
  return (
    <div className="my-2 flex items-center justify-between">
      <h1 className="text-2xl font-medium">{title}</h1>
      <div>{children}</div>
    </div>
  );
};

export default Header;
