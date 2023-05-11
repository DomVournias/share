import { Text, View } from "react-native";

import { CardStyleInterpolators } from "@react-navigation/stack";
import React from "react";
import SettingsHeader from "components/Headers/SettingsHeader";
import { useNavigation } from "@react-navigation/native";

const EditProfileFullName = ({ route }) => {
  const navigation = useNavigation();

  const { title } = route.params;

  React.useLayoutEffect(() => {
    const updateHeaderOptions = () => {
      navigation.setOptions({
        headerMode: "float",
        cardStyleInterpolator: CardStyleInterpolators.forFadeFromBottomAndroid,
        header: () => (
          <SettingsHeader
            onDiscard={discardFullNameUpdate}
            onSave={saveFullNameUpdate}
            title={title}
          />
        ),
      });
    };

    updateHeaderOptions();
  }, [navigation, discardFullNameUpdate, saveFullNameUpdate]);

  const discardFullNameUpdate = () => {};
  const saveFullNameUpdate = () => {};

  console.log(`\x1b[42m EditProfileFullName \x1b[0m`, route);
  return (
    <View>
      <Text>EditProfileFullName</Text>
    </View>
  );
};

export default EditProfileFullName;
