import { Keyboard, Pressable, Text, View } from "react-native";

import { CardStyleInterpolators } from "@react-navigation/stack";
import { Container } from "styles/Global.styles";
import { CurrentUserProfileContext } from "context/user/UserReducer";
import { ParagraphTop } from "styles/EditProfile.styles";
import PickerField from "components/Inputs/PickerField";
import React from "react";
import SettingsHeader from "components/Headers/SettingsHeader";
import VehicleRegistrationInputs from "components/Inputs/Vehicle/VehicleRegistrationInputs";
import { carBrands } from "utils/data/carBrands";
import { setTempUserProfileVehicle } from "context/user/UserActions";
import { useNavigation } from "@react-navigation/native";
import { years } from "utils/data/carYears";

const EditProfileVehicle = ({ route }) => {
  const navigation = useNavigation();

  const {
    displayVehicleBrand,
    displayVehicleYear,
    displayVehicleColor,
    displayVehicleHasVehicle,
  } = route.params;

  const { currentUserProfile, currentUserProfileDispatch } = React.useContext(
    CurrentUserProfileContext
  );

  const userData = currentUserProfile.data.vehicle;
  const tempData = currentUserProfile.tempData.vehicle;

  const [vehicle, setVehicle] = React.useState({
    hasVehicle: displayVehicleHasVehicle,
    brand: displayVehicleBrand,
    year: displayVehicleYear,
    color: displayVehicleColor,
  });

  React.useLayoutEffect(() => {
    const updateHeaderOptions = () => {
      navigation.setOptions({
        headerMode: "float",
        cardStyleInterpolator: CardStyleInterpolators.forFadeFromBottomAndroid,
        header: () => (
          <SettingsHeader
            onDiscard={discardVehicleUpdate}
            onSave={saveVehicleUpdate}
            title={"Vehicle"}
          />
        ),
      });
    };

    updateHeaderOptions();
  }, [
    navigation,
    route,
    vehicle,
    userData,
    tempData,
    discardVehicleUpdate,
    saveVehicleUpdate,
  ]);

  const discardVehicleUpdate = () => {
    setVehicle((prevVehicle) => ({
      ...prevVehicle,
      hasVehicle: null,
      brand: "",
      year: "",
      color: "",
    }));
    navigation.navigate("EditProfile");
  };

  const saveVehicleUpdate = () => {
    setTempUserProfileVehicle(currentUserProfileDispatch, vehicle);

    navigation.navigate("EditProfile");
  };
  console.log(`\x1b[42m Vehicle \x1b[0m`, tempData);

  return (
    <Container onPress={Keyboard.dismiss}>
      <ParagraphTop>
        Your vehicle information will be shared with the riders to enhance
        matching and ensure safety measures.
      </ParagraphTop>
      <VehicleRegistrationInputs vehicle={vehicle} setVehicle={setVehicle} />
    </Container>
  );
};

export default EditProfileVehicle;
