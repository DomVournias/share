import { ActivityIndicator, Text, View } from "react-native";

import { BlurView } from "expo-blur";
import { Modal } from "react-native";
import React from "react";
import styled from "styled-components/native";

const WORDS = [
  "Loading",
  "Creating your profile",
  "Signing you in",
  "Please wait",
];

const AuthLoading = () => {
  const [currentWordIndex, setCurrentWordIndex] = React.useState(0);

  React.useEffect(() => {
    const intervalId = setInterval(() => {
      setCurrentWordIndex((currentWordIndex + 1) % WORDS.length);
    }, 2000);

    return () => clearInterval(intervalId);
  }, [currentWordIndex]);

  return (
    <Modal visible={true} animationType="fade" transparent={true}>
      <Container intensity={90} tint="light">
        <ActivityIndicator size="large" color="black" />
        <LoadingText>{WORDS[currentWordIndex]}...</LoadingText>
      </Container>
    </Modal>
  );
};

export default AuthLoading;

const Container = styled(BlurView)`
  flex: 1;
  align-items: center;
  justify-content: center;
`;

const LoadingText = styled(Text)`
  font-size: 16px;
  color: #555555;
  margin-top: 10px;
`;
