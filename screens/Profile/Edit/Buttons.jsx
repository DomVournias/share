import { Text, TouchableOpacity, View } from "react-native";

import React from "react";
import styled from "styled-components/native";
import { useNavigation } from "@react-navigation/native";

const ProfileButtons = () => {
  const navigation = useNavigation();
  return (
    <EditProfileButton
      activeOpacity={0.8}
      onPress={() => navigation.navigate("EditProfile")}
    >
      <EditProfileButtonText>Edit Profile</EditProfileButtonText>
    </EditProfileButton>
  );
};

export default ProfileButtons;

const EditProfileButton = styled(TouchableOpacity)`
  margin-top: 15px;
  background-color: #eeeeee;
  border-radius: 8px;
  width: 50%;
  text-align: center;
  align-items: center;
  justify-content: center;
`;

const EditProfileButtonText = styled(Text)`
  font-size: 15px;
  font-weight: 600;
  padding: 5px 10px;
`;
