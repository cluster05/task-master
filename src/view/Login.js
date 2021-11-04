import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { Link } from "react-router-dom";
import { LOGIN } from "../store/Auth/auth.store";
import {
  RESET_ERROR_STATE,
  SHOW_ERROR_ALERT,
} from "../store/Alert/alert.store";

const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [showPassword, setShowPassword] = useState(false);

  const dispatch = useDispatch();

  const loginHandler = () => {
    if (!email && !password) {
      dispatch(
        SHOW_ERROR_ALERT({
          type: "SHOW_ERROR_MESSAGE",
          payload: {
            message: "Invalid email and password",
          },
        })
      );
      setTimeout(() => {
        dispatch(RESET_ERROR_STATE());
      }, 3000);
      return;
    }
    dispatch(
      LOGIN({
        type: "LOGIN",
        payload: {
          email,
          password,
        },
      })
    );
  };

  return (
    <div className="flex justify-center items-center h-screen">
      <div className="card py-10 w-full max-w-md  border-2">
        <div className="card-body">
          <div className="card-title">Log In</div>
          <div className="form-control">
            <label className="label">
              <span className="label-text">Email</span>
            </label>
            <input
              type="text"
              placeholder="email"
              className="input input-bordered"
              onChange={(e) => setEmail(e.target.value)}
            />
          </div>
          <div className="form-control">
            <label className="label">
              <span className="label-text">Password</span>
            </label>
            <input
              type="text"
              placeholder="password"
              className="input input-bordered"
              onChange={(e) => setPassword(e.target.value)}
            />
            <label className="label">
              <Link to="/forgot-password" className="label-text-alt">
                Forgot password ?
              </Link>
            </label>
            <label className="label">
              <Link to="/register" className="label-text-alt">
                Dont have account ? Create new account
              </Link>
            </label>
          </div>
          <div className="form-control mt-6">
            <input
              onClick={loginHandler}
              type="button"
              value="Login"
              className="btn btn-primary"
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Login;
