import {
  Button,
  ButtonIcon,
  Header,
  InnerLeft,
  Title,
} from "components/Headers/Header.styled";

import { Animated } from "react-native";
import { AntDesign } from "@expo/vector-icons";
import React from "react";
import { StatusBar } from "react-native";
import { View } from "react-native";
import styled from "styled-components/native";
import { useNavigation } from "@react-navigation/native";

const SettingsHeader = (props, { route }) => {
  const navigation = useNavigation();

  const handleDiscardActions = () => {
    navigation.goBack();
    props.onDiscard();
  };
  const handleSaveActions = () => {
    props.onSave();
  };

  // console.log(`\x1b[42m SettingsHeader \x1b[0m`, route);
  return (
    <Header>
      <StatusBar />
      <InnerLeft>
        <Button activeOpacity={0.8} onPress={handleDiscardActions}>
          <ButtonIcon name="ios-close-sharp" size={30} color="black" />

          {/* <AntDesign name="arrowleft" size={24} color="black" /> */}
        </Button>
        <Title>{props.title}</Title>
      </InnerLeft>

      <Button activeOpacity={0.8} onPress={handleSaveActions}>
        <ButtonIcon name="ios-checkmark-sharp" size={30} color="black" />
      </Button>
    </Header>
  );
};

export default SettingsHeader;
