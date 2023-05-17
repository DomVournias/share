import { Chat, Home, Profile } from "screens";
import { CreateRide, SearchRide } from "screens/Booking";
import {
  FullNameRegistration,
  VehicleRegistration,
} from "screens/Auth/SignUp/Steps";

import { Fontisto } from "@expo/vector-icons";
import { Octicons } from "@expo/vector-icons";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";

const Tab = createBottomTabNavigator();

const TabNavigator = () => {
  return (
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

      <Tab.Screen
        name="VehicleRegistration"
        component={VehicleRegistration}
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
  );
};

export default TabNavigator;
