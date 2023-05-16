import * as NavigationBar from "expo-navigation-bar";

import {
  EditScreens,
  MainScreens,
  SettingsScreens,
  TabNavigator,
  UnauthorizedScreens,
} from "navigation";
import { StatusBar, Text } from "react-native";

import { AuthContext } from "context/auth/AuthReducer";
import { CurrentUserProfileContext } from "context/user/UserReducer";
import Home from "screens/Home";
import LoadingScreen from "screens/LoadingScreen";
import { MessageContext } from "context/message/MessageReducer";
import { NavigationContainer } from "@react-navigation/native";
import React from "react";
import { auth } from "lib/firebase";
import { createStackNavigator } from "@react-navigation/stack";
import { setMessage } from "context/message/MessageActions";

const Stack = createStackNavigator();

function AppNavigationContainer() {
  StatusBar.setBackgroundColor("transparent");
  StatusBar.setBarStyle("dark-content");
  NavigationBar.setBackgroundColorAsync("white");
  NavigationBar.setButtonStyleAsync("dark");

  const { currentUserProfile, currentUserProfileDispatch } = React.useContext(
    CurrentUserProfileContext
  );
  const { authData, authDispatch } = React.useContext(AuthContext);
  const {
    state: { message },
    messageDispatch,
  } = React.useContext(MessageContext);

  const currentUser = auth.currentUser;
  const signed = authData.signedIn;
  const user = currentUserProfile.data;

  React.useEffect(() => {
    if (authData.signedIn === null && user === null) {
      authDispatch({
        type: "SIGN_IN",
        payload: false,
      });
    }
  }, [currentUser, signed, user]);

  // console.log(`\x1b[42m AUTH \x1b[0m`, currentUser);
  // console.log(`\x1b[44m Signed in \x1b[0m`, currentUser);
  // console.log(`\x1b[41m User \x1b[0m`, user);
  console.log(`\x1b[43m Message \x1b[0m`, message);

  if (signed === null) {
    return <LoadingScreen />;
  }

  return (
    <NavigationContainer>
      <Stack.Navigator>
        {!signed && user === null ? (
          <>{UnauthorizedScreens()}</>
        ) : (
          <>
            {MainScreens()}
            {SettingsScreens()}
            {EditScreens()}
          </>
        )}
      </Stack.Navigator>
    </NavigationContainer>
  );
}

export default AppNavigationContainer;
