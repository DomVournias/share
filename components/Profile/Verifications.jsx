import { View, Text } from "react-native";
import React from "react";
import styled from "styled-components/native";
import { Ionicons } from "@expo/vector-icons";
import { FontAwesome } from "@expo/vector-icons";
import { AntDesign } from "@expo/vector-icons";
import { MaterialIcons } from "@expo/vector-icons";
import { Feather } from "@expo/vector-icons";

const Verifications = ({ verifications }) => {
  const handleVerifications = (type) => {
    if (verifications[type] === true) {
      return "Verified";
    } else {
      return "Pending";
    }
  };

  return (
    <Container>
      <Row>
        <Column>
          <Icon>
            <MaterialIcons name="alternate-email" size={18} color="black" />
          </Icon>
          <Label>Email</Label>
        </Column>
        <Verification>{handleVerifications("email")}</Verification>
      </Row>
      <Row>
        <Column>
          <Icon>
            <Feather name="hash" size={18} color="black" />
          </Icon>
          <Label>Phone number</Label>
        </Column>
        <Verification>{handleVerifications("phone")}</Verification>
      </Row>
      <Row>
        <Column>
          <Icon>
            <AntDesign name="creditcard" size={18} color="black" />
          </Icon>
          <Label>Payment details</Label>
        </Column>
        <Verification>
          {handleVerifications("paymentVerification")}
        </Verification>
      </Row>
      <Row>
        <Column>
          <Icon>
            <AntDesign name="idcard" size={18} color="black" />
          </Icon>
          <Label>Government issued ID</Label>
        </Column>
        <Verification>{handleVerifications("governmentId")}</Verification>
      </Row>
    </Container>
  );
};

export default Verifications;

const Container = styled(View)`
  padding: 15px 30px;
  margin-top: 3px;
  gap: 10px;
  background-color: white;
`;

const Column = styled(View)`
  flex-direction: row;
  align-items: center;
  gap: 10px;
`;

const Row = styled(View)`
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
`;

const Icon = styled(View)`
  opacity: 0.4;
`;

const Label = styled(Text)`
  font-weight: 500;
  opacity: 0.4;
`;

const Verification = styled(Text)`
  font-weight: 500;
  opacity: 0.9;
`;
