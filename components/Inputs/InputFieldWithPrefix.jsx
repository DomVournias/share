import { View, Text, TouchableOpacity } from "react-native";
import React, { useState } from "react";
import styled from "styled-components/native";
import { useRef } from "react";

const InputFieldWithPrefix = (props) => {
  const [inputBorder, setInputBorder] = useState("rgba(0,0,0,0.1)");
  const inputRef = useRef(null);

  const handleInputFocus = () => {
    inputRef.current.focus();
  };

  return (
    <Container
      onFocus={() => setInputBorder("black")}
      onPress={handleInputFocus}
      activeOpacity={1}
    >
      <Prefix>{props.prefix}</Prefix>
      <InputFieldStyled
        ref={inputRef}
        value={props.value}
        placeholder={props.placeholder}
        keyboardType={props.keyboardType}
        autoCompleteType={props.autoCompleteType}
        onChangeText={props.onChangeText}
        borderColor={inputBorder}
      />
    </Container>
  );
};

export default InputFieldWithPrefix;

const Container = styled.TouchableOpacity`
  flex-direction: row;
  align-items: center;
  border-radius: 8px;
  background-color: rgba(0, 0, 0, 0.08);
  border: 2px solid ${(props) => props.borderColor};
  /* overflow: hidden; */
  width: 100%;
  padding: 12px 0px;
`;
const Prefix = styled.Text`
  font-size: 18px;
  padding-left: 12px;
  padding-right: 5px;
`;

const InputFieldStyled = styled.TextInput`
  font-size: 18px;
`;
