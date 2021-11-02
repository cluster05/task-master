import { BrowserRouter, Switch, Route } from "react-router-dom";
import Login from "./view/Login";
import Register from "./view/Register";
import Scrum from "./view/Scrum";

const Router = () => {
  return (
    <BrowserRouter>
      <Switch>
        <Route path="/login">
          <Login />
        </Route>
        <Route path="/register">
          <Register />
        </Route>
        <Route path="/app">
          <Scrum />
        </Route>
        <Route path="/">
          <Redirect to="/app" />
        </Route>
      </Switch>
    </BrowserRouter>
  );
};

export default Router;
