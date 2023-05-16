import {
  SafeAreaView,
  StatusBar,
  Text,
  TouchableOpacity,
  View,
} from "react-native";

import { Ionicons } from "@expo/vector-icons";
import styled from "styled-components/native";

export const HeaderControls = styled(View)`
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  width: 100%;
`;

export const Wrapper = styled(View)`
  padding-left: 4%;
  padding-right: 4%;
`;

export const Header = styled(View)`
  /* flex: 1; */
  position: relative;
  padding-top: 2%;
  min-height: ${`${StatusBar.currentHeight * 2.2}px`};
  flex-direction: row;
  align-items: center;
  width: 100%;
  justify-content: space-between;
  background-color: ${(props) => props.color};
`;

export const Title = styled(Text)`
  font-size: 20px;
  font-weight: 500;
  padding-left: 5px;
`;

export const Button = styled(TouchableOpacity)`
  align-self: stretch;
  align-items: center;
  justify-content: center;
`;

export const ButtonIcon = styled(Ionicons)`
  padding-top: 3px;
  padding-left: 4%;
  padding-right: 4%;
`;

export const InnerLeft = styled(View)`
  flex-direction: row;
  align-items: center;
  justify-content: center;
`;
