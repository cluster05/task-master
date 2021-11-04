import { BrowserRouter, Switch, Route, Redirect } from "react-router-dom";
import Login from "./view/Login";
import Register from "./view/Register";
import ScrumRouter from "./routes/ScrumRouter";
import AdminRouter from "./routes/AdminRouter";

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
          <ScrumRouter />
        </Route>
        <Route path="/admin">
          <AdminRouter />
        </Route>
        <Route path="/">
          <Redirect to="/app" />
        </Route>
      </Switch>
    </BrowserRouter>
  );
};

export default Router;
