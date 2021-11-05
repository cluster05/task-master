import React, { useState } from "react";
import { Link } from "react-router-dom";
import { FaEye, FaEyeSlash } from "react-icons/fa";
import { login as loginAuth } from "../services/auth.service";
import { useForm } from "react-hook-form";

const Login = () => {
  const [showPassword, setShowPassword] = useState(false);
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const loginHandler = (data) => {
    loginAuth(data);
  };

  const toggleShowPasswordHandler = () => {
    setShowPassword(!showPassword);
  };

  return (
    <div className="flex justify-center items-center h-screen">
      <form
        onSubmit={handleSubmit(loginHandler)}
        className="card py-10 w-full max-w-md  border-2"
      >
        <div className="card-body">
          <div className="card-title">Log In</div>
          <div className="form-control">
            <label className="label">
              <span className="label-text">Email</span>
            </label>
            <input
              type="text"
              placeholder="email"
              {...register("email", {
                required: {
                  value: true,
                  message: "Email is required field",
                },

                pattern: {
                  value:
                    /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/,
                  message: "Email is not valid",
                },
              })}
              className="input input-bordered"
            />
            {errors.email && (
              <label className="label text-xs text-error">
                {errors.email.message}
              </label>
            )}
          </div>
          <div className="form-control">
            <label className="label">
              <span className="label-text">Password</span>
            </label>
            <div className="relative">
              <input
                type={showPassword ? "text" : "password"}
                placeholder="password"
                {...register("password", {
                  required: {
                    value: true,
                    message: "Password is required field",
                  },
                  minLength: {
                    value: 8,
                    message: "Password must contain minimun 8 letter",
                  },
                  pattern: {
                    value:
                      /(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[^A-Za-z0-9])(?=.{8,})/,
                    message:
                      "Password is not strong.\nPassword must contain 1 uppercase letter, 1 lowercase letter, 1 numeric, 1 special symbol",
                  },
                  maxLength: {
                    value: 20,
                    message: "Password must contain maximun 20 letter",
                  },
                })}
                className=" pr-16 w-full input input-bordered"
              />
              <span
                onClick={toggleShowPasswordHandler}
                className="absolute top-0 right-0 rounded-l-none btn btn-outline"
              >
                {showPassword ? <FaEye /> : <FaEyeSlash />}
              </span>
              {errors.password && (
                <label className="label text-xs text-error">
                  {errors.password.message}
                </label>
              )}
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
            <input type="submit" value="Login" className="btn btn-primary" />
          </div>
        </div>
      </form>
    </div>
  );
};

export default Login;
