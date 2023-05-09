import { StyleSheet, Text, View, TouchableOpacity } from "react-native";
import React from "react";
import { Feather } from "@expo/vector-icons";
import styled from "styled-components/native";
import { useContext } from "react";
import { CurrentUserProfileContext } from "../../../context/user/UserReducer";
import { useNavigation } from "@react-navigation/native";

const CreateButton = () => {
  const navigation = useNavigation();
  const { currentUserProfile } = useContext(CurrentUserProfileContext);

  const handleCreate = () => {
    if (currentUserProfile.userType === "driver") {
      navigation.navigate("OfferRide");
    } else {
      navigation.navigate("FindRide");
    }
  };

  // console.log(currentUserProfile.userType);
  return (
    <ButtonStyled
      activeOpacity={0.8}
      onPress={handleCreate}
      color={
        currentUserProfile.userType === "driver"
          ? "rgba(0, 0, 0, 0.7)"
          : "rgba(255, 255, 255, 0.7)"
      }
    >
      {currentUserProfile.userType === "driver" ? (
        <Feather name="plus" size={35} color="white" />
      ) : (
        <Feather name="search" size={28} color="rgba(0,0,0,0.8)" />
      )}
    </ButtonStyled>
  );
};

export default CreateButton;

export const ButtonStyled = styled(TouchableOpacity)`
  position: relative;
  background-color: ${(props) => props.color};
  width: 50px;
  height: 50px;
  padding: 0;
  margin: 0;
  margin-left: 10px;
  justify-content: center;
  align-items: center;
  border-radius: 50px;
`;
