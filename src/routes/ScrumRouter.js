import React from "react";
import { Switch, Route, Redirect, useRouteMatch } from "react-router-dom";
import Account from "../view/Scrum/Account";
import Calender from "../view/Scrum/Calender";
import Dashboard from "../view/Scrum/Dashboard";
import Documents from "../view/Scrum/Documents";
import Messages from "../view/Scrum/Messages";
import Projects from "../view/Scrum/Projects";
import Settings from "../view/Scrum/Settings";
import Tasks from "../view/Scrum/Tasks";
import Sidebar from "../compoenents/Scrum/Sidebar";

const ScrumRouter = () => {
  return (
    <div className="flex">
      <Sidebar />
      <div className="w-full" style={{ backgroundColor: "#F4F3F8" }}>
        <Switch>
          <Route exact path="/app/account">
            <Account />
          </Route>
          <Route exact path="/app/calender">
            <Calender />
          </Route>
          <Route exact path="/app/dashboard">
            <Dashboard />
          </Route>
          <Route exact path="/app/documents">
            <Documents />
          </Route>
          <Route exact path="/app/messages">
            <Messages />
          </Route>
          <Route exact path="/app/projects">
            <Projects />
          </Route>
          <Route exact path="/app/settings">
            <Settings />
          </Route>
          <Route exact path="/app/tasks">
            <Tasks />
          </Route>
          <Route exact path="/">
            <Redirect to="/app/dashboard" />
          </Route>
        </Switch>
      </div>
    </div>
  );
};

export default ScrumRouter;
