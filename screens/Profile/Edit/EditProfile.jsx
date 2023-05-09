import { Column, Container, Row } from "styles/Global.styles";
import { Image, Text, TextInput, View } from "react-native";

import { MaterialIcons } from "@expo/vector-icons";
import React from "react";
import { avatar } from "assets/imageLinks";
import styled from "styled-components/native";

const EditProfile = () => {
  return (
    <Container>
      <ProfilePhoto>
        <PhotoFrame>
          <Photo source={{ uri: avatar }} width={60} height={60} />
          <Icon>
            <MaterialIcons
              name="photo-camera"
              size={15}
              color="rgba(0,0,0,0.9)"
            />
          </Icon>
        </PhotoFrame>
        <Field>
          <Label>First name</Label>
          <InputField>
            <Input value="name" />
          </InputField>
        </Field>
      </ProfilePhoto>
    </Container>
  );
};

export default EditProfile;

const ProfilePhoto = styled(View)`
  align-items: center;
  justify-content: center;
`;

const PhotoFrame = styled(View)`
  position: relative;
`;

const Photo = styled(Image)`
  border-radius: 50px;
`;

const Icon = styled(View)`
  position: absolute;
  right: -2px;
  bottom: -2px;
  background-color: white;
  padding: 3px;
  border-radius: 50px;
`;

const Field = styled(View)`
  flex-direction: column;
  width: 100%;
`;

const Label = styled(Text)``;

const InputField = styled(View)`
  background-color: #ccc;
`;

const Input = styled(TextInput)`
  flex: 1;
  font-size: 17px;
  width: 100%;
  padding: 12px 15px;
`;
