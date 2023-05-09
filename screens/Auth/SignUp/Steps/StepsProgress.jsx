import { AuthContext } from "context/auth/AuthReducer";
import React from "react";
import { View } from "react-native";
import styled from "styled-components/native";

const StepsProgress = () => {
  const { authData } = React.useContext(AuthContext);

  const stepsOrder = ["email", "name", "age", "vehicle", "terms"];

  const orderedSteps = stepsOrder.reduce((obj, key) => {
    obj[key] = authData.steps[key];
    return obj;
  }, {});

  const steps = Object.values(orderedSteps);

  return (
    <Container>
      {steps.map((value, index) => (
        <LineBlock key={index} bg={value ? "#000" : "#f5f5f5"} />
      ))}
    </Container>
  );
};

export default StepsProgress;

const Container = styled(View)`
  flex-direction: row;
  align-items: center;
  justify-content: center;
  gap: 5px;
  padding-top: 20px;
  padding-bottom: 20px;
`;

const LineBlock = styled(View)`
  height: 5px;
  width: 20%;
  flex: 1;
  background-color: ${(props) => props.bg};
`;
