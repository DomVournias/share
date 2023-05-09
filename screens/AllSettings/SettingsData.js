import { MaterialCommunityIcons } from "@expo/vector-icons";

const iconsSize = 25;
const icons = {
  account: (
    <MaterialCommunityIcons
      name="shield-account-outline"
      size={iconsSize}
      color="black"
    />
  ),
  activity: (
    <MaterialCommunityIcons
      name="progress-clock"
      size={iconsSize}
      color="black"
    />
  ),
  filters: (
    <MaterialCommunityIcons
      name="filter-outline"
      size={iconsSize}
      color="black"
    />
  ),
  history: (
    <MaterialCommunityIcons
      name="calendar-check-outline"
      size={iconsSize}
      color="black"
    />
  ),
  payments: (
    <MaterialCommunityIcons name="bank-outline" size={24} color="black" />
  ),
  notifications: (
    <MaterialCommunityIcons
      name="bell-outline"
      size={iconsSize}
      color="black"
    />
  ),
  support: (
    <MaterialCommunityIcons
      name="help-circle-outline"
      size={iconsSize}
      color="black"
    />
  ),
  about: (
    <MaterialCommunityIcons
      name="information-outline"
      size={iconsSize}
      color="black"
    />
  ),
};

export const settingsList = [
  {
    name: "Account",
    path: "AccountSettings",
    icon: icons.account,
  },
  {
    name: "Activity",
    path: "ActivitySettings",
    icon: icons.activity,
  },
  {
    name: "Filters",
    path: "FiltersSettings",
    icon: icons.filters,
  },
  {
    name: "History",
    path: "HistorySettings",
    icon: icons.history,
  },
  {
    name: "Payments",
    path: "PaymentsSettings",
    icon: icons.payments,
  },
  {
    name: "Notifications",
    path: "NotificationsSettings",
    icon: icons.notifications,
  },
  {
    name: "Support",
    path: "SupportSettings",
    icon: icons.support,
  },
  {
    name: "About",
    path: "AboutSettings",
    icon: icons.about,
  },
];
