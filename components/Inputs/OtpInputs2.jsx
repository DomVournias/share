import React, { useRef, useState, useEffect } from "react";
import { TextInput, StyleSheet, View } from "react-native";
import styled from "styled-components/native";
import useAuth from "../../context/auth/useAuth";

const OtpInputs = ({ getOtp }) => {
  const { phoneSignUpData, setPhoneSignUpData } = useAuth();
  const [otp, setOtp] = useState(["", "", "", "", "", ""]);
  const otpTextInput = useRef([]);

  useEffect(() => {
    if (otpTextInput.current[0]) {
      otpTextInput.current[0].focus();
    }
  }, []);

  const focusPrevious = (key, index) => {
    if (key === "Backspace" && index !== 0) {
      otpTextInput.current[index - 1].focus();
    }
  };

  const focusNext = (index, value) => {
    const newOtp = [...otp];
    newOtp[index] = value;
    setOtp(newOtp);

    if (index < otpTextInput.current.length - 1 && value) {
      otpTextInput.current[index + 1].focus();
    }

    if (index === otpTextInput.current.length - 1) {
      otpTextInput.current[index].blur();
    }

    getOtp(newOtp.join(""));
  };

  const inputs = Array(6).fill(0);

  return (
    <View style={styles.codeInputs}>
      {inputs.map((_, index) => (
        <TextInput
          key={index}
          style={styles.codeInput}
          keyboardType="numeric"
          onChangeText={(value) => focusNext(index, value)}
          onKeyPress={(e) => focusPrevious(e.nativeEvent.key, index)}
          ref={(ref) => (otpTextInput.current[index] = ref)}
        />
      ))}
    </View>
  );
};

export default OtpInputs;

const styles = StyleSheet.create({
  codeInputs: {
    flexDirection: "row",
    gap: 10,
  },
  codeInput: {
    width: 30,
    height: 40,
    fontSize: 24,
    fontWeight: "bold",
    textAlign: "center",
    borderWidth: 1,
    borderRadius: 5,
    borderColor: "#ccc",
  },
});
