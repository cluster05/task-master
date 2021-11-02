import React from "react";
import { Switch, Route } from "react-router";
import Scrumify from "./Scrum/Scrumify";
import Sidebar from "../components/Sidebar/Sidebar";

const Scrum = () => {
  return (
    <div className="w-screen h-screen flex">
      <div className="bg-gray-900 w-20">
        <Sidebar />
      </div>
      <div className="bg-gray-500 w-full">
        <Switch>
          <Route path="/">
            <Scrumify />
          </Route>
        </Switch>
      </div>
    </div>
  );
};

export default Scrum;
