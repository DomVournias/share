import { Text, TouchableOpacity } from "react-native";

import { AntDesign } from "@expo/vector-icons";
import React from "react";
import styled from "styled-components/native";
import { useNavigation } from "@react-navigation/native";

const BackButton = () => {
  const navigation = useNavigation();
  return (
    <ButtonWrapper activeOpacity={0.5} onPress={() => navigation.goBack()}>
      <AntDesign
        name="arrowleft"
        size={24}
        color="black"
        style={{ paddingLeft: "4%", paddingTop: 3, paddingRight: "4%" }}
      />
    </ButtonWrapper>
  );
};

export default BackButton;

const ButtonWrapper = styled(TouchableOpacity)`
  /* align-items: center; */
  /* justify-content: center; */
  /* background-color: pink; */
`;
