import { View, Text } from "react-native";
import React from "react";
import SplashScreen from "../screens/AuthorizedSplash";
import Home from "../screens/Home";
import Settings from "../screens/SettingsOld";
import { CreateRide, SearchRide } from "../screens/Booking";
import Reviews from "../screens/Reviews";
import {
  CardStyleInterpolators,
  createStackNavigator,
} from "@react-navigation/stack";
import { Profile } from "../screens";
import TabNavigator from "./TabNavigator";
import AgeRegistration from "../screens/Auth/Steps/AgeRegistration";
import VehicleRegistration from "../screens/Auth/Steps/VehicleRegistration";

const Stack = createStackNavigator();

const Authorized = () => {
  return (
    <Stack.Group>
      <Stack.Screen
        name="TabNavigator"
        component={TabNavigator}
        options={{ headerShown: false }}
      />
      <Stack.Screen name="AgeRegistration" component={AgeRegistration} />
      <Stack.Screen name="VehicleRegistration" component={VehicleRegistration} />
      <Stack.Screen name="Home" component={Home} />
      <Stack.Screen name="Profile" component={Profile} />

      <Stack.Group
        screenOptions={{
          presentation: "card",
          headerMode: "float",
          cardStyleInterpolator:
            CardStyleInterpolators.forFadeFromBottomAndroid,
          gestureEnabled: true,
          gestureDirection: "vertical",
          cardOverlayEnabled: true,
        }}
      >
        <Stack.Screen name="CreateRide" component={CreateRide} />
        <Stack.Screen name="SearchRide" component={SearchRide} />
      </Stack.Group>
      <Stack.Group
        screenOptions={{
          presentation: "modal",
          headerMode: "none",
          cardStyleInterpolator: CardStyleInterpolators.forModalPresentationIOS,
          gestureEnabled: true,
          gestureDirection: "vertical",
          cardOverlayEnabled: true,
        }}
      >
        <Stack.Screen name="Settings" component={Settings} />
        <Stack.Screen name="Reviews" component={Reviews} />
      </Stack.Group>
    </Stack.Group>
  );
};

export default Authorized;
