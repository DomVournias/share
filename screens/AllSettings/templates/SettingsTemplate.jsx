import { Text, View } from "react-native";

import React from "react";
import styled from "styled-components/native";

const SettingsTemplate = ({ children }) => {
  return <Container>{children}</Container>;
};

export default SettingsTemplate;

const Container = styled(View)`
  flex: 1;
  padding: 2% 3%;
  background-color: #fff;
`;
