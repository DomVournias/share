import {
  REFETCH_CURRENT_USER_PROFILE,
  RESET_CURRENT_USER_PROFILE,
  SET_CURRENT_USER_PROFILE,
  SET_CURRENT_USER_PROFILE_TYPE,
  SET_TEMP_USER_PROFILE_FULL_NAME,
  SET_TEMP_USER_PROFILE_GENDER,
  UPDATE_CURRENT_USER_PROFILE_IMAGE,
} from "./types";

import { createContext } from "react";

const initialTemptUserProfileState = {
  phoneNumber: "",
  verificationId: "",
  verificationCode: "",
  message: "",
  firstName: "",
  lastName: "",
  gender: {
    isBinary: null,
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
  avatar: "",
  profileImage: {
    imgURI: "",
    remoteURL: "",
    isUploading: false,
    progress: 0,
    error: null,
    message: "",
    isSaved: true,
    finishedUploading: false,
  },
};

const initialCurrentUserProfileSettings = {};

export const initialCurrentUserProfileState = {
  data: null,
  tempData: initialTemptUserProfileState,
  settings: initialCurrentUserProfileSettings,
  refetch: false,
  userType: "rider",
};

export const CurrentUserProfileReducer = (state, action) => {
  switch (action.type) {
    case SET_CURRENT_USER_PROFILE:
      return {
        ...state,
        data: action.payload,
      };

    case SET_CURRENT_USER_PROFILE_TYPE:
      return {
        ...state,
        userType: action.payload,
      };
    case SET_TEMP_USER_PROFILE_FULL_NAME:
      return {
        ...state,
        tempData: {
          ...state.tempData,
          firstName: action.payload.firstName,
          lastName: action.payload.lastName,
        },
      };

    case SET_TEMP_USER_PROFILE_GENDER:
      return {
        ...state,
        tempData: {
          ...state.tempData,
          gender: {
            ...state.tempData.gender,
            ...action.payload.gender,
          },
        },
      };

    case UPDATE_CURRENT_USER_PROFILE_IMAGE:
      return {
        ...state,
        tempData: {
          ...state.tempData,
          profileImage: {
            ...state.tempData.profileImage,
            ...action.payload,
          },
        },
      };

    case REFETCH_CURRENT_USER_PROFILE:
      return {
        ...state,
        refetch: action.payload,
      };

    case RESET_CURRENT_USER_PROFILE:
      return {
        ...state,
        data: null,
        tempData: initialCurrentUserProfileSettings,
      };
  }
};

export const CurrentUserProfileContext = createContext({
  currentUserProfile: initialCurrentUserProfileState,
});
