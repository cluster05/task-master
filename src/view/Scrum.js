import React from "react";
import { Switch, Route } from "react-router";
import Scrumify from "./Scrum/Scrumify";
import Sidebar from "../components/Sidebar/Sidebar";

const Scrum = () => {
  return (
    <div className="w-screen h-screen flex">
      <div className="w-20 border-r-2">
        <Sidebar />
      </div>
      <div className="w-full">
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
