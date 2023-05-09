import React from "react";
import { View, Text } from "react-native";
import styled from "styled-components/native";

const Divider = (props) => (
  <DividerContainer>
    <DividerBlock>
      <DividerText>{props.text}</DividerText>
    </DividerBlock>
  </DividerContainer>
);

export default Divider;

const DividerContainer = styled(View)`
  width: 100%;
  height: 1px;
  text-align: center;
  background-color: rgba(0, 0, 0, 0.3);
  padding: 0 10px;
  align-items: center;
  justify-content: center;
  margin-top: 7px;
  margin-bottom: 7px;
`;

const DividerBlock = styled.View`
  position: absolute;
`;

const DividerText = styled(Text)`
  font-size: 15px;
  color: rgba(0, 0, 0, 0.3);
  background-color: white;
  padding: 0 10px;
  line-height: 16px;
`;
