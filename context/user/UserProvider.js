import {
  CurrentUserProfileContext,
  CurrentUserProfileReducer,
  initialCurrentUserProfileState,
} from "./UserReducer";

import { AuthContext } from "context/auth/AuthReducer";
import { LoadingContext } from "context/loading/LoadingProvider";
import { MessageContext } from "context/message/MessageReducer";
import React from "react";
import { auth } from "lib/firebase";
import { fetchCurrentUserProfile } from "context/user/UserFunctions";
import { resetCurrentUserProfile } from "context/user/UserActions";
import { signOutCurrentUser } from "context/auth/AuthFunctions";

export const UserProfileProvider = ({ children }) => {
  const [currentUserProfile, currentUserProfileDispatch] = React.useReducer(
    CurrentUserProfileReducer,
    initialCurrentUserProfileState
  );
  const { messageDispatch } = React.useContext(MessageContext);
  const { loadingDispatch } = React.useContext(LoadingContext);
  const { authData, authDispatch } = React.useContext(AuthContext);

  const [authStateChanged, setAuthStateChanged] = React.useState(false);

  React.useEffect(() => {
    if (auth.currentUser) {
      fetchCurrentUserProfile(
        messageDispatch,
        loadingDispatch,
        currentUserProfileDispatch,
        authDispatch,
        { auth }
      );
      // console.log("✨✨ ----REFETCHING---");
    }

    const unsubscribe = auth.onAuthStateChanged((user) => {
      if (user) {
        setAuthStateChanged(true);
        // console.log(user);
      } else {
        setAuthStateChanged(false);
      }
    });

    return unsubscribe;
  }, [
    auth,
    auth.currentUser,
    authData.signedIn,
    authStateChanged,
    // currentUserProfile.settings,
    // currentUserProfile.refetch,
  ]);

  // React.useEffect(() => {
  //   console.log(`\x1b[45m SIGNING OUT \x1b[0m`);

  //   if (
  //     authData.signedIn === false &&
  //     (auth.currentUser === undefined || auth.currentUser === null) &&
  //     currentUserProfile.data === null
  //   ) {
  //     resetCurrentUserProfile(currentUserProfileDispatch);
  //     authDispatch({
  //       type: "SIGN_IN",
  //       payload: false,
  //     });
  //     signOutCurrentUser(currentUserProfileDispatch, authDispatch);
  //   }
  // }, [
  //   auth.currentUser,
  //   authData.signedIn,
  //   // authStateChanged,
  //   currentUserProfile.settings,
  //   currentUserProfile.refetch,
  // ]);

  // React.useEffect(() => {
  //   if (authData.signedIn === false || authData.signedIn === null) {
  //     resetCurrentUserProfile(currentUserProfileDispatch);
  //     authDispatch({
  //       type: "SIGN_IN",
  //       payload: false,
  //     });
  //   }
  // }, [authData.signedIn]);

  // React.useEffect(() => {
  //   if (authData.signedIn === false) {
  //     resetCurrentUserProfile(currentUserProfileDispatch);
  //   }
  // }, [authData.signedIn]);

  // useEffect(() => {
  //   if (!auth.currentUser) {
  //     currentUserProfileDispatch();
  //   }
  // }, []);

  // console.log(currentUserProfile);

  const value = { currentUserProfile, currentUserProfileDispatch };
  return (
    <CurrentUserProfileContext.Provider value={value}>
      {children}
    </CurrentUserProfileContext.Provider>
  );
};
