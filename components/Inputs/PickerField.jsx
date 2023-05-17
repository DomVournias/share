import {
  Text,
  TouchableOpacity,
  TouchableWithoutFeedback,
  View,
} from "react-native";

import { Picker } from "@react-native-picker/picker";
import React from "react";
import styled from "styled-components/native";

const PickerField = (props) => {
  const [isFocused, setIsFocused] = React.useState(false);

  const pickerRef = React.useRef();

  const handlePressIn = () => {
    setIsFocused(true);
  };

  // const handlePressOut = () => {
  //   setIsFocused(false);
  // };

  console.log(props.value);

  return (
    <InputBlock isFocused={isFocused} value={props.value}>
      <PickerStyled
        ref={pickerRef}
        selectedValue={props.value}
        onValueChange={props.onValueChange}
        onFocus={handlePressIn}
        // onBlur={handlePressOut}
      >
        <Picker.Item
          key={"unselectable"}
          label={props.label}
          value={0}
          style={{ fontSize: 17, color: "rgba(0,0,0,0.5)" }}
        />
        {props.list.map((item) => (
          <Picker.Item
            key={item}
            label={props.toString ? item.toString() : item}
            value={item}
          />
        ))}
      </PickerStyled>
    </InputBlock>
  );
};

export default PickerField;

const InputBlock = styled(View)`
  border-radius: 8px;
  font-size: 17px;
  background-color: rgba(0, 0, 0, 0.08);
  border-width: 2px;
  border-color: ${({ isFocused, value }) =>
    isFocused && value !== 0 ? "rgba(0,0,0,1)" : "rgba(0,0,0,0.1)"};
  overflow: hidden;
`;

const PickerStyled = styled(Picker)``;
