import { View, Text } from "react-native";
import React from "react";
import {
  AgeRegistration,
  EmailRegistration,
  FullNameRegistration,
  OTPVerification,
  PhoneNumberScreen,
  TermsAgreement,
  VehicleRegistration,
  WelcomeBackScreen,
} from "../screens/Auth/Steps";
import { createStackNavigator } from "@react-navigation/stack";

const Stack = createStackNavigator();

const Unauthorized = () => {
  return (
    <Stack.Group
      screenOptions={{
        animationTypeForReplace: "push",
        animation: "slide_from_right",
        headerShown: false,
      }}
    >
      <Stack.Screen name="PhoneNumberScreen" component={PhoneNumberScreen} />
      <Stack.Screen name="OTPVerification" component={OTPVerification} />

      <Stack.Screen name="WelcomeBackScreen" component={WelcomeBackScreen} />
      <Stack.Screen name="EmailRegistration" component={EmailRegistration} />
      <Stack.Screen
        name="FullNameRegistration"
        component={FullNameRegistration}
      />
      <Stack.Screen name="AgeRegistration" component={AgeRegistration} />
      <Stack.Screen
        name="VehicleRegistration"
        component={VehicleRegistration}
      />
      <Stack.Screen name="TermsAgreement" component={TermsAgreement} />
    </Stack.Group>
  );
};

export default Unauthorized;
