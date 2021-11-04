import React from "react";

const ForgotPassword = () => {
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
            />
          </div>

          <div className="form-control mt-6">
            <input
              type="button"
              value="Forgot Passoword"
              className="btn btn-primary"
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default ForgotPassword;
