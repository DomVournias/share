import { Paragraph, ParagraphTop } from "styles/EditProfile.styles";
import { Text, View } from "react-native";

import { CardStyleInterpolators } from "@react-navigation/stack";
import { Container } from "styles/Global.styles";
import { CurrentUserProfileContext } from "context/user/UserReducer";
import GenderInputs from "components/Inputs/Gender/GenderInputs";
import React from "react";
import SettingsHeader from "components/Headers/SettingsHeader";
import { setTempUserProfileGender } from "context/user/UserActions";
import { useNavigation } from "@react-navigation/native";

const EditProfileGender = ({ route }) => {
  const navigation = useNavigation();

  const { displayGenderBinary, displayGenderIsBinary, displayGenderNonBinary } =
    route.params;

  const { currentUserProfile, currentUserProfileDispatch } = React.useContext(
    CurrentUserProfileContext
  );

  const userData = currentUserProfile.data.gender;
  const tempData = currentUserProfile.tempData.gender;

  const [gender, setGender] = React.useState({
    isBinary: displayGenderIsBinary,
    binary: displayGenderBinary,
    nonBinary: displayGenderNonBinary,
  });

  React.useLayoutEffect(() => {
    const updateHeaderOptions = () => {
      navigation.setOptions({
        headerMode: "float",
        cardStyleInterpolator: CardStyleInterpolators.forFadeFromBottomAndroid,
        header: () => (
          <SettingsHeader
            onDiscard={discardGenderUpdate}
            onSave={saveGenderUpdate}
            title={"Gender"}
          />
        ),
      });
    };

    updateHeaderOptions();
  }, [
    navigation,
    gender,
    userData,
    tempData,
    gender,
    displayGenderIsBinary,
    displayGenderBinary,
    displayGenderNonBinary,
    discardGenderUpdate,
    saveGenderUpdate,
  ]);

  const discardGenderUpdate = () => {
    setGender((prevGender) => ({
      ...prevGender,
      isBinary: "",
      binary: null,
      nonBinary: "",
    }));
    navigation.navigate("EditProfile");
  };

  const saveGenderUpdate = () => {
    const updatedGender = {
      isBinary: gender.isBinary,
      binary: gender.binary,
      nonBinary: gender.nonBinary,
    };

    setTempUserProfileGender(currentUserProfileDispatch, updatedGender);

    navigation.navigate("EditProfile");
  };
  // console.log(`\x1b[42m Gender - Userdata \x1b[0m`, userData);
  // console.log(`\x1b[45m Gender - Tempdata \x1b[0m`, tempData);
  // console.log(`\x1b[44m Gender - Gender \x1b[0m`, gender);

  return (
    <Container>
      <ParagraphTop>
        Your gender information will not be shared publicly and will only be
        used as a search filter for user preferences.
      </ParagraphTop>
      <GenderInputs
        mode={"settings"}
        tempGender={gender}
        setTempGender={setGender}
      />
    </Container>
  );
};

export default EditProfileGender;
