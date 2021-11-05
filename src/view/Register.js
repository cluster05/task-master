import React, { useState } from "react";
import { FaEye, FaEyeSlash } from "react-icons/fa";
import { Link } from "react-router-dom";
import { register } from "../services/auth.service";

const Register = () => {
  const [username, setUsername] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [showPassword, setShowPassword] = useState(false);

  const registerHandler = () => {
    register(username, email, password);
  };

  const toggleShowPasswordHandler = () => {
    setShowPassword(!showPassword);
  };

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
              onChange={(e) => setUsername(e.target.value)}
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
            <Link to="/login" className="label-text-alt">
              Already have account ? Log in
            </Link>
          </label>
          <div className="form-control mt-6">
            <input
              type="button"
              value="Register"
              className="btn btn-primary"
              onClick={registerHandler}
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Register;
