import React, { useState } from "react";
import { Link } from "react-router-dom";
import { forgotPassword } from "../services/auth.service";

const ForgotPassword = () => {
  const [email, setEmail] = useState("");

  const forgotPasswordHandler = () => {
    forgotPassword(email);
  };

  return (
    <div className="flex justify-center items-center h-screen">
      <div className="card py-10 w-full max-w-md rounded border-2">
        <div className="card-body">
          <div className="card-title">Forgot Password</div>
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
          <label className="label">
            <Link to="/login" className="label-text-alt">
              Login in account
            </Link>
          </label>
          <div className="form-control mt-6">
            <input
              type="button"
              value="Forgot Passoword"
              className="btn btn-primary"
              onClick={forgotPasswordHandler}
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default ForgotPassword;
