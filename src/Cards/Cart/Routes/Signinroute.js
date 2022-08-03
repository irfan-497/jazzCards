import React from "react";
import { useCreatrAuthStateContext } from "../Context/Context.js";
import { Navigate } from "react-router-dom";

const Signinroute = ({ children }) => {
  const userAuth = useCreatrAuthStateContext();

  if (userAuth) {
    return <Navigate to="/" />;
  }
  return children;
};


export default Signinroute;