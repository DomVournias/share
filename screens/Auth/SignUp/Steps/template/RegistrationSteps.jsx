import {
  Keyboard,
  KeyboardAvoidingView,
  Pressable,
  ScrollView,
  StatusBar,
  Text,
  View,
} from "react-native";

import React from "react";
import StepsButton from "components/Buttons/FormButtons";
import StepsProgress from "screens/Auth/SignUp/Steps/StepsProgress";
import styled from "styled-components/native";

export const RegistrationSteps = ({
  children,
  onPressBack,
  onPressNext,
  disableBack,
  disableNext,
  disableSteps,
  lastStep,
}) => {
  return (
    <Container onPress={Keyboard.dismiss}>
      <View>
        {!disableSteps && !null && !undefined && <StepsProgress />}
        <Main>{children}</Main>
      </View>

      <Footer behavior="height">
        <StepsButton
          onPress={onPressBack}
          forward={false}
          disabled={disableBack}
        />
        <StepsButton
          lastStep={lastStep}
          onPress={onPressNext}
          forward={true}
          disabled={disableNext}
        />
      </Footer>
    </Container>
  );
};

const Container = styled(Pressable)`
  flex: 1;
  position: relative;
  flex-direction: column;
  justify-content: space-between;
  background-color: white;
  padding-top: ${`${StatusBar.currentHeight + 10}px`};
  padding-left: 30px;
  padding-right: 30px;
  padding-bottom: 30px;
`;

const Main = styled(View)`
  gap: 15px;
  align-self: flex-start;
`;

const Footer = styled(KeyboardAvoidingView)`
  flex-direction: row;
  align-self: center;
  width: 100%;
  justify-content: space-between;
  padding-top: 30px;
  /* position: absolute;
  bottom: 20px; */
`;
