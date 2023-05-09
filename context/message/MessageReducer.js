import { createContext } from "react";
import { CLEAR_MESSAGE, SET_MESSAGE } from "./types";

export const initialMessageState = {
  message: "",
};

export function MessageReducer(state, action) {
  switch (action.type) {
    case SET_MESSAGE:
      return {
        ...state,
        message: action.payload,
      };
    case CLEAR_MESSAGE:
      return {
        ...state,
        message: "",
      };
    default:
      throw new Error(`Unhandled action type: ${action.type}`);
  }
}

export const MessageContext = createContext({
  state: initialMessageState,
  dispatch: () => {},
});
