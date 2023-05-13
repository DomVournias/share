import { Column, Container, Row } from "styles/Global.styles";
import {
  Field,
  Fields,
  Icon,
  Label,
  Photo,
  PhotoFrame,
  PhotoText,
  ProfilePhoto,
} from "styles/EditProfile.styles";
import { Image, Text, TextInput, TouchableOpacity, View } from "react-native";

import ButtonField from "components/Inputs/ButtonField";
import { CardStyleInterpolators } from "@react-navigation/stack";
import { CurrentUserProfileContext } from "context/user/UserReducer";
import InputField from "components/Inputs/InputField";
import { Keyboard } from "react-native";
import { MaterialIcons } from "@expo/vector-icons";
import { Pressable } from "react-native";
import React from "react";
import { SafeAreaView } from "react-native";
import SettingsHeader from "components/Headers/SettingsHeader";
import { StatusBar } from "react-native";
import { avatar } from "assets/imageLinks";
import styled from "styled-components/native";
import { useDisplayValue } from "hooks/editProfile/useDisplayValue";
import { useNavigation } from "@react-navigation/native";

const EditProfile = ({ route }) => {
  const navigation = useNavigation();

  React.useLayoutEffect(() => {
    const updateHeaderOptions = () => {
      navigation.setOptions({
        headerMode: "float",
        cardStyleInterpolator: CardStyleInterpolators.forFadeFromBottomAndroid,
        header: () => (
          <SettingsHeader
            onDiscard={discardSettingsUpdates}
            onSave={saveSettingsUpdates}
            title={"Edit profile"}
          />
        ),
      });
    };

    updateHeaderOptions();
  }, [
    navigation,
    route,
    displayFirstName,
    displayLastName,
    discardSettingsUpdates,
    saveSettingsUpdates,
  ]);

  const { currentUserProfile } = React.useContext(CurrentUserProfileContext);

  const userData = currentUserProfile.data;
  const tempData = currentUserProfile.tempData;

  const discardSettingsUpdates = () => {};
  const saveSettingsUpdates = () => {};

  const displayFirstName = useDisplayValue(
    tempData.firstName,
    userData.firstName
  );

  const displayLastName = useDisplayValue(tempData.lastName, userData.lastName);

  return (
    <Container>
      <Pressable onPress={Keyboard.dismiss}>
        <ProfilePhoto>
          <PhotoFrame activeOpacity={0.9}>
            <Photo
              source={{ uri: userData.profileImage }}
              width={80}
              height={80}
            />
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
            <Label>Full name</Label>

            <ButtonField
              text={displayFirstName + " " + displayLastName}
              onPress={() =>
                navigation.navigate("EditProfileFullName", {
                  displayFirstName,
                  displayLastName,
                })
              }
            />
          </Field>

          <Field>
            <Label>Gender</Label>
            <ButtonField
              text={
                userData.gender.isBinary
                  ? userData.gender.binary
                  : userData.gender.nonBinary
              }
              onPress={() => navigation.navigate("EditProfileGender")}
            />
            {/* <InputField
              value={
                userData.gender.isBinary
                  ? userData.gender.binary
                  : userData.gender.nonBinary
              }
              onFocus={() => null}
              onChangeText={(text) =>
                handleChangeTempUserData("lastName", text)
              }
            /> */}
          </Field>
          <Field>
            <Label>Bio</Label>
            <ButtonField
              text={
                userData.bio === ""
                  ? "Write something about yourself"
                  : userData.bio
              }
              onPress={() => navigation.navigate("EditProfileBio")}
            />
            {/* <InputField
              textArea={true}
              hasCounter={false}
              maxLength={150}
              placeholder="Write something about yourself!"
              value={userData.bio}
              onFocus={() => null}
              onChangeText={(text) => handleChangeTempUserData("bio", text)}
            /> */}
          </Field>
          <Field>
            <Label>Vehicle</Label>
            <ButtonField
              text={
                userData.vehicle.hasVehicle
                  ? `${userData.vehicle.brand} ${userData.vehicle.year} - ${userData.vehicle.color}`
                  : "No vehicle"
              }
              onPress={() => navigation.navigate("EditProfileVehicle")}
            />
            {/* <InputField
              value={
                userData.vehicle.hasVehicle
                  ? `${userData.vehicle.brand} ${userData.vehicle.year} - ${userData.vehicle.color}`
                  : "No vehicle"
              }
              onFocus={() => null}
              onChangeText={(text) =>
                handleChangeTempUserData("lastName", text)
              }
            /> */}
          </Field>
        </Fields>
      </Pressable>
    </Container>
  );
};

export default EditProfile;
