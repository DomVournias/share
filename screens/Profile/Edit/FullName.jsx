import {
  Field,
  Fields,
  Label,
  Paragraph,
  ParagraphBottom,
} from "styles/EditProfile.styles";
import { Keyboard, Pressable } from "react-native";
import { Text, View } from "react-native";
import {
  setTempUserProfileFullName,
  updateCurrentUserProfileFirstName,
  updateCurrentUserProfileFullName,
} from "context/user/UserActions";

import { CardStyleInterpolators } from "@react-navigation/stack";
import { Container } from "styles/Global.styles";
import { CurrentUserProfileContext } from "context/user/UserReducer";
import InputField from "components/Inputs/InputField";
import React from "react";
import SettingsHeader from "components/Headers/SettingsHeader";
import { fi } from "date-fns/locale";
import { useNavigation } from "@react-navigation/native";

const EditProfileFullName = ({ route }) => {
  const navigation = useNavigation();

  const { displayFirstName, displayLastName } = route.params;

  const { currentUserProfileDispatch } = React.useContext(
    CurrentUserProfileContext
  );

  const [fullName, setFullName] = React.useState({
    firstName: displayFirstName,
    lastName: displayLastName,
  });

  React.useLayoutEffect(() => {
    const updateHeaderOptions = () => {
      navigation.setOptions({
        headerMode: "float",
        cardStyleInterpolator: CardStyleInterpolators.forFadeFromBottomAndroid,
        header: () => (
          <SettingsHeader
            onDiscard={discardFullNameUpdate}
            onSave={saveFullNameUpdate}
            title={"Name"}
          />
        ),
      });
    };

    updateHeaderOptions();
  }, [
    navigation,
    fullName,
    displayFirstName,
    displayLastName,
    discardFullNameUpdate,
    saveFullNameUpdate,
  ]);

  const handleFullName = (type, text) => {
    setFullName((prevFullName) => ({
      ...prevFullName,
      [type]: text,
    }));
  };

  const discardFullNameUpdate = () => {
    setFullName((prevFullName) => ({
      ...prevFullName,
      firstName: "",
      lastName: "",
    }));

    navigation.navigate("EditProfile");
  };

  const saveFullNameUpdate = () => {
    const updatedFullName = {
      firstName: fullName.firstName,
      lastName: fullName.lastName,
    };

    setTempUserProfileFullName(currentUserProfileDispatch, updatedFullName);

    navigation.navigate("EditProfile");
  };

  // console.log(`\x1b[42m EditProfileFullName \x1b[0m`, displayFirstName);
  return (
    <Container>
      <Pressable onPress={Keyboard.dismiss}>
        <Fields>
          <Field>
            <Label>First name</Label>
            <InputField
              editable={true}
              isButton={true}
              value={fullName.firstName}
              onFocus={() => null}
              onChangeText={(text) => handleFullName("firstName", text)}
            />
          </Field>
          <Field>
            <Label>Last name</Label>
            <InputField
              editable={true}
              isButton={true}
              value={fullName.lastName}
              onFocus={() => null}
              onChangeText={(text) => handleFullName("lastName", text)}
            />
          </Field>
        </Fields>
        <ParagraphBottom>
          For accurate verification, kindly provide your first and last name
          exactly as on your government ID. Your cooperation ensures account
          security.
        </ParagraphBottom>
      </Pressable>
    </Container>
  );
};

export default EditProfileFullName;
