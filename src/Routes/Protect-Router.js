import React from "react";
import useAuth from "../Hooks/useAuth";
import { Navigate } from "react-router-dom";

function ProtectRouter({ children }) {
  const { currentUser } = useAuth();
  console.log('protect router')
  console.log(currentUser)
  console.log( children)
  return currentUser ? children : <Navigate to={"/checkout"} />;
}

export default ProtectRouter;
