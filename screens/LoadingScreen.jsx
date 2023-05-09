import { ActivityIndicator, Text, View } from "react-native";

import React from "react";
import styled from "styled-components/native";

const LoadingScreen = () => {
  return (
    <Container>
      <Block>
        <Logo>ShareTheRide</Logo>
      </Block>
    </Container>
  );
};

const Container = styled(View)`
  flex: 1;
  background-color: #000000;
  justify-content: center;
  align-items: center;
`;

const Block = styled(View)`
  margin-top: -50px;
`;

const Logo = styled(Text)`
  font-size: 32px;
  font-weight: 700;
  color: #fff;
  justify-content: center;
  align-items: center;
  margin-bottom: 10px;
`;

export default LoadingScreen;
