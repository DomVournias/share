import AsyncStorage from "@react-native-async-storage/async-storage";

export const setCurrentUserProfile = (dispatch, { userData }) => {
  dispatch({
    type: "SET_CURRENT_USER_PROFILE",
    payload: userData,
  });
};

export const setCurrentUserProfileType = (dispatch, action) => {
  if (action === true) {
    dispatch({
      type: "SET_CURRENT_USER_PROFILE_TYPE",
      payload: "driver",
    });
    AsyncStorage.setItem("currentUserProfileType", "driver");
  } else {
    dispatch({
      type: "SET_CURRENT_USER_PROFILE_TYPE",
      payload: "rider",
    });
    AsyncStorage.setItem("currentUserProfileType", "rider");
  }
};

export const updateCurrentUserProfile = (dispatch, { userData }) => {
  dispatch({
    type: "UPDATE_CURRENT_USER_PROFILE",
    payload: userData,
  });
};

export const updateCurrentUserProfileImage = (dispatch, action) => {
  dispatch({
    type: "UPDATE_CURRENT_USER_PROFILE_IMAGE",
    payload: action,
  });
};

export const refetchCurrentUserProfile = (dispatch, action) => {
  dispatch({
    type: "REFETCH_CURRENT_USER_PROFILE",
    payload: action,
  });
};

export const resetCurrentUserProfile = (dispatch) => {
  dispatch({
    type: "RESET_CURRENT_USER_PROFILE",
  });
};
