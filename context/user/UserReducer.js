import {
  REFETCH_CURRENT_USER_PROFILE,
  RESET_CURRENT_USER_PROFILE,
  SET_CURRENT_USER_PROFILE,
  SET_CURRENT_USER_PROFILE_TYPE,
  UPDATE_CURRENT_USER_PROFILE_FIRST_NAME,
  UPDATE_CURRENT_USER_PROFILE_IMAGE,
  UPDATE_CURRENT_USER_PROFILE_LAST_NAME,
} from "./types";

import { createContext } from "react";

const initialCurrentUserProfileSettings = {
  firstName: "",
  lastName: "",
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

export const initialCurrentUserProfileState = {
  data: null,
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
    case UPDATE_CURRENT_USER_PROFILE_FIRST_NAME:
      return {
        ...state,
        settings: {
          ...state.settings,
          firstName: action.payload,
        },
      };
    case UPDATE_CURRENT_USER_PROFILE_LAST_NAME:
      return {
        ...state,
        settings: {
          ...state.settings,
          lastName: action.payload,
        },
      };
    case UPDATE_CURRENT_USER_PROFILE_IMAGE:
      return {
        ...state,
        settings: {
          ...state.settings,
          profileImage: {
            ...state.settings.profileImage,
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
        settings: initialCurrentUserProfileSettings,
      };
  }
};

export const CurrentUserProfileContext = createContext({
  currentUserProfile: initialCurrentUserProfileState,
});
