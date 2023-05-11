import { EditScreens, MainScreens, SettingsScreens } from "navigation";

import { createStackNavigator } from "@react-navigation/stack";

const Stack = createStackNavigator();

export default function AuthorizedScreens() {
  return (
    <Stack.Group>
      {MainScreens(Stack)}
      {SettingsScreens(Stack)}
      {EditScreens(Stack)}
    </Stack.Group>
  );
}
