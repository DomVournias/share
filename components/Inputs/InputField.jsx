import { View, Text, TextInput, TouchableOpacity } from "react-native";
import React from "react";
import styled from "styled-components/native";

const InputField = (props) => {
  const [isFocused, setIsFocused] = React.useState(false);

  const handleInputFocus = () => {
    setIsFocused(true);
    props.onFocus();
  };

  return (
    <InputFieldStyled
      value={props.value}
      placeholder={props.placeholder}
      keyboardType={props.keyboardType}
      autoCompleteType={props.autoCompleteType}
      onChangeText={props.onChangeText}
      isFocused={isFocused}
      onFocus={handleInputFocus}
      onBlur={() => setIsFocused(false)}
    />
  );
};

export default InputField;

const InputFieldStyled = styled(TextInput)`
  flex: 1;
  min-height: 55px;
  font-size: 17px;
  padding: 12px 15px;
  background-color: rgba(0, 0, 0, 0.08);
  border-radius: 8px;
  border-width: 2px;
  border-color: ${(props) =>
    props.isFocused ? "rgba(0,0,0,1)" : "rgba(0,0,0,0.1)"};
`;
