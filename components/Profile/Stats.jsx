import { View, Text } from "react-native";
import React from "react";
import styled from "styled-components/native";
import { MaterialIcons } from "@expo/vector-icons";
import { MaterialCommunityIcons } from "@expo/vector-icons";

const Statistics = ({ stats }) => {
  return (
    <Container>
      <Stats>
        <Stat>
          <Icon>
            <MaterialCommunityIcons name="car" size={24} color="black" />
          </Icon>
          <Count>{stats.drives}</Count>
          <Label>drives</Label>
        </Stat>
        <Stat>
          <Icon>
            <MaterialIcons name="person-pin" size={24} color="black" />
          </Icon>
          <Count>{stats.rides}</Count>
          <Label>rides</Label>
        </Stat>
        <Stat>
          <Icon>
            <MaterialCommunityIcons
              name="road-variant"
              size={24}
              color="black"
            />
          </Icon>
          <Count>{stats.miles}</Count>
          <Label>km shared</Label>
        </Stat>
      </Stats>
    </Container>
  );
};

export default Statistics;

const Container = styled(View)`
  padding: 15px 15px;
  margin-top: 3px;
  background-color: white;
  gap: 5px;
`;

const Stats = styled(View)`
  width: 90%;
  flex-direction: row;
  justify-content: space-around;
  align-items: center;
  align-self: center;
`;

const Stat = styled(View)`
  text-align: center;
  justify-content: center;
  align-items: center;
`;

const Icon = styled(View)`
  justify-content: center;
  align-items: center;
`;

const Count = styled(Text)`
  font-size: 20px;
`;

const Label = styled(Text)`
  font-size: 13px;
  font-weight: 500;
  letter-spacing: 0.3px;
  /* text-transform: capitalize; */
  opacity: 0.4;
`;
