import Router from "./Router";
import React from "react";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.min.css";
import { AiFillCloseCircle } from "react-icons/ai";

function App() {
  return (
    <React.Fragment>
      <Router />
      <ToastContainer
        autoClose={5000}
        hideProgressBar={true}
        pauseOnHover={false}
        icon={false}
        closeButton={
          <span className="text-white text-xl mr-2">
            <AiFillCloseCircle />
          </span>
        }
        theme="colored"
      />
    </React.Fragment>
  );
}

export default App;
