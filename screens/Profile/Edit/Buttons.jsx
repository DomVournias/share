import { Text, TouchableOpacity, View } from "react-native";

import React from "react";
import styled from "styled-components/native";
import { useNavigation } from "@react-navigation/native";

const ProfileButtons = () => {
  const navigation = useNavigation();
  return (
    <Buttons>
      <ButtonStyled
        activeOpacity={0.8}
        onPress={() => navigation.navigate("EditProfile")}
      >
        <ButtonText>Edit Profile</ButtonText>
      </ButtonStyled>
      {/* <ButtonStyled>
        <ButtonText>Share Profile</ButtonText>
      </ButtonStyled> */}
    </Buttons>
  );
};

export default ProfileButtons;

const Buttons = styled(View)`
  flex-direction: row;
  gap: 10px;
  margin-top: 15px;
`;

const ButtonStyled = styled(TouchableOpacity)`
  background-color: #eeeeee;
  border-radius: 8px;
  width: 50%;
  text-align: center;
  align-items: center;
  justify-content: center;
`;

const ButtonText = styled(Text)`
  font-size: 15px;
  font-weight: 600;
  padding: 5px 10px;
`;
