import { Text, TouchableOpacity } from "react-native";
import { setRegistrationStep, setVehicle } from "context/auth/AuthActions";

import { AuthContext } from "context/auth/AuthReducer";
import InputField from "components/Inputs/InputField";
import { Picker } from "@react-native-picker/picker";
import React from "react";
import { RegistrationSteps } from "screens/Auth/SignUp/Steps/template/RegistrationSteps";
import { carBrands } from "utils/data/carBrands";
import styled from "styled-components/native";
import { useNavigation } from "@react-navigation/native";

const VehicleRegistration = () => {
  const navigation = useNavigation();

  const [vehicleData, setVehicleData] = React.useState({
    hasVehicle: null,
    brand: "",
    year: "",
    color: "",
  });

  const startYear = 1980;
  const endYear = 2023;
  const years = Array.from(
    { length: endYear - startYear + 1 },
    (_, index) => startYear + index
  );

  const { authDispatch } = React.useContext(AuthContext);

  React.useEffect(() => {
    if (
      vehicleData.brand !== "" &&
      vehicleData.year !== "" &&
      vehicleData.color !== ""
    ) {
      setVehicleData((prevData) => ({
        ...prevData,
        hasVehicle: true,
      }));
    }
  }, [vehicleData.brand, vehicleData.year, vehicleData.color]);

  const handleInputChange = (type, value) => {
    console.log(type);
    if (type !== "no-vehicle") {
      setVehicleData((prevData) => ({
        ...prevData,
        [type]: value,
      }));
    } else {
      setVehicleData((prevData) => ({
        ...prevData,
        hasVehicle: false,
        brand: "",
        year: "",
        color: "",
      }));
    }
  };

  const handleInputFocus = (type) => {
    if (vehicleData[type] !== "") {
      return true;
    } else {
      return false;
    }
  };

  const handleNextButton = () => {
    setVehicle(authDispatch, vehicleData);

    setRegistrationStep(authDispatch, { vehicle: true });

    navigation.navigate("TermsAgreement");
  };

  // console.log(vehicleData);
  // console.log("AuthData", authData.data);

  return (
    <RegistrationSteps
      onPressBack={() => navigation.navigate("AgeRegistration")}
      onPressNext={handleNextButton}
      disableBack={false}
      disableNext={vehicleData.hasVehicle === null}
    >
      <Title>Τι όχημα έχεις;</Title>
      <Description>
        Είσαγε το μοντέλο, το έτος και το χρώμα του οχήματος σου, αλλιώς πάτα
        "Δεν έχω όχημα".
      </Description>
      <Brand activeOpacity={0.9} isFocused={handleInputFocus("brand")}>
        <Picker
          selectedValue={vehicleData.brand}
          onValueChange={(value) => handleInputChange("brand", value)}
        >
          <Picker.Item
            key={"unselectable"}
            label="Μάρκα"
            value={0}
            style={{ fontSize: 17, color: "rgba(0,0,0,0.5)" }}
          />
          {carBrands.map((brand) => (
            <Picker.Item key={brand} label={brand} value={brand} />
          ))}
        </Picker>
      </Brand>
      <Year activeOpacity={0.9} isFocused={handleInputFocus("year")}>
        <Picker
          selectedValue={vehicleData.year}
          onValueChange={(value) => handleInputChange("year", value)}
        >
          <Picker.Item
            key={"unselectable"}
            label="Έτος"
            value={0}
            style={{ fontSize: 17, color: "rgba(0,0,0,0.5)" }}
          />
          {years.map((year) => (
            <Picker.Item key={year} label={year.toString()} value={year} />
          ))}
        </Picker>
      </Year>
      <InputField
        value={vehicleData.color}
        placeholder={"Χρώμα"}
        onFocus={() => null}
        onChangeText={(value) => handleInputChange("color", value)}
      />
      <NoVehicleButton
        activeOpacity={0.9}
        onPress={() => handleInputChange("no-vehicle", null)}
      >
        <NoVehicleButtonText>Δεν έχω όχημα</NoVehicleButtonText>
      </NoVehicleButton>
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

const InputBlock = styled(TouchableOpacity)`
  border-radius: 8px;
  font-size: 17px;
  background-color: rgba(0, 0, 0, 0.08);
  border-width: 2px;
  overflow: hidden;
`;

const Brand = styled(InputBlock)`
  border-color: ${(props) =>
    props.isFocused ? "rgba(0,0,0,1)" : "rgba(0,0,0,0.1)"};
`;

const Year = styled(InputBlock)`
  border-color: ${(props) =>
    props.isFocused ? "rgba(0,0,0,1)" : "rgba(0,0,0,0.1)"};
`;

const NoVehicleButton = styled(TouchableOpacity)`
  margin-top: 10px;
  align-self: flex-start;
`;

const NoVehicleButtonText = styled(Text)`
  font-size: 17px;
  font-weight: 500;
`;
