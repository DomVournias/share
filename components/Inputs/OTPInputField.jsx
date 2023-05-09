import { View, Text } from "react-native";
import React, { useEffect, useRef, useState } from "react";
import styled from "styled-components/native";
import { AuthContext } from "../../context/auth/AuthReducer";
import { useContext } from "react";
import { setAuthVerificationCode } from "../../context/auth/AuthActions";

const OTPInputField = ({ setPinReady, loading }) => {
  const {
    authData,
    authDispatch
  } = useContext(AuthContext);

  // console.log(authData);

  const [inputContainerIsFocused, setInputContainerIsFocused] = useState(false);

  const textInputRef = useRef(null);

  const maxLength = 6;
  const codeDigitsArray = new Array(maxLength).fill(0);

  const code = authData.data.verificationCode;

  useEffect(() => {
    setPinReady(code.length === maxLength);
    return () => setPinReady(false);
  }, [code]);

  const setVerificationCode = (value) => {
    setAuthVerificationCode(authDispatch, value);
  };

  const handleOnPress = () => {
    setInputContainerIsFocused(true);
    textInputRef?.current?.focus();
  };

  const handleOnBlur = () => {
    setInputContainerIsFocused(false);
  };

  const toCodeDigitInput = (_value, index) => {
    const emptyInputChar = " ";
    const digit = code[index] || emptyInputChar;

    // conditions
    const isCurrentDigit = index === code.length;
    const isLastDigit = index === maxLength - 1;
    const isCodeFull = code.length === maxLength;

    const isDigitFocused = isCurrentDigit || (isLastDigit && isCodeFull);

    const StyledOTPInput =
      inputContainerIsFocused && isDigitFocused ? OTPInputFocused : OTPInput;

    return (
      <StyledOTPInput key={index} focusedBorder={loading ? "#ccc" : "black"}>
        <OTPInputText textColor={loading ? "#ccc" : "black"}>
          {digit}
        </OTPInputText>
      </StyledOTPInput>
    );
  };

  return (
    <OTPInputSection>
      <OTPInputContainer onPress={handleOnPress}>
        {codeDigitsArray.map(toCodeDigitInput)}
      </OTPInputContainer>
      <HiddenTextInput
        value={code}
        onChangeText={(value) => setVerificationCode(value)}
        maxLength={maxLength}
        keyboardType="number-pad"
        returnKeyType="done"
        textContentType="oneTimeCode"
        ref={textInputRef}
        onBlur={handleOnBlur}
        // editable={loading}
        // selectTextOnFocus={loading}
      />
    </OTPInputSection>
  );
};

export default OTPInputField;

const OTPInputSection = styled.View`
  justify-content: center;
  align-items: center;
`;

const OTPInputContainer = styled.Pressable`
  width: 100%;
  flex-direction: row;
  gap: 8px;
`;

const OTPInput = styled.View`
  border-color: rgba(0, 0, 0, 0.05);
  width: 12%;
  min-width: 10%;
  border-width: 2px;
  border-radius: 8px;
  padding: 12px 0px;
  background-color: rgba(0, 0, 0, 0.085);
`;

const OTPInputText = styled.Text`
  font-size: 20px;
  font-weight: bold;
  text-align: center;
  color: ${(props) => props.textColor};
`;

const HiddenTextInput = styled.TextInput`
  position: absolute;
  width: 1px;
  height: 1px;
  opacity: 0;
`;

const OTPInputFocused = styled(OTPInput)`
  border-color: ${(props) => props.focusedBorder};
  color: black;
`;
