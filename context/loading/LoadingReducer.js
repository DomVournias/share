import { SET_AUTH_LOADING, SET_LOADING } from "./types";

export const initialLoadingState = {
  isLoading: false,
  isAuthLoading: false,
};

export const LoadingReducer = (state, action) => {
  switch (action.type) {
    case SET_LOADING:
      return {
        ...state,
        isLoading: action.payload,
      };
    case SET_AUTH_LOADING:
      return {
        ...state,
        isAuthLoading: action.payload,
      };
    default:
      return state;
  }
};
