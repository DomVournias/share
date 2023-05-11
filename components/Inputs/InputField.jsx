import { Text, TextInput, TouchableOpacity, View } from "react-native";

import React from "react";
import styled from "styled-components/native";

const InputField = (props) => {
  const [isFocused, setIsFocused] = React.useState(false);

  const handleInputFocus = () => {
    setIsFocused(true);
    props.onFocus();
  };

  // console.log(numberOfLines);
  return (
    <>
      <InputFieldStyled
        value={props.value}
        editable={props.editable}
        placeholder={props.placeholder}
        keyboardType={props.keyboardType}
        autoCompleteType={props.autoCompleteType}
        onChangeText={props.onChangeText}
        isFocused={isFocused}
        onFocus={handleInputFocus}
        onBlur={() => setIsFocused(false)}
        maxLength={props.maxLength}
        multiline={props.textArea ? true : false}
        numberOfLines={props.textArea ? 2 : 1}
        style={{ textAlignVertical: props.textArea ? "top" : "center" }}
      />
      {props.hasCounter && (
        <WordCount>{`${props.value.length}/${props.maxLength}`}</WordCount>
      )}
    </>
  );
};

export default InputField;

const InputFieldStyled = styled(TextInput)`
  /* flex: 1; */
  min-height: 55px;
  font-size: 17px;
  text-transform: capitalize;
  padding: 12px 15px;
  background-color: rgba(0, 0, 0, 0.08);
  border-radius: 8px;
  border-width: 2px;
  color: ${(props) => (props.editable ? "#000" : "rgba(0,0,0,0.35)")};
  border-color: ${(props) =>
    props.isFocused ? "rgba(0,0,0,1)" : "rgba(0,0,0,0.1)"};
`;

const WordCount = styled(Text)`
  align-self: flex-end;
  opacity: 0.8;
`;
