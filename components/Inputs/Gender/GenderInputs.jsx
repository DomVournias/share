import {
  Keyboard,
  Text,
  TextInput,
  TouchableOpacity,
  View,
} from "react-native";

import { AuthContext } from "context/auth/AuthReducer";
import InputField from "components/Inputs/InputField";
import React from "react";
import { setAuthGender } from "context/auth/AuthActions";
import styled from "styled-components/native";

const GenderInputs = ({ mode, tempGender, setTempGender }) => {
  const [selectedGender, setSelectedGender] = React.useState(null);

  const { authData, authDispatch } = React.useContext(AuthContext);

  const handleGenderSelection = (isBinary, gender) => {
    if (isBinary) {
      Keyboard.dismiss();
      setSelectedGender(gender);
      if (mode === "auth") {
        setAuthGender(authDispatch, {
          isBinary: true,
          binary: gender,
          nonBinary: "",
        });
      } else {
        setTempGender((prevGender) => ({
          ...prevGender,
          isBinary: true,
          binary: gender,
          nonBinary: "",
        }));
      }
    } else {
      setSelectedGender(gender);
      if (mode === "auth") {
        setAuthGender(authDispatch, {
          isBinary: false,
          binary: "",
          nonBinary: gender,
        });
      } else {
        setTempGender((prevGender) => ({
          ...prevGender,
          isBinary: false,
          binary: "",
          nonBinary: gender,
        }));
      }
    }
  };

  const handleOnFocusNonBinary = (gender) => {
    setSelectedGender(gender);
    if (mode === "auth") {
      setAuthGender(authDispatch, {
        isBinary: false,
        binary: "",
      });
    } else {
      setTempGender((prevGender) => ({
        ...prevGender,
        isBinary: false,
        binary: "",
      }));
    }
  };

  // console.log(tempGender);

  return (
    <GenderSelection>
      <Gender
        selected={selectedGender === "male" || tempGender.binary === "male"}
        activeOpacity={0.9}
        onPress={() => handleGenderSelection(true, "male")}
      >
        <GenderText
          selected={selectedGender === "male" || tempGender.binary === "male"}
        >
          Άνδρας
        </GenderText>
      </Gender>

      <Gender
        activeOpacity={0.9}
        onPress={() => handleGenderSelection(true, "female")}
        selected={selectedGender === "female" || tempGender.binary === "female"}
      >
        <GenderText
          selected={
            selectedGender === "female" || tempGender.binary === "female"
          }
        >
          Γυναίκα
        </GenderText>
      </Gender>

      <GenderInput
        placeholder="'Αλλο"
        keyboardType="default"
        autoCompleteType="gender
      "
        onBlur={Keyboard.dismiss}
        selected={
          selectedGender === "non-binary" || tempGender.isBinary === false
        }
        onFocus={() => handleOnFocusNonBinary("non-binary")}
        value={
          mode === "auth"
            ? authData.data.gender.nonBinary
            : tempGender.nonBinary
        }
        onChangeText={(text) => handleGenderSelection(false, text)}
      />
    </GenderSelection>
  );
};

export default GenderInputs;

const GenderSelection = styled(View)`
  width: 100%;
  flex-direction: row;
  align-items: center;
  gap: 10px;
`;

const Gender = styled(TouchableOpacity)`
  text-align: center;
  border-radius: 8px;
  font-size: 17px;
  padding: 13.5px 15px;
  border-width: 2px;
  border-color: ${({ selected }) =>
    selected ? "rgba(0,0,0,1)" : "rgba(0,0,0,0.1)"};
  /* background-color: rgba(0, 0, 0, 0.08); */
  /* border-color: ${(props) =>
    props.isFocused ? "rgba(0,0,0,1)" : "rgba(0,0,0,0.1)"}; */
`;

const GenderText = styled(Text)`
  font-size: 17px;
  color: ${({ selected }) => (selected ? "rgba(0,0,0,1)" : "rgba(0,0,0,0.3)")};
  /* color: ${(props) =>
    props.isFocused ? "rgba(0,0,0,1)" : "rgba(0,0,0,0.1)"}; */
`;

const GenderInput = styled(TextInput)`
  flex: 1;
  min-height: 55px;
  font-size: 17px;
  text-transform: capitalize;
  padding: 12px 15px;
  background-color: rgba(0, 0, 0, 0.08);
  border-radius: 8px;
  border-width: 2px;
  border-color: ${({ selected }) =>
    selected ? "rgba(0,0,0,1)" : "rgba(0,0,0,0.1)"};
`;
