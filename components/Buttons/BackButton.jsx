import React from "react";
import { AntDesign } from "@expo/vector-icons";
import { TouchableOpacity } from "react-native";
import styled from "styled-components/native";
import { useNavigation } from "@react-navigation/native";

const BackButton = () => {
  const navigation = useNavigation();
  return (
    <BackButtonStyled
      style={{
        shadowColor: "#000000",
        shadowOffset: {
          width: 0,
          height: 6,
        },
        shadowOpacity: 0.08,
        shadowRadius: 6.65,
        elevation: 9,
      }}
      onPress={() => (navigation.canGoBack() ? navigation.goBack() : null)}
      activeOpacity={0.7}
    >
      <AntDesign name="left" size={15} color="black" />
    </BackButtonStyled>
  );
};

export default BackButton;

const BackButtonStyled = styled.TouchableOpacity`
  background-color: white;
  width: 35px;
  height: 35px;
  margin-top: 10px;
  margin-left: 10px;
  justify-content: center;
  align-items: center;
  border-radius: 50px;
`;
