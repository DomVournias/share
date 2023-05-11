import { Text, View } from "react-native";

import { MaterialIcons } from "@expo/vector-icons";
import React from "react";
import styled from "styled-components/native";

const Name = ({ firstName, lastName, isVerified }) => {
  return (
    <DisplayName>
      {`${firstName} ${lastName}.`}
      {isVerified && (
        <MaterialIcons name="verified" size={20} color="#199de5" />
      )}
    </DisplayName>
  );
};

export default Name;

const DisplayName = styled(Text)`
  font-size: 26px;
  font-weight: 400;
`;
