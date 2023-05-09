import { View, Text } from "react-native";
import React from "react";
import styled from "styled-components/native";

const Preferences = () => {
  return (
    <Container>
      <Preference>
        <Icon></Icon>
        <Phrase></Phrase>
      </Preference>
    </Container>
  );
};

export default Preferences;

const Container = styled(View)``;
const Preference = styled(View)``;
const Phrase = styled(Text)``;
