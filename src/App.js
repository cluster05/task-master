import Router from "./Router";
import React from "react";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.min.css";
import CloseToastButton from "./compoenents/Shared/CloseToastButton";

function App() {
  return (
    <React.Fragment>
      <Router />
      <ToastContainer
        autoClose={5000}
        hideProgressBar={true}
        pauseOnHover={false}
        icon={false}
        closeButton={<CloseToastButton />}
        theme="colored"
      />
    </React.Fragment>
  );
}

export default App;
