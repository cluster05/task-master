import { BrowserRouter, Switch, Route, Redirect } from "react-router-dom";
import Login from "./view/Login";
import Register from "./view/Register";
import ScrumRouter from "./routes/ScrumRouter";
import AdminRouter from "./routes/AdminRouter";
import React from "react";
import ForgotPassword from "./view/ForgotPassword";

const Router = () => {
  return (
    <BrowserRouter>
      <Switch>
        <Route exact path="/login">
          <Login />
        </Route>
        <Route exact path="/register">
          <Register />
        </Route>
        <Route exact path="/forgot-password">
          <ForgotPassword />
        </Route>
        <Route
          path="/app"
          render={() => (true ? <ScrumRouter /> : <Redirect to="/login" />)}
        />
        <Route
          path="/admin"
          render={() => (true ? <AdminRouter /> : <Redirect to="/login" />)}
        />
        <Route exact path="/">
          <Redirect to="/app" />
        </Route>
        <Route path="**" render={() => <div>Page Not Found</div>} />
      </Switch>
    </BrowserRouter>
  );
};

export default Router;
