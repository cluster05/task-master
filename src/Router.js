import { BrowserRouter, Switch, Route, Redirect } from "react-router-dom";
import Login from "./view/Login";
import Register from "./view/Register";
import ScrumRouter from "./routes/ScrumRouter";
import AdminRouter from "./routes/AdminRouter";
import { useDispatch, useSelector } from "react-redux";
import { INITIAL_APP_LOADING } from "./store/Auth/auth.store";
import React, { useEffect } from "react";
import ForgotPassword from "./view/ForgotPassword";

const Router = () => {
  const dispatch = useDispatch();
  const auth = useSelector((state) => state.auth);
  useEffect(() => {
    dispatch(INITIAL_APP_LOADING());
  }, []);

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
          exact
          path="/app"
          render={() =>
            auth.isAuthanticated ? <ScrumRouter /> : <Redirect to="/login" />
          }
        />
        <Route
          exact
          path="/admin"
          render={() =>
            auth.isAuthanticated ? <AdminRouter /> : <Redirect to="/login" />
          }
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
