import {
  SET_ACCEPTS_TERMS,
  SET_AUTH_DATA,
  SET_DATE_OF_BIRTH,
  SET_EMAIL,
  SET_FIRST_NAME,
  SET_GENDER,
  SET_LAST_NAME,
  SET_PHONE_NUMBER,
  SET_PROFILE_IMAGE,
  SET_STEP,
  SET_VEHICLE,
  SET_VERIFICATION_CODE,
  SET_VERIFICATION_ID,
  SIGN_IN,
  SIGN_OUT,
} from "./types";

import { createContext } from "react";

export const initialAuthState = {
  data: {
    phoneNumber: "",
    verificationId: "",
    verificationCode: "",
    message: "",
    firstName: "",
    lastName: "",
    gender: {
      isBinary: false,
      binary: "",
      nonBinary: "",
    },
    dateOfBirth: "",
    vehicle: {
      hasVehicle: false,
      brand: "",
      year: "",
      color: "",
    },
    email: "",
    profileImage: "",
    acceptsTerms: false,
  },
  signedIn: null,
  steps: {
    email: false,
    name: false,
    age: false,
    vehicle: false,
    terms: false,
  },
};

export function AuthReducer(state, action) {
  switch (action.type) {
    case SET_AUTH_DATA:
      return {
        ...state,
        data: {
          ...state.data,
          ...action.payload.data,
        },
      };
    case SET_STEP:
      return {
        ...state,
        steps: {
          ...state.steps,
          ...action.payload.step,
        },
      };
    case SET_PHONE_NUMBER:
      return {
        ...state,
        data: {
          ...state.data,
          phoneNumber: action.payload,
        },
      };

    case SET_EMAIL:
      return {
        ...state,
        data: {
          ...state.data,
          email: action.payload,
        },
      };

    case SET_FIRST_NAME:
      return {
        ...state,
        data: {
          ...state.data,
          firstName: action.payload,
        },
      };

    case SET_LAST_NAME:
      return {
        ...state,
        data: {
          ...state.data,
          lastName: action.payload,
        },
      };

    case SET_GENDER:
      return {
        ...state,
        data: {
          ...state.data,
          gender: {
            ...state.data.gender,
            ...action.payload.gender,
          },
        },
      };

    case SET_DATE_OF_BIRTH:
      return {
        ...state,
        data: {
          ...state.data,
          dateOfBirth: action.payload,
        },
      };

    case SET_VEHICLE:
      return {
        ...state,
        data: {
          ...state.data,
          vehicle: {
            ...state.data.vehicle,
            ...action.payload.vehicle,
          },
        },
      };

    case SET_PROFILE_IMAGE:
      return {
        ...state,
        data: {
          ...state.data,
          profileImage: action.payload,
        },
      };

    case SET_ACCEPTS_TERMS:
      return {
        ...state,
        data: {
          ...state.data,
          acceptsTerms: action.payload,
        },
      };

    case SET_VERIFICATION_ID:
      return {
        ...state,
        data: {
          ...state.data,
          verificationId: action.payload,
        },
      };

    case SET_VERIFICATION_CODE:
      return {
        ...state,
        data: {
          ...state.data,
          verificationCode: action.payload,
        },
      };

    case SIGN_IN:
      return {
        ...state,
        signedIn: action.payload,
      };
    case SIGN_OUT:
      return {
        ...state,
        data: initialAuthState,
        signedIn: false,
      };

    default:
      throw new Error(`Unhandled action type: ${action.type}`);
  }
}

export const AuthContext = createContext({
  authData: initialAuthState,
});
