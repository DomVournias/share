import { Keyboard, Pressable, StatusBar, Text, View } from "react-native";
import { auth, db } from "../../../../lib/firebase";

import InputField from "../../../../components/Inputs/InputField";
import React from "react";
import StepsButton from "../../../../components/Buttons/FormButtons";
import styled from "styled-components/native";
import { useNavigation } from "@react-navigation/native";

const WelcomeBackScreen = () => {
  const navigation = useNavigation();

  //   const setAccountEmail = (text) => {
  //     setUserAuth((prevUserAuth) => ({
  //       ...prevUserAuth,
  //       email: text,
  //     }));
  //   };

  const handleSignIn = async () => {
    //
  };

  // console.log(`AUTH========>`, auth);
  return (
    <Container onPress={Keyboard.dismiss}>
      <Main>
        {/* <Title>Καλωσόρισες πίσω, {initialUserAuthState.firstName}!</Title> */}
        <InputField
          placeholder="Γράψε τον κωδικό σου"
          secureTextEntry={true}
          // keyboardType="password"
          // autoCompleteType="password"
          //   onChangeText={(text) => setAccountEmail(text)}
        />
      </Main>

      <Footer>
        <StepsButton
          //   onPress={() => navigation.navigate("StepTwo")}
          forward={false}
          disabled={false}
        />
        <StepsButton
          //   onPress={() => registerUserEmail()}
          forward={true}
          disabled={false}
        />
      </Footer>
    </Container>
  );
};

export default WelcomeBackScreen;

const Container = styled.Pressable`
  flex: 1;
  justify-content: space-between;
  background-color: white;
  padding-top: ${`${StatusBar.currentHeight + 30}px`};
  padding-left: 30px;
  padding-right: 30px;
  padding-bottom: 30px;
`;

const Main = styled.View`
  gap: 15px;
`;

const Title = styled.Text`
  font-size: 22px;
  font-weight: 400;
  /* margin-bottom: 15px; */
  color: black;
`;

const Footer = styled.View`
  flex-direction: row;
  justify-content: space-between;
`;
