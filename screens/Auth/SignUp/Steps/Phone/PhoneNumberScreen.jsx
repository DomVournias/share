import { ActivityIndicator, StatusBar, StyleSheet } from "react-native";
import {
  FirebaseRecaptchaBanner,
  FirebaseRecaptchaVerifierModal,
} from "expo-firebase-recaptcha";

import { AuthContext } from "context/auth/AuthReducer";
import CountryPicker from "rn-country-picker";
import Divider from "components/Dividers/Divider";
import GoogleIcon from "components/Icons/google";
import InputFieldWithPrefix from "components/Inputs/InputFieldWithPrefix";
import { LoadingContext } from "context/loading/LoadingProvider";
import { MessageContext } from "context/message/MessageReducer";
import React from "react";
import { app } from "lib/firebase";
import { sendVerificationCode } from "context/auth/AuthFunctions";
import styled from "styled-components/native";
import { useNavigation } from "@react-navigation/native";

const PhoneNumberScreen = () => {
  const navigation = useNavigation();

  // State
  const [inputBorder, setInputBorder] = React.useState("rgba(0,0,0,0)");
  const [phoneNumberValue, setPhoneNumberValue] = React.useState("");
  const [countryCode, setCountryCode] = React.useState("30");
  const [country, setCountry] = React.useState(null);

  // Firebase
  const recaptchaVerifier = React.useRef(null);
  const firebaseConfig = app ? app.options : undefined;
  const attemptInvisibleVerification = true;

  // Auth Context
  const { authData, authDispatch } = React.useContext(AuthContext);

  const { loadingDispatch, loadingState } = React.useContext(LoadingContext);

  const {
    messageDispatch,
    state: { message },
  } = React.useContext(MessageContext);

  const selectedValue = (value) => {
    setCountryCode(value);
  };

  const formatPhoneNumber = (newValue) => {
    const numericValue = newValue.replace(/\D/g, "");
    setPhoneNumberValue(numericValue);
  };

  // Send Verification code to phone number
  const handleSendVerificationCode = async () => {
    try {
      await sendVerificationCode(
        authDispatch,
        loadingDispatch,
        messageDispatch,
        {
          countryCode,
          phoneNumberValue,
          recaptchaVerifier,
        },
        navigation
      );
    } catch (error) {
      console.error("handleSendVerificationCode", error.message);
    }
  };

  return (
    <Container>
      <Main>
        <FirebaseRecaptchaVerifierModal
          ref={recaptchaVerifier}
          firebaseConfig={firebaseConfig}
          attemptInvisibleVerification={attemptInvisibleVerification}
        />
        <Title>Εισάγετε τον αριθμό του κινητού σας τηλεφώνου</Title>
        <Block>
          <CountryCode>
            <CountryPicker
              disable={false}
              animationType={"slide"}
              language="en"
              containerStyle={styles.pickerStyle}
              pickerTitleStyle={styles.pickerTitleStyle}
              countryFlagStyle={styles.flag}
              selectedCountryTextStyle={styles.selectedCountryTextStyle}
              countryNameTextStyle={styles.countryNameTextStyle}
              pickerTitle={"Country Picker"}
              searchBarPlaceHolder={"Αναζήτηση..."}
              hideCountryFlag={false}
              hideCountryCode={true}
              searchBarStyle={styles.searchBarStyle}
              countryCode={countryCode}
              selectedValue={selectedValue}
              searchBarContainerStyle={styles.search}
            />
          </CountryCode>
          <Phone>
            <InputFieldWithPrefix
              value={phoneNumberValue}
              placeholder="6912345678"
              keyboardType="phone-pad"
              autoCompleteType="tel"
              onFocus={() => setInputBorder("black")}
              onChangeText={(value) => formatPhoneNumber(value)}
              borderColor={inputBorder}
              prefix={`+${countryCode}`}
            />
          </Phone>
        </Block>
        <PhoneButton
          onPress={() => handleSendVerificationCode()}
          disabled={loadingState.isLoading}
          activeOpacity={0.8}
        >
          <WhiteButtonText>
            {loadingState.isLoading ? (
              <ActivityIndicator size="small" color="#fff" />
            ) : (
              "Είσοδος"
            )}
          </WhiteButtonText>
        </PhoneButton>

        <Divider text="or" />
        <GoogleButton activeOpacity={0.8}>
          <Icon>
            <GoogleIcon />
          </Icon>
          <BlackButtonText>Είσοδος με Google</BlackButtonText>
        </GoogleButton>
      </Main>
      <Paragraph>
        Καθώς συνδεθείτε, συναινείτε να λαμβάνετε μηνύματα SMS, από το
        ShareTheRide και τις θυγατρικές του στον αριθμό που παρέχεται.
      </Paragraph>
      {attemptInvisibleVerification && <FirebaseRecaptchaBanner />}
    </Container>
  );
};

export default PhoneNumberScreen;

const styles = StyleSheet.create({
  flag: {
    marginTop: 14,
    marginBottom: 14,
  },
  pickerTitleStyle: {},
  pickerStyle: {
    width: "100%",
    alignItems: "center",
    backgroundColor: "rgba(0, 0, 0, 0.02)",
    borderRadius: 5,
    fontSize: 16,
    color: "#000",
    borderRadius: 8,
  },
  selectedCountryTextStyle: {
    color: "#000",
    textAlign: "left",
    padding: 10,
  },
  countryNameTextStyle: {
    paddingLeft: 10,
    color: "#000",
    textAlign: "right",
  },
  searchBarStyle: {
    flex: 1,
  },
});

const Container = styled.View`
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
`;
const Block = styled.View`
  flex-direction: row;
  width: 100%;
  gap: 10px;
`;

const CountryCode = styled.TouchableOpacity`
  position: relative;
  width: 27%;
  align-items: center;
  justify-content: center;
  border-radius: 8px;
  background-color: rgba(0, 0, 0, 0.08);
`;

const Phone = styled.View`
  width: 70%;
`;

const FormButton = styled.TouchableOpacity`
  flex-direction: row;
  align-items: center;
  justify-content: center;
  border-radius: 8px;
  gap: 8px;
  margin-bottom: 5px;
`;

const PhoneButton = styled(FormButton)`
  background-color: ${(props) =>
    props.disabled ? "rgba(0,0,0,0.2)" : "black"};
`;

const GoogleButton = styled(FormButton)`
  background-color: rgba(0, 0, 0, 0.1);
`;

const Icon = styled.View`
  position: relative;
  width: 22px;
  height: 22px;
`;

const ButtonText = styled.Text`
  font-size: 17px;
  font-weight: 600;
  padding: 15px 0px;
`;

const WhiteButtonText = styled(ButtonText)`
  color: white;
`;

const BlackButtonText = styled(ButtonText)`
  color: black;
`;

const Paragraph = styled.Text`
  opacity: 0.5;
  font-size: 13px;
  line-height: 20px;
`;
