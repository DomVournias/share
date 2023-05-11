import { Column, Container, Row } from "styles/Global.styles";
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
import { useNavigation } from "@react-navigation/native";

const EditProfile = ({ route }) => {
  const navigation = useNavigation();

  const { title } = route.params;

  React.useLayoutEffect(() => {
    const updateHeaderOptions = () => {
      navigation.setOptions({
        headerMode: "float",
        cardStyleInterpolator: CardStyleInterpolators.forFadeFromBottomAndroid,
        header: () => (
          <SettingsHeader
            onDiscard={discardSettingsUpdates}
            onSave={saveSettingsUpdates}
            title={title}
          />
        ),
      });
    };

    updateHeaderOptions();
  }, [navigation, discardSettingsUpdates, saveSettingsUpdates]);

  // const { currentUserProfile } = React.useContext(CurrentUserProfileContext);

  // const userData = currentUserProfile.data;

  const { profileImage, firstName, lastName, gender, bio, vehicle } =
    route.params;

  // const [tempUserData, setTempUserData] = React.useState({
  //   firstName: userData.firstName,
  //   lastName: userData.lastName,
  //   bio: userData.bio,
  //   gender: {
  //     binary: userData.gender.binary,
  //     isBinary: userData.gender.isBinary,
  //     nonBinary: userData.gender.nonBinary,
  //   },
  //   vehicle: {
  //     brand: userData.vehicle.brand,
  //     color: userData.vehicle.color,
  //     hasVehicle: userData.vehicle.hasVehicle,
  //     photo: userData.vehicle.photo,
  //     year: userData.vehicle.year,
  //   },
  // });

  // const handleChangeTempUserData = (type, text) => {
  //   setTempUserData((prevTempUserData) => ({
  //     ...prevTempUserData,
  //     [type]: text,
  //   }));
  // };

  const discardSettingsUpdates = () => {};
  const saveSettingsUpdates = () => {};

  // console.log(userData);
  console.log(`\x1b[46m Profile \x1b[0m`, route);

  return (
    <Container>
      <Pressable onPress={Keyboard.dismiss}>
        <ProfilePhoto>
          <PhotoFrame activeOpacity={0.9}>
            <Photo source={{ uri: profileImage }} width={80} height={80} />
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
          <Field></Field>
          <Field>
            <Label>Full name</Label>
            {/* <InputField
              editable={false}
              isButton={true}
              value={tempUserData.firstName + " " + tempUserData.lastName}
              onFocus={() => null}
              onChangeText={(text) =>
                handleChangeTempUserData("firstName", text)
              }
            /> */}
            <ButtonField
              text={firstName + " " + lastName}
              onPress={() =>
                navigation.navigate("EditProfileFullName", {
                  params: { title: "Name" },
                })
              }
            />
          </Field>

          <Field>
            <Label>Gender</Label>
            <ButtonField
              text={gender.isBinary ? gender.binary : gender.nonBinary}
              onPress={() =>
                navigation.navigate("EditProfileGender", {
                  params: { title: "Name" },
                })
              }
            />
            {/* <InputField
              value={
                tempUserData.gender.isBinary
                  ? tempUserData.gender.binary
                  : tempUserData.gender.nonBinary
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
              text={bio === "" ? "Write something about yourself" : bio}
              onPress={() =>
                navigation.navigate("EditProfileBio", {
                  params: { title: "Name" },
                })
              }
            />
            {/* <InputField
              textArea={true}
              hasCounter={false}
              maxLength={150}
              placeholder="Write something about yourself!"
              value={tempUserData.bio}
              onFocus={() => null}
              onChangeText={(text) => handleChangeTempUserData("bio", text)}
            /> */}
          </Field>
          <Field>
            <Label>Vehicle</Label>
            <ButtonField
              text={
                vehicle.hasVehicle
                  ? `${vehicle.brand} ${vehicle.year} - ${vehicle.color}`
                  : "No vehicle"
              }
              onPress={() =>
                navigation.navigate("EditProfileVehicle", {
                  params: { title: "Name" },
                })
              }
            />
            {/* <InputField
              value={
                tempUserData.vehicle.hasVehicle
                  ? `${tempUserData.vehicle.brand} ${tempUserData.vehicle.year} - ${tempUserData.vehicle.color}`
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
