import React from "react";
import { Link } from "react-router-dom";

const Login = () => {
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
            <input type="button" value="Login" className="btn btn-primary" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Login;
