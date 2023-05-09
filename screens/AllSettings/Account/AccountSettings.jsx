import { Container } from "styles/Screens/AllSettings/AllSettings.styles.js";
import React from "react";
import { Text } from "react-native";
import { useNavigation } from "@react-navigation/native";

const AccountSettings = () => {
  const navigation = useNavigation();

  return (
    <Container>
      <Text>AccountSettings</Text>
    </Container>
  );
};

export default AccountSettings;
