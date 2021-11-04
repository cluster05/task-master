import React from "react";
import { Link } from "react-router-dom";

const Register = () => {
  return (
    <div className="flex justify-center items-center h-screen">
      <div className="card py-10 w-full max-w-md rounded border-2">
        <div className="card-body">
          <div className="card-title">Register</div>
          <div className="form-control">
            <label className="label">
              <span className="label-text">Username</span>
            </label>
            <input
              type="text"
              placeholder="username"
              className="input input-bordered"
            />
          </div>
          <div className="form-control">
            <label className="label">
              <span className="label-text">Email</span>
            </label>
            <input
              type="email"
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
              <Link to="/login" className="label-text-alt ">
                Already have account ? Log In
              </Link>
            </label>
          </div>
          <div className="form-control mt-6">
            <input type="button" value="Register" className="btn btn-primary" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Register;
