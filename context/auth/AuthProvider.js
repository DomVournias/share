import { AuthContext, AuthReducer, initialAuthState } from "./AuthReducer";
import React, { useReducer } from "react";

export const AuthProvider = ({ children }) => {
  const [authData, authDispatch] = useReducer(AuthReducer, initialAuthState);

  const value = { authData, authDispatch };

  return <AuthContext.Provider value={value}>{children}</AuthContext.Provider>;
};
