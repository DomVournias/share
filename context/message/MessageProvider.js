import React, { useReducer } from "react";
import {
  MessageContext,
  MessageReducer,
  initialMessageState,
} from "./MessageReducer";

export const MessageProvider = ({ children }) => {
  const [state, messageDispatch] = useReducer(
    MessageReducer,
    initialMessageState
  );

  const value = { state, messageDispatch };

  return (
    <MessageContext.Provider value={value}>{children}</MessageContext.Provider>
  );
};
