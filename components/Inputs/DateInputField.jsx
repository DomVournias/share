import { View, Text, TextInput, TouchableOpacity } from "react-native";
import React from "react";
import styled from "styled-components/native";

const DateInputField = (props) => {
  const [isFocused, setIsFocused] = React.useState(false);

  const handleInputFocus = () => {
    setIsFocused(true);
    props.onFocus();
  };
  return (
    <DateInputFieldStyled
      activeOpacity={0.9}
      onPress={handleInputFocus}
      isFocused={isFocused}
      onFocus={handleInputFocus}
      onBlur={() => setIsFocused(false)}
    >
      <DateValue
        color={props.value === "" ? "rgba(0,0,0,0.4)" : "rgba(0,0,0,1)"}
      >
        {props.value === "" ? "Ημ. γέννησης" : props.value}
      </DateValue>
    </DateInputFieldStyled>
  );
};

export default DateInputField;

const DateInputFieldStyled = styled(TouchableOpacity)`
  border-radius: 8px;
  background-color: rgba(0, 0, 0, 0.08);
  border-width: 2px;
  border-color: ${(props) =>
    props.isFocused ? "rgba(0,0,0,1)" : "rgba(0,0,0,0.1)"};
`;

const DateValue = styled(Text)`
  font-size: 17px;
  padding: 12px 15px;
  color: ${(props) => props.color};
`;
