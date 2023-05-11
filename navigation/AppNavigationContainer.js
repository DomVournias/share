import * as NavigationBar from "expo-navigation-bar";

import {
  EditScreens,
  MainScreens,
  SettingsScreens,
  TabNavigator,
} from "navigation";
import { StatusBar, Text } from "react-native";

import { AuthContext } from "context/auth/AuthReducer";
import { CurrentUserProfileContext } from "context/user/UserReducer";
import Home from "screens/Home";
import LoadingScreen from "screens/LoadingScreen";
import { NavigationContainer } from "@react-navigation/native";
import React from "react";
import { UnauthorizedScreens } from "navigation/UnauthorizedScreens";
import { auth } from "lib/firebase";
import { createStackNavigator } from "@react-navigation/stack";

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

  const currentUser = auth;
  const signed = authData.signedIn;
  const user = currentUserProfile.data;

  // console.log(`\x1b[42m SignedIn navigator \x1b[0m`, currentUser);

  if (signed === null) {
    return <LoadingScreen />;
  }

  return (
    <NavigationContainer>
      <Stack.Navigator>
        {!signed && user === null ? (
          <>
            <Text>Hello</Text>
          </>
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
