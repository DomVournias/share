import { Keyboard, Pressable, StatusBar, Text, View } from "react-native";

import { AuthContext } from "context/auth/AuthReducer";
import { LoadingContext } from "context/loading/LoadingProvider";
import { MessageContext } from "context/message/MessageReducer";
import OTPInputField from "components/Inputs/OTPInputField";
import React from "react";
import { RegistrationSteps } from "../template/RegistrationSteps";
import StepsButton from "components/Buttons/FormButtons";
import { confirmVerificationCode } from "context/auth/AuthFunctions";
import styled from "styled-components/native";
import { useNavigation } from "@react-navigation/native";

const OTPVerification = () => {
  const navigation = useNavigation();
  const [pinReady, setPinReady] = React.useState(false);

  const { authData, authDispatch } = React.useContext(AuthContext);

  const { loadingDispatch, loadingState } = React.useContext(LoadingContext);

  const {
    messageDispatch,
    state: { message },
  } = React.useContext(MessageContext);

  const handleCodeVerification = async () => {
    await confirmVerificationCode(
      loadingDispatch,
      messageDispatch,
      { authData },
      navigation
    );
  };

  // console.log("\u001b[" + 32 + "m" + "AUTH DATA" + "\u001b[0m", authData);

  return (
    <RegistrationSteps
      onPressBack={() => null}
      onPressNext={handleCodeVerification}
      disableBack={true}
      disableNext={!pinReady}
      disableSteps={true}
    >
      <Title>
        Εισάγεται τον 6-ψήφιο κωδικό που σας στείλαμε στο{" "}
        {authData.data.phoneNumber}
      </Title>
      <OTPInputField
        setPinReady={setPinReady}
        loading={loadingState.isLoading}
      />
    </RegistrationSteps>
  );
};

export default OTPVerification;

const Container = styled(Pressable)`
  flex: 1;
  justify-content: space-between;
  background-color: white;
  padding-top: ${`${StatusBar.currentHeight + 30}px`};
  padding-left: 30px;
  padding-right: 30px;
  padding-bottom: 30px;
`;

const Main = styled(View)`
  gap: 15px;
`;

const Title = styled(Text)`
  font-size: 22px;
  font-weight: 400;
  /* margin-bottom: 15px; */
  color: black;
`;
