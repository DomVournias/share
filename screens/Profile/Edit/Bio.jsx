import { Text, View } from "react-native";

import { CardStyleInterpolators } from "@react-navigation/stack";
import { Container } from "styles/Global.styles";
import { CurrentUserProfileContext } from "context/user/UserReducer";
import InputField from "components/Inputs/InputField";
import React from "react";
import SettingsHeader from "components/Headers/SettingsHeader";
import { setTempUserProfileBio } from "context/user/UserActions";
import { useNavigation } from "@react-navigation/native";

const EditProfileBio = ({ route }) => {
  const navigation = useNavigation();

  const { displayBio } = route.params;

  const { currentUserProfileDispatch } = React.useContext(
    CurrentUserProfileContext
  );

  const [bio, setBio] = React.useState(displayBio);

  React.useLayoutEffect(() => {
    const updateHeaderOptions = () => {
      navigation.setOptions({
        headerMode: "float",
        cardStyleInterpolator: CardStyleInterpolators.forFadeFromBottomAndroid,
        header: () => (
          <SettingsHeader
            onDiscard={discardBioUpdate}
            onSave={saveBioUpdate}
            title={"Bio"}
          />
        ),
      });
    };

    updateHeaderOptions();
  }, [navigation, route, displayBio, bio, discardBioUpdate, saveBioUpdate]);

  const handleChangeBio = (text) => {
    const capitalizedBio = text.charAt(0).toUpperCase() + text.slice(1);
    setBio(capitalizedBio);
  };

  const discardBioUpdate = () => {
    setBio("");
    navigation.navigate("EditProfile");
  };

  const saveBioUpdate = () => {
    setTempUserProfileBio(currentUserProfileDispatch, { bio });
    navigation.navigate("EditProfile");
  };

  // console.log(`\x1b[46m Bio \x1b[0m`, bio);

  return (
    <Container>
      <InputField
        placeholder="Write something about yourself"
        textArea={true}
        value={bio}
        onFocus={() => null}
        maxLength={150}
        hasCounter={true}
        onChangeText={(text) => handleChangeBio(text)}
      />
    </Container>
  );
};

export default EditProfileBio;
