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

import { createStackNavigator } from "@react-navigation/stack";

const Stack = createStackNavigator();

const SettingsScreens = () => {
  return (
    <Stack.Group>
      <Stack.Screen name="Settings" component={Settings} />

      <Stack.Screen
        name="AccountSettings"
        component={AccountSettings}
        options={{
          title: "Account settings",
        }}
      />
      <Stack.Screen
        name="ActivitySettings"
        component={ActivitySettings}
        options={{
          title: "My activity",
        }}
      />
      <Stack.Screen
        name="FiltersSettings"
        component={FiltersSettings}
        options={{
          title: "My filters",
        }}
      />
      <Stack.Screen
        name="HistorySettings"
        component={HistorySettings}
        options={{
          title: "My history",
        }}
      />
      <Stack.Screen
        name="PaymentsSettings"
        component={PaymentsSettings}
        options={{
          title: "Payment settings",
        }}
      />
      <Stack.Screen
        name="NotificationsSettings"
        component={NotificationsSettings}
        options={{
          title: "Notifications",
        }}
      />
      <Stack.Screen
        name="AboutSettings"
        component={AboutSettings}
        options={{
          title: "About",
        }}
      />
    </Stack.Group>
  );
};

export default SettingsScreens;
