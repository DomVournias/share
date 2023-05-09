import { View, Text } from "react-native";
import React from "react";
import styled from "styled-components/native";

const Bio = ({ bio }) => {
  return (
    <Container>
      <BioText bio={bio}>
        {bio === "" ? "Write something about yourself!" : bio}
      </BioText>
    </Container>
  );
};

export default Bio;

const Container = styled(View)`
  margin-top: 5px;
  width: 80%;
  text-align: center;
`;
const BioText = styled(Text)`
  font-size: 14.8px;
  font-weight: 400;
  opacity: ${(props) => (props.bio === "" ? 0.5 : 0.9)};
  text-align: center;
  font-style: ${(props) => (props.bio === "" ? "italic" : "normal")};
`;
