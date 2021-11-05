import React, { useState } from "react";
import { Link } from "react-router-dom";
import { FaEye, FaEyeSlash } from "react-icons/fa";
import { login } from "../services/auth.service";

const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [showPassword, setShowPassword] = useState(false);

  const loginHandler = () => {
    login(email, password);
  };

  const toggleShowPasswordHandler = () => {
    setShowPassword(!showPassword);
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
            <div className="relative">
              <input
                type={showPassword ? "text" : "password"}
                placeholder="password"
                className=" pr-16 w-full input input-bordered"
                onChange={(e) => setPassword(e.target.value)}
              />
              <span
                onClick={toggleShowPasswordHandler}
                className="absolute top-0 right-0 rounded-l-none btn btn-outline"
              >
                {showPassword ? <FaEye /> : <FaEyeSlash />}
              </span>
            </div>
          </div>
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
          <div className="form-control mt-6">
            <input
              type="button"
              value="Login"
              className="btn btn-primary"
              onClick={loginHandler}
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Login;
