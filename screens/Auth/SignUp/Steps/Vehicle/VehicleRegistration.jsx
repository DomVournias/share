import { Text, TouchableOpacity } from "react-native";
import { setRegistrationStep, setVehicle } from "context/auth/AuthActions";

import { AuthContext } from "context/auth/AuthReducer";
import ButtonField from "components/Inputs/ButtonField";
import InputField from "components/Inputs/InputField";
import { Picker } from "@react-native-picker/picker";
import PickerField from "components/Inputs/PickerField";
import React from "react";
import { RegistrationSteps } from "screens/Auth/SignUp/Steps/template/RegistrationSteps";
import VehicleRegistrationInputs from "components/Inputs/Vehicle/VehicleRegistrationInputs";
import { carBrands } from "utils/data/carBrands";
import styled from "styled-components/native";
import { useNavigation } from "@react-navigation/native";

const VehicleRegistration = () => {
  const navigation = useNavigation();

  const [vehicle, setVehicle] = React.useState({
    hasVehicle: null,
    brand: "",
    year: "",
    color: "",
  });

  const { authDispatch } = React.useContext(AuthContext);

  const handleNextButton = () => {
    setVehicle(authDispatch, vehicle);

    setRegistrationStep(authDispatch, { vehicle: true });

    navigation.navigate("TermsAgreement");
  };

  // console.log("AuthData", authData.data);

  return (
    <RegistrationSteps
      onPressBack={() => navigation.navigate("AgeRegistration")}
      onPressNext={handleNextButton}
      disableBack={false}
      disableNext={vehicle.hasVehicle === null}
    >
      <Title>Τι όχημα έχεις;</Title>
      <Description>
        Είσαγε το μοντέλο, το έτος και το χρώμα του οχήματος σου, αλλιώς πάτα
        "Δεν έχω όχημα".
      </Description>

      <VehicleRegistrationInputs vehicle={vehicle} setVehicle={setVehicle} />
    </RegistrationSteps>
  );
};

export default VehicleRegistration;

const Title = styled.Text`
  font-size: 22px;
  font-weight: 400;
  color: black;
`;

const Description = styled.Text`
  font-size: 16px;
  font-weight: 400;
  margin-bottom: 15px;
`;
