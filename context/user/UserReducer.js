import {
  REFETCH_CURRENT_USER_PROFILE,
  RESET_CURRENT_USER_PROFILE,
  RESET_TEMP_USER_PROFILE,
  SET_CURRENT_USER_PROFILE,
  SET_CURRENT_USER_PROFILE_TYPE,
  SET_TEMP_USER_PROFILE_BIO,
  SET_TEMP_USER_PROFILE_FULL_NAME,
  SET_TEMP_USER_PROFILE_GENDER,
  SET_TEMP_USER_PROFILE_VEHICLE,
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
  bio: "",
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
  refetch: 0,
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

    case SET_TEMP_USER_PROFILE_BIO:
      return {
        ...state,
        tempData: {
          ...state.tempData,
          bio: action.payload.bio,
        },
      };

    case SET_TEMP_USER_PROFILE_VEHICLE:
      return {
        ...state,
        tempData: {
          ...state.tempData,
          vehicle: {
            ...state.tempData.vehicle,
            ...action.payload.vehicle,
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
        refetch: state.refetch + 1,
      };

    case RESET_CURRENT_USER_PROFILE:
      return {
        ...state,
        data: null,
        tempData: initialTemptUserProfileState,
      };

    case RESET_TEMP_USER_PROFILE:
      return {
        ...state,
        tempData: initialTemptUserProfileState,
      };
  }
};

export const CurrentUserProfileContext = createContext({
  currentUserProfile: initialCurrentUserProfileState,
});
