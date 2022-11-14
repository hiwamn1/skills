import React from "react";
import { Navigate } from "react-router-dom";
import { getToken } from "../../local-storage/LocalStorage";
import { token } from "../../local-storage/KeysLocalStorage";

const Authgaurd = ({ children }) => {
  const result = getToken(token);
  if (!result) {
    return <Navigate replace to="/login" />;
  }
  return children;
};
export default Authgaurd;
