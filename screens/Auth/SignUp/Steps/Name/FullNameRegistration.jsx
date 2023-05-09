import { Keyboard, Pressable, StatusBar, Text, View } from "react-native";
import {
  setAuthFirstName,
  setAuthGender,
  setAuthLastName,
  setRegistrationStep,
} from "context/auth/AuthActions";

import { AuthContext } from "context/auth/AuthReducer";
import InputField from "components/Inputs/InputField";
import { MessageContext } from "context/message/MessageReducer";
import React from "react";
import { RegistrationSteps } from "screens/Auth/SignUp/Steps/template/RegistrationSteps";
import { TouchableOpacity } from "react-native";
import { auth } from "lib/firebase";
import { avatar } from "assets/imageLinks";
import { setMessage } from "context/message/MessageActions";
import styled from "styled-components/native";
import { updateProfile } from "firebase/auth";
import { useNavigation } from "@react-navigation/native";

const FullNameRegistration = () => {
  const navigation = useNavigation();
  const { authData, authDispatch } = React.useContext(AuthContext);

  const { messageDispatch } = React.useContext(MessageContext);

  const setFullName = (text, field) => {
    const onlyTextRegex = /^[a-zA-Z\s]*$/;

    if (onlyTextRegex.test(text)) {
      if (field === "firstName") {
        setAuthFirstName(authDispatch, text);
      } else if (field === "lastName") {
        setAuthLastName(authDispatch, text);
      }
    } else {
      setMessage(messageDispatch, "Do not include any numbers");
    }
  };

  const registerFullName = async () => {
    updateProfile(auth.currentUser, {
      displayName: `${authData.data.firstName}` + ` ${authData.data.lastName}`,
      photoURL: avatar,
    })
      .then(() => {
        setMessage(messageDispatch, "Name and last name has been updated 👍");

        setRegistrationStep(authDispatch, { name: true });

        navigation.navigate("AgeRegistration");
      })
      .catch((error) => {
        console.error(`registerFullName error: ${error.message}`);
      });
  };

  const handleAuthGender = (isBinary, gender) => {
    if (isBinary) {
      setAuthGender(authDispatch, {
        isBinary: true,
        binary: gender,
        nonBinary: "",
      });
    } else {
      setAuthGender(authDispatch, {
        isBinary: false,
        binary: "",
        nonBinary: gender,
      });
    }
  };

  const changeButtonColors = (mode, gender) => {
    if (authData.data.gender.binary === gender) {
      return "rgba(0,0,0,1)";
    } else {
      if (mode === "color") {
        return "rgba(0,0,0,0.4)";
      }
      return "rgba(0, 0, 0, 0.1)";
    }
  };

  const disableNext = () => {
    if (authData.data.firstName === "") {
      return true;
    } else if (authData.data.lastName === "") {
      return true;
    } else if (
      authData.data.gender.binary === "" &&
      authData.data.gender.nonBinary === ""
    ) {
      return true;
    } else {
      return false;
    }
  };

  // console.log(authData.data.gender);

  return (
    <RegistrationSteps
      onPressBack={() => navigation.navigate("EmailRegistration")}
      onPressNext={registerFullName}
      disableBack={false}
      disableNext={disableNext()}
    >
      <Title>Πως σας λένε;</Title>
      <Description>
        Εισάγετε το όνομα και το επίθετο όπως ακριβώς καταγράφεται στην
        αστυνομική ταυτότητα η το δίπλωμα οχήματος σας.
      </Description>
      <InputField
        placeholder="Όνομα"
        keyboardType="default"
        autoCompleteType="given-name
          "
        onFocus={() => null}
        value={authData.data.firstName}
        onChangeText={(text) => setFullName(text, "firstName")}
      />
      <InputField
        placeholder="Επίθετο"
        keyboardType="default"
        autoCompleteType="family-name
          "
        onFocus={() => null}
        value={authData.data.lastName}
        onChangeText={(text) => setFullName(text, "lastName")}
      />

      <GenderSelection>
        <Gender
          activeOpacity={0.9}
          onPress={() => handleAuthGender(true, "male")}
          color={changeButtonColors("border", "male")}
        >
          <GenderText color={changeButtonColors("color", "male")}>
            Άνδρας
          </GenderText>
        </Gender>
        <Gender
          activeOpacity={0.9}
          onPress={() => handleAuthGender(true, "female")}
          color={changeButtonColors("border", "female")}
        >
          <GenderText color={changeButtonColors("color", "female")}>
            Γυναίκα
          </GenderText>
        </Gender>
        <InputField
          placeholder="'Αλλο"
          keyboardType="default"
          autoCompleteType="gender
          "
          onFocus={() => null}
          value={authData.data.gender.nonBinary}
          onChangeText={(text) => handleAuthGender(false, text)}
        />
      </GenderSelection>
    </RegistrationSteps>
  );
};

export default FullNameRegistration;

const Main = styled(View)`
  gap: 15px;
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

const Footer = styled(View)`
  flex-direction: row;
  justify-content: space-between;
`;

const GenderSelection = styled(View)`
  flex-direction: row;
  align-items: center;
  gap: 4px;
`;

const Gender = styled(TouchableOpacity)`
  text-align: center;
  border-radius: 8px;
  font-size: 17px;
  padding: 13.5px 15px;
  /* background-color: rgba(0, 0, 0, 0.08); */
  border: 2px solid ${(props) => props.color};
`;

const GenderText = styled(Text)`
  font-size: 17px;
  color: ${(props) => props.color};
`;
