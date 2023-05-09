import React from "react";
import { AntDesign } from "@expo/vector-icons";
import { useNavigation } from "@react-navigation/native";
import { LeftButtonStyled } from "./index.styled";

const GoBackButton = () => {
  const navigation = useNavigation();
  return (
    <LeftButtonStyled
      onPress={() => (navigation.canGoBack() ? navigation.goBack() : null)}
      activeOpacity={0.8}
    >
      <AntDesign name="left" size={22} color="white" />
    </LeftButtonStyled>
  );
};

export default GoBackButton;
