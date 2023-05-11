import { CreateRide, SearchRide } from "screens/Booking";
import { Home, Profile } from "screens";

import TabNavigator from "navigation/TabNavigator";
import { createStackNavigator } from "@react-navigation/stack";

const Stack = createStackNavigator();

const MainScreens = () => {
  return (
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
    </Stack.Group>
  );
};

export default MainScreens;
