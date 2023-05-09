import React from "react";
import { useNavigation } from "@react-navigation/native";
import LoadingScreen from "./LoadingScreen";

const UnauthorizedSplash = () => {
  const navigation = useNavigation();

  React.useLayoutEffect(() => {
    navigation.setOptions({
      headerShown: false,
    });
  }, [navigation]);

  setTimeout(() => {
    navigation.replace("PhoneNumberScreen");
  }, 3000);
  return <LoadingScreen />;
};

export default UnauthorizedSplash;
