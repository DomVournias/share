import React from "react";
import { View, Text } from "react-native";
import { TouchableOpacity } from "react-native-gesture-handler";
import { AntDesign } from "@expo/vector-icons";
import styled from "styled-components/native";

const StepsButton = (props) => {
  // console.log(props.lastStep);
  return (
    <Button
      onPress={props.onPress}
      background={
        props.disabled || !props.forward ? "rgba(0,0,0,0.1)" : "black"
      }
      disabled={props.disabled}
      size={props.forward ? "auto" : "50px"}
      padding={props.forward ? "20px" : "0"}
      activeOpacity={0.8}
    >
      {props.forward && (
        <TextStyled disabled={props.disabled}>
          {props.lastStep !== undefined ? "Είσοδος" : "Επόμενο"}
        </TextStyled>
      )}
      {props.forward ? (
        <AntDesign
          name="arrowright"
          size={20}
          color={props.disabled ? "rgba(0,0,0,0.2)" : "white"}
        />
      ) : (
        <AntDesign
          name="arrowleft"
          size={24}
          color={props.disabled ? "rgba(0,0,0,0.2)" : "black"}
        />
      )}
    </Button>
  );
};

export default StepsButton;

const Button = styled.TouchableOpacity`
  flex-direction: row;
  align-items: center;
  justify-content: center;
  gap: 7px;
  border-radius: 25px;
  padding-left: ${(props) => props.padding};
  padding-right: ${(props) => props.padding};
  width: ${(props) => props.size};
  height: ${(props) => props.size};
  background-color: ${(props) => props.background};
`;

const TextStyled = styled.Text`
  font-size: 17px;
  font-weight: 600;
  color: ${(props) => (props.disabled ? "rgba(0,0,0,0.2)" : "white")};
`;
