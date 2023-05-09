import React from "react";
import { useNavigation } from "@react-navigation/native";
import LoadingScreen from "./LoadingScreen";

const AuthorizedSplash = () => {
  const navigation = useNavigation();

  React.useLayoutEffect(() => {
    navigation.setOptions({
      headerShown: false,
    });
  }, [navigation]);

  setTimeout(() => {
    navigation.replace("Home");
  }, 3000);
  return <LoadingScreen />;
};

export default AuthorizedSplash;
