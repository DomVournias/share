import { LoadingReducer, initialLoadingState } from "./LoadingReducer";

import { createContext } from "react";
import { useReducer } from "react";

export const LoadingContext = createContext(initialLoadingState);

export const LoadingProvider = ({ children }) => {
  const [loadingState, loadingDispatch] = useReducer(
    LoadingReducer,
    initialLoadingState
  );

  const value = { loadingState, loadingDispatch };

  return (
    <LoadingContext.Provider value={value}>{children}</LoadingContext.Provider>
  );
};
