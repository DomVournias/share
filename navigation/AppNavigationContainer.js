import * as NavigationBar from "expo-navigation-bar";

import {
  AboutSettings,
  AccountSettings,
  ActivitySettings,
  FiltersSettings,
  HistorySettings,
  NotificationsSettings,
  PaymentsSettings,
  Settings,
} from "screens/AllSettings";
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
  HeaderStyleInterpolators,
  TransitionPresets,
  TransitionSpecs,
  createStackNavigator,
} from "@react-navigation/stack";
import { CreateRide, SearchRide } from "screens/Booking";
import { Dimensions, StatusBar, StyleSheet } from "react-native";
import { Home, Profile } from "screens";

import { AuthContext } from "context/auth/AuthReducer";
import { CurrentUserProfileContext } from "context/user/UserReducer";
import EditProfile from "screens/Profile/Edit/EditProfile";
import LoadingScreen from "screens/LoadingScreen";
import { NavigationContainer } from "@react-navigation/native";
import React from "react";
import Reviews from "screens/Reviews";
import SettingsHeader from "components/Headers/SettingsHeader";
import TabNavigator from "./TabNavigator";
import { auth } from "lib/firebase";
import { resetCurrentUserProfile } from "context/user/UserActions";
import settingsGroupOptions from "navigation/GroupOptions";
import { signOutCurrentUser } from "context/auth/AuthFunctions";

// import Authorized from "./Authorized";
// import Unauthorized from "./Unauthorized";

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

  const { height } = Dimensions.get("window");

  const [isLoading, setIsLoading] = React.useState(true);
  const [isSignedIn, setIsSignedIn] = React.useState(null);

  const currentUser = auth;
  const signed = authData.signedIn;
  const user = currentUserProfile.data;

  // const getSignedInStatus = async () => {

  //   try {
  //     if (signed === null) {
  //       setIsLoading(true);
  //     } else {
  //       if (signed && user) {
  //         setIsSignedIn(true);
  //         setIsLoading(false);
  //       } else {
  //         setIsSignedIn(false);
  //         setIsLoading(false);
  //       }
  //     }
  //   } catch (error) {
  //     setIsLoading(false);
  //     console.log(error.message);
  //   }
  // };

  // React.useEffect(() => {
  //   getSignedInStatus();
  // }, [
  //   // authData,
  //   authData.signedIn,
  //   // currentUserProfile,
  //   // currentUserProfile.data,
  // ]);

  console.log(`\x1b[42m SignedIn navigator \x1b[0m`, currentUser);

  if (signed === null) {
    return <LoadingScreen />;
  }

  return (
    <NavigationContainer>
      <Stack.Navigator>
        {!signed && user === null ? (
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
            <Stack.Screen
              name="PhoneNumberScreen"
              component={PhoneNumberScreen}
            />
            <Stack.Screen name="OTPVerification" component={OTPVerification} />

            <Stack.Screen
              name="WelcomeBackScreen"
              component={WelcomeBackScreen}
            />
            <Stack.Screen
              name="EmailRegistration"
              component={EmailRegistration}
            />
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
        ) : (
          <Stack.Group>
            <Stack.Screen
              name="TabNavigator"
              component={TabNavigator}
              options={{ headerShown: false }}
            />
            <Stack.Screen name="Home" component={Home} />
            <Stack.Screen name="Profile" component={Profile} />
            <Stack.Screen name="CreateRide" component={CreateRide} />
            <Stack.Screen name="SearchRide" component={SearchRide} />
            <Stack.Screen name="Settings" component={Settings} />

            <Stack.Group screenOptions={settingsGroupOptions}>
              <Stack.Screen
                name="AccountSettings"
                component={AccountSettings}
                options={{
                  title: "Account settings",
                  headerTitleStyle: styles.title,
                }}
              />
              <Stack.Screen
                name="ActivitySettings"
                component={ActivitySettings}
                options={{
                  title: "My activity",
                  headerTitleStyle: styles.title,
                }}
              />
              <Stack.Screen
                name="FiltersSettings"
                component={FiltersSettings}
                options={{
                  title: "My filters",
                  headerTitleStyle: styles.title,
                }}
              />
              <Stack.Screen
                name="HistorySettings"
                component={HistorySettings}
                options={{
                  title: "My history",
                  headerTitleStyle: styles.title,
                }}
              />
              <Stack.Screen
                name="PaymentsSettings"
                component={PaymentsSettings}
                options={{
                  title: "Payment settings",
                  headerTitleStyle: styles.title,
                }}
              />
              <Stack.Screen
                name="NotificationsSettings"
                component={NotificationsSettings}
                options={{
                  title: "Notifications",
                  headerTitleStyle: styles.title,
                }}
              />
              <Stack.Screen
                name="AboutSettings"
                component={AboutSettings}
                options={{
                  title: "About",
                  headerTitleStyle: styles.title,
                }}
              />
            </Stack.Group>
            <Stack.Group
              screenOptions={{
                // presentation: "card",
                headerMode: "float",
                cardStyleInterpolator:
                  CardStyleInterpolators.forFadeFromBottomAndroid,

                // headerStyleInterpolator:
                //   HeaderStyleInterpolators.forNoAnimation,
              }}
            >
              <Stack.Screen
                name="EditProfile"
                component={EditProfile}
                options={{ header: () => <SettingsHeader /> }}
                // options={{
                //   title: "Edit profile",
                //   headerTitleStyle: styles.title,
                // }}
              />
            </Stack.Group>

            <Stack.Screen name="Reviews" component={Reviews} />

            {/* <Stack.Group
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
              
            </Stack.Group>

            <Stack.Group
            screenOptions={{
              presentation: "transparentModal",
              headerMode: "none",
              cardStyleInterpolator:
                CardStyleInterpolators.forModalPresentationIOS,
              gestureEnabled: true,
              gestureDirection: "vertical",
              cardOverlayEnabled: true,
              // gestureResponseDistance: height / 3,
            }}
            >
             
            </Stack.Group>

            <Stack.Group
            screenOptions={{
              presentation: "modal",
              headerMode: "none",
              cardStyleInterpolator:
                CardStyleInterpolators.forModalPresentationIOS,
              gestureEnabled: true,
              gestureDirection: "vertical",
              cardOverlayEnabled: true,
            }}
          >
           
          </Stack.Group> */}
          </Stack.Group>
        )}
      </Stack.Navigator>
    </NavigationContainer>
  );
}

export default AppNavigationContainer;

const styles = StyleSheet.create({
  title: {
    fontSize: 18,
    fontWeight: "500",
    color: "black",
    // backgroundColor: "pink",
    marginLeft: -10,
  },
});
