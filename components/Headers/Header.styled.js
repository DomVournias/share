import { StatusBar, View } from "react-native";
import styled from "styled-components/native";

export const HeaderControls = styled(View)`
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  padding-top: ${`${StatusBar.currentHeight * 1.5}px`};
  width: 100%;
  background-color: transparent;
`;

export const Wrapper = styled(View)`
  padding-left: 5%;
  padding-right: 5%;
`;
