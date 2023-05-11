import {
  CardStyleInterpolators,
  createStackNavigator,
} from "@react-navigation/stack";
import {
  EditProfile,
  EditProfileBio,
  EditProfileFullName,
  EditProfileGender,
  EditProfileVehicle,
} from "screens/Profile/Edit";

const Stack = createStackNavigator();

const EditScreens = () => {
  return (
    <Stack.Group
    // screenOptions={{
    //   headerMode: "float",
    //   cardStyleInterpolator: CardStyleInterpolators.forFadeFromBottomAndroid,
    // }}
    >
      <Stack.Screen
        name="EditProfile"
        component={EditProfile}
        options={{
          title: "Edit profile",
        }}
      />
      <Stack.Screen
        name="EditProfileFullName"
        component={EditProfileFullName}
        options={{
          title: "Name",
        }}
      />
      <Stack.Screen
        name="EditProfileGender"
        component={EditProfileGender}
        options={{
          title: "Gender",
        }}
      />
      <Stack.Screen
        name="EditProfileBio"
        component={EditProfileBio}
        options={{
          title: "Bio",
        }}
      />
      <Stack.Screen
        name="EditProfileVehicle"
        component={EditProfileVehicle}
        options={{
          title: "Vehicle",
        }}
      />
    </Stack.Group>
  );
};

export default EditScreens;
