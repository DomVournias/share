import { Column, Container, Row } from "styles/Global.styles";
import { Image, Text, TextInput, TouchableOpacity, View } from "react-native";

import { CurrentUserProfileContext } from "context/user/UserReducer";
import InputField from "components/Inputs/InputField";
import { Keyboard } from "react-native";
import { MaterialIcons } from "@expo/vector-icons";
import { Pressable } from "react-native";
import React from "react";
import { SafeAreaView } from "react-native";
import { StatusBar } from "react-native";
import { avatar } from "assets/imageLinks";
import styled from "styled-components/native";

const EditProfile = () => {
  const { currentUserProfile } = React.useContext(CurrentUserProfileContext);

  const userData = currentUserProfile.data;

  const [tempUserData, setTempUserData] = React.useState({
    firstName: userData.firstName,
    lastName: userData.lastName,
    bio: userData.bio,
  });

  const handleChangeTempUserData = (type, text) => {
    setTempUserData((prevTempUserData) => ({
      ...prevTempUserData,
      [type]: text,
    }));
  };

  const updateCurrentUserProfileData = () => {};

  console.log(tempUserData);
  return (
    <Container>
      <Pressable onPress={Keyboard.dismiss}>
        <ProfilePhoto>
          <PhotoFrame activeOpacity={0.9}>
            <Photo source={{ uri: avatar }} width={80} height={80} />
            <Icon>
              <MaterialIcons
                name="photo-camera"
                size={18}
                color="rgba(0,0,0,0.9)"
              />
            </Icon>
          </PhotoFrame>
          <TouchableOpacity activeOpacity={0.9}>
            <PhotoText>Change profile photo</PhotoText>
          </TouchableOpacity>
        </ProfilePhoto>
        <Fields>
          <Field>
            <Label>First name</Label>
            <InputField
              value={tempUserData.firstName}
              onFocus={() => null}
              onChangeText={(text) =>
                handleChangeTempUserData("firstName", text)
              }
            />
          </Field>
          <Field>
            <Label>Last name</Label>
            <InputField
              value={tempUserData.lastName}
              onFocus={() => null}
              onChangeText={(text) =>
                handleChangeTempUserData("lastName", text)
              }
            />
          </Field>
          <Field>
            <Label>Bio</Label>
            <InputField
              textArea={true}
              maxLength={150}
              placeholder="Write something about yourself!"
              value={tempUserData.bio}
              onFocus={() => null}
              onChangeText={(text) => handleChangeTempUserData("bio", text)}
            />
          </Field>
        </Fields>
      </Pressable>
    </Container>
  );
};

export default EditProfile;

const ProfilePhoto = styled(View)`
  align-items: center;

  justify-content: center;
  margin-bottom: 20px;
`;

const PhotoFrame = styled(TouchableOpacity)`
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

const PhotoText = styled(Text)`
  font-size: 15px;
  font-weight: 500;
  margin-top: 4px;
  opacity: 0.8;
`;

const Fields = styled(View)`
  width: 100%;
  flex-direction: column;
  gap: 10px;
`;

const Field = styled(View)`
  flex-direction: column;
  width: 100%;
`;

const Label = styled(Text)`
  font-size: 15px;
  font-weight: 400;
  margin-bottom: 4px;
  opacity: 0.6;
`;

// const InputField = styled(View)`
//   background-color: #ccc;
// `;

const Input = styled(TextInput)`
  flex: 1;
  font-size: 17px;
  width: 100%;
  padding: 12px 15px;
`;
