import { Text, View } from "react-native";

import React from "react";
import { StatusBar } from "react-native";
import styled from "styled-components/native";

const Avatar = ({ image }) => {
  return (
    <Container>
      <ProfileImage
        source={{
          uri: image,
        }}
      />
    </Container>
  );
};

export default Avatar;

const Container = styled.View`
  justify-content: center;
  align-items: center;
  background-color: #fff;
  overflow: hidden;
  /* padding-top: ${`${StatusBar.currentHeight * 2.5}px`}; */
`;

const ProfileImage = styled.Image`
  width: 100px;
  height: 100px;
  border-radius: 50px;
`;
