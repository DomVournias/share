import {
  AgeRegistration,
  EmailRegistration,
  FullNameRegistration,
  OTPVerification,
  PhoneNumberScreen,
  TermsAgreement,
  VehicleRegistration,
  WelcomeBackScreen,
} from "screens/Auth/SignUp/Steps";
import {
  CardStyleInterpolators,
  createStackNavigator,
} from "@react-navigation/stack";

import React from "react";

const Stack = createStackNavigator();

const UnauthorizedScreens = () => {
  return (
    <Stack.Group
      screenOptions={{
        presentation: "card",
        headerMode: "float",
        cardStyleInterpolator: CardStyleInterpolators.forNoAnimation,
        gestureEnabled: false,
        gestureDirection: "horizontal",
        cardOverlayEnabled: false,
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

export default UnauthorizedScreens;
