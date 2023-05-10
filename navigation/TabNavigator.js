import { Chat, Home, Profile } from "../screens";
import { CreateRide, SearchRide } from "../screens/Booking";

import { Fontisto } from "@expo/vector-icons";
import { FullNameRegistration } from "screens/Auth/SignUp/Steps";
import { Octicons } from "@expo/vector-icons";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";

// import { PortalHost } from "@gorhom/portal";
// import AgeRegistration from "../screens/Auth/Steps/AgeRegistration";
// import VehicleRegistration from "../screens/Auth/Steps/VehicleRegistration";
// import {
//   EmailRegistration,
//   FullNameRegistration,
//   TermsAgreement,
// } from "../screens/Auth/Steps";

const Tab = createBottomTabNavigator();

const TabNavigator = () => (
  <>
    {/* <PortalHost name="bottom-sheet-modal" /> */}
    <Tab.Navigator
      initialRouteName="Home"
      screenOptions={{
        headerShown: false, // Change this

        activeTintColor: "#000",
        inactiveTintColor: "#8e8e8e",
        tabBarShowLabel: false,
        style: {
          backgroundColor: "#fff",
          borderTopWidth: 0,
          shadowOffset: {
            width: 5,
            height: 3,
          },
          shadowColor: "#000",
          shadowOpacity: 0.25,
          shadowRadius: 3.84,
          elevation: 5,
        },
      }}
    >
      <Tab.Screen
        name="Home"
        component={Home}
        options={{
          tabBarIcon: ({ color }) => (
            <Octicons name="home" size={24} color={color} />
          ),
        }}
      />
      {/* <Tab.Screen
        name="AgeRegistration"
        component={AgeRegistration}
        options={{
          tabBarIcon: ({ color }) => (
            <Octicons name="play" size={24} color={color} />
          ),
        }}
      /> */}
      <Tab.Screen
        name="FullNameRegistration"
        component={FullNameRegistration}
        options={{
          tabBarIcon: ({ color }) => (
            <Octicons name="search" size={24} color={color} />
          ),
        }}
      />
      <Tab.Screen
        name="CreateRide"
        component={CreateRide}
        options={{
          tabBarIcon: ({ color }) => (
            <Octicons name="diff-added" size={24} color={color} />
          ),
        }}
      />
      <Tab.Screen
        name="Chat"
        component={Chat}
        options={{
          tabBarIcon: ({ color }) => (
            <Fontisto name="hipchat" size={22} color={color} />
          ),
        }}
      />
      <Tab.Screen
        name="Profile"
        component={Profile}
        options={{
          tabBarIcon: ({ color }) => (
            <Octicons name="person" size={25} color={color} />
          ),
        }}
      />
    </Tab.Navigator>
  </>
);

export default TabNavigator;
