import React from "react";
import { Switch, Route, Redirect, useRouteMatch } from "react-router-dom";
import Account from "../view/Scrum/Account";
import Calender from "../view/Scrum/Calender";
import Dashboard from "../view/Scrum/Dashboard";
import Documents from "../view/Scrum/Documents";
import Projects from "../view/Scrum/Projects";
import Settings from "../view/Scrum/Settings";
import Tasks from "../view/Scrum/Tasks";

const ScrumRouter = () => {
  let { path, url } = useRouteMatch();

  return (
    <div>
      <Switch>
        <Route path={`${path}/account`}>
          <Account />
        </Route>
        <Route path={`${path}/calender`}>
          <Calender />
        </Route>
        <Route path={`${path}/dashboard`}>
          <Dashboard />
        </Route>
        <Route path={`${path}/documents`}>
          <Documents />
        </Route>
        <Route path={`${path}/projects`}>
          <Projects />
        </Route>
        <Route path={`${path}/settings`}>
          <Settings />
        </Route>
        <Route path={`${path}/tasks`}>
          <Tasks />
        </Route>
        <Route path={`${path}/`}>
          <Redirect to={`${path}/dashboard`} />
        </Route>
      </Switch>
    </div>
  );
};

export default ScrumRouter;
