import { Text, TextInput, TouchableOpacity, View } from "react-native";

import React from "react";
import styled from "styled-components/native";

const ButtonField = (props) => {
  return (
    <>
      <ButtonFieldStyled activeOpacity={0.9} onPress={props.onPress}>
        <ButtonFieldText>{props.text}</ButtonFieldText>
      </ButtonFieldStyled>
    </>
  );
};

export default ButtonField;

const ButtonFieldStyled = styled(TouchableOpacity)`
  min-height: 55px;
  padding: 12px;
  background-color: rgba(0, 0, 0, 0.08);
  border-radius: 8px;
  border-width: 2px;
  border-color: rgba(0, 0, 0, 0.1);
  justify-content: center;
`;

const ButtonFieldText = styled(Text)`
  color: #000;
  font-size: 17px;
  text-transform: capitalize;
  opacity: 0.9;
`;
