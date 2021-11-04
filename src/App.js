import React, { useEffect } from "react";
import Router from "./Router";
import { useDispatch } from "react-redux";
import { initailAppAuthCheck } from "./store/Auth/Auth";

function App() {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(initailAppAuthCheck());
  }, []);

  return (
    <React.Fragment>
      <Router />
    </React.Fragment>
  );
}

export default App;
