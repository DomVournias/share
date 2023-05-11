import { View, Text, TouchableOpacity } from "react-native";
import React from "react";
import styled from "styled-components/native";
import { FontAwesome } from "@expo/vector-icons";

const Rating = ({ average, safety, communication, timeliness }) => {
  return (
    <Container>
      <Column>
        <Icon>
          <FontAwesome name="star" size={18} color="#f4c150" />
        </Icon>
      </Column>
      <Column>
        <ValueBold>{average}</ValueBold>
        <Value>{safety}</Value>
        <Value>{communication}</Value>
        <Value>{timeliness}</Value>
      </Column>
      <Column>
        <LabelBold>Average Rating</LabelBold>
        <Label>Safety</Label>
        <Label>Communication</Label>
        <Label>Timeliness</Label>
      </Column>
    </Container>
  );
};

export default Rating;

const Container = styled(View)`
  padding: 15px 30px;
  margin-top: 3px;
  background-color: white;
  flex-direction: row;
  gap: 5px;
`;

const Column = styled(View)``;

const Icon = styled(View)`
  margin-top: 3px;
`;

const Value = styled(Text)`
  font-size: 16px;
  font-weight: 500;
  opacity: 0.82;
`;
const Label = styled(Text)`
  font-size: 16px;
  font-weight: 500;
  opacity: 0.82;
`;

const ValueBold = styled(Text)`
  font-size: 18px;
  font-weight: 500;
  margin-bottom: 3px;
`;

const LabelBold = styled(Text)`
  font-size: 18px;
  font-weight: 500;
  margin-bottom: 3px;
`;
