import { Image, Text, View } from "react-native";

import { AuthContext } from "context/auth/AuthReducer";
import AuthLoading from "components/Loading/AuthLoading";
import Checkbox from "expo-checkbox";
import { LoadingContext } from "context/loading/LoadingProvider";
import { MessageContext } from "context/message/MessageReducer";
import React from "react";
import { RegistrationSteps } from "screens/Auth/SignUp/Steps/template/RegistrationSteps";
import { auth } from "lib/firebase";
import { createNewUser } from "context/user/UserFunctions";
import { setAuthAcceptsTerms } from "context/auth/AuthActions";
import styled from "styled-components/native";
import { useNavigation } from "@react-navigation/native";
import { TouchableOpacity } from "react-native";
import { setAuthLoading } from "context/loading/LoadingActions";

const TermsAgreement = () => {
  const navigation = useNavigation();

  const [lastStep, setLastStep] = React.useState(true);

  const { authData, authDispatch } = React.useContext(AuthContext);

  const { loadingState, loadingDispatch } = React.useContext(LoadingContext);
  const { messageDispatch } = React.useContext(MessageContext);

  const handleTermsAgreement = () => {
    setAuthAcceptsTerms(authDispatch, !authData.data.acceptsTerms);
  };

  const handleCreateNewUser = async () => {
    await createNewUser(
      authDispatch,
      loadingDispatch,
      messageDispatch,
      { auth, authData },
      navigation
    );
  };

  const handleGoBack = () => {
    setLastStep(undefined);
    navigation.navigate("VehicleRegistration");
  };

  console.log(`\x1b[42m Terms loading \x1b[0m`, loadingState.isAuthLoading);

  return (
    <>
      {loadingState.isAuthLoading && <AuthLoading />}
      <RegistrationSteps
        onPressBack={handleGoBack}
        onPressNext={handleCreateNewUser}
        disableBack={false}
        disableNext={!authData.data.acceptsTerms}
        lastStep={lastStep}
      >
        <ImageContainer>
          <ImageStyled source={require("assets/shield.png")} />
        </ImageContainer>

        <Title>Αποδοχή των Όρων Χρήσης & Πολιτική Απορρήτου </Title>
        <Description>
          Επιλέγοντας "Συνφωνώ", έχεται διαβάσει και συμφωνήτε με τους Όρους
          Χρήσης και την Πολιτική Απορρήτου. Είμαι άνω των 18 ετών.
        </Description>
        <TermsField>
          <TermsLabel>Συμφωνώ</TermsLabel>
          <Checkbox
            color="#2da5ff"
            value={authData.data.acceptsTerms}
            onValueChange={() => handleTermsAgreement()}
          />
        </TermsField>
      </RegistrationSteps>
    </>
  );
};

export default TermsAgreement;

const ImageContainer = styled(View)`
  position: relative;
  align-items: center;
  justify-content: center;
`;

const ImageStyled = styled(Image)`
  width: 100%;
  width: 100px;
  height: 100px;
`;

const Title = styled(Text)`
  font-size: 22px;
  font-weight: 400;
  color: black;
`;

const Description = styled(Text)`
  font-size: 16px;
  font-weight: 400;
  margin-bottom: 15px;
`;

const Row = styled(View)`
  flex-direction: row;
  justify-content: space-between;
`;

const TermsField = styled(Row)`
  margin-bottom: 15px;
`;

const TermsLabel = styled(Description)`
  font-weight: 600;
`;
