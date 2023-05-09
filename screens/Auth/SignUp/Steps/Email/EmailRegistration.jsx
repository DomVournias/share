import { Text, View } from "react-native";
import { setAuthEmail, setRegistrationStep } from "context/auth/AuthActions";

import { AuthContext } from "context/auth/AuthReducer";
import InputField from "components/Inputs/InputField";
import { MessageContext } from "context/message/MessageReducer";
import React from "react";
import { RegistrationSteps } from "screens/Auth/SignUp/Steps/template/RegistrationSteps";
import { auth } from "lib/firebase";
import { setMessage } from "context/message/MessageActions";
import styled from "styled-components/native";
import { updateEmail } from "firebase/auth";
import { useNavigation } from "@react-navigation/native";

const EmailRegistration = () => {
  const navigation = useNavigation();

  const [disableNext, setDisableNext] = React.useState(true);

  const { authDispatch, authData } = React.useContext(AuthContext);

  const { messageDispatch } = React.useContext(MessageContext);

  const handleAccountEmail = (text) => {
    const emailRegex = /\S+@\S+\.\S+/;

    if (emailRegex.test(text)) {
      setDisableNext(false);
      setAuthEmail(authDispatch, text);
    } else {
      setDisableNext(true);
      setMessage(messageDispatch, "Please enter a valid email address");
    }
  };

  const registerUserEmail = async () => {
    updateEmail(auth.currentUser, authData.data.email)
      .then(() => {
        setMessage(messageDispatch, "Email registered successfully👍");

        setRegistrationStep(authDispatch, { email: true });

        navigation.navigate("FullNameRegistration");
      })
      .catch((error) => {
        setMessage(messageDispatch, "Try another email.");
        console.error(`registerUserEmail error: ${error.message}`);
      });
  };

  // console.log(authData);
  return (
    <RegistrationSteps
      onPressBack={() => null}
      onPressNext={registerUserEmail}
      disableBack={true}
      disableNext={disableNext}
    >
      <Main>
        <Title>Ποιο είναι το email σας;</Title>
        <InputField
          placeholder="name@example.com"
          keyboardType="email-address"
          autoCompleteType="email"
          onChangeText={(text) => handleAccountEmail(text)}
          onFocus={() => null}
        />
      </Main>
    </RegistrationSteps>
  );
};

export default EmailRegistration;

const Main = styled(View)`
  gap: 15px;
`;

const Title = styled(Text)`
  font-size: 22px;
  font-weight: 400;
  /* margin-bottom: 15px; */
  color: black;
`;

const Footer = styled(View)`
  flex-direction: row;
  justify-content: space-between;
`;
