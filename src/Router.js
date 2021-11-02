import { BrowserRouter, Switch, Route } from "react-router-dom";
import Login from "./view/Login";
import Register from "./view/Register";
import ScrumApp from "./view/Scrum/ScrumApp";

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
          <ScrumApp />
        </Route>
      </Switch>
    </BrowserRouter>
  );
};

export default Router;
