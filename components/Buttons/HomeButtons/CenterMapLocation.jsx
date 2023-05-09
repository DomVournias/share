import { View, Text } from "react-native";
import React from "react";
import styled from "styled-components/native";
import { TouchableOpacity } from "react-native";
import { MaterialIcons } from "@expo/vector-icons";

const CenterMapLocation = () => {
  return (
    <ButtonStyled activeOpacity={0.8} color="white">
      <MaterialIcons name="my-location" size={29} color="rgba(0,0,0,0.7)" />
    </ButtonStyled>
  );
};

export default CenterMapLocation;

export const ButtonStyled = styled(TouchableOpacity)`
  position: relative;
  background-color: ${(props) => props.color};
  width: 50px;
  height: 50px;
  padding: 0;
  margin: 0;
  justify-content: center;
  align-items: center;
  border-radius: 50px;
`;
