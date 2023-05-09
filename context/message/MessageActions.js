import { useContext } from "react";
import { SET_MESSAGE } from "./types";
import { MessageContext } from "./MessageReducer";

export const setMessage = (messageDispatch, message) => {
  messageDispatch({ type: SET_MESSAGE, payload: message });
};
