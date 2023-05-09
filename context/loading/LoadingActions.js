import { SET_AUTH_LOADING, SET_LOADING } from "./types";

export const setLoading = (loadingDispatch, isLoading) => {
  loadingDispatch({ type: SET_LOADING, payload: isLoading });
};

export const setAuthLoading = (loadingDispatch, isLoading) => {
  loadingDispatch({ type: SET_AUTH_LOADING, payload: isLoading });
};
