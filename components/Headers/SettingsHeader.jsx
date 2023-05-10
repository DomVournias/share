import {
  SafeAreaView,
  StatusBar,
  Text,
  TouchableOpacity,
  View,
} from "react-native";

import { Animated } from "react-native";
import { AntDesign } from "@expo/vector-icons";
import React from "react";
import styled from "styled-components/native";
import { useNavigation } from "@react-navigation/native";

const SettingsHeader = () => {
  return (
    <Header>
      <StatusBar />
      <TouchableOpacity activeOpacity={0.5} onPress={() => navigation.goBack()}>
        <AntDesign
          name="arrowleft"
          size={24}
          color="black"
          style={{ paddingLeft: "4%", paddingTop: 3, paddingRight: "4%" }}
        />
      </TouchableOpacity>
      <Text>SettingsHeader</Text>
    </Header>
  );
};

export default SettingsHeader;

const Header = styled(View)`
  background-color: pink;
`;
