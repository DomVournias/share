import { Text, TouchableOpacity, View } from "react-native";

import InputField from "../InputField";
import PickerField from "../PickerField";
import React from "react";
import { carBrands } from "utils/data/carBrands";
import styled from "styled-components";
import { years } from "utils/data/carYears";

const VehicleRegistrationInputs = ({ vehicle, setVehicle }) => {
  React.useEffect(() => {
    if (vehicle.brand !== "" && vehicle.year !== "" && vehicle.color !== "") {
      setVehicle((prevVehicle) => ({
        ...prevVehicle,
        hasVehicle: true,
      }));
    }
  }, [vehicle.brand, vehicle.year, vehicle.color]);

  const handleInputChange = (type, value) => {
    if (type !== "no-vehicle") {
      setVehicle((prevVehicle) => ({
        ...prevVehicle,
        [type]: value,
      }));
    } else {
      setVehicle((prevVehicle) => ({
        ...prevVehicle,
        hasVehicle: false,
        brand: "",
        year: "",
        color: "",
      }));
    }
  };
  return (
    <Fields>
      <PickerField
        toString={false}
        value={vehicle.brand}
        onValueChange={(value) => handleInputChange("brand", value)}
        label="Μάρκα"
        list={carBrands}
      />

      <PickerField
        toString={true}
        value={vehicle.year}
        onValueChange={(value) => handleInputChange("year", value)}
        label="Έτος"
        list={years}
      />

      <InputField
        stickyBorder={vehicle.color !== "" ? true : undefined}
        value={vehicle.color}
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
    </Fields>
  );
};

export default VehicleRegistrationInputs;

const Fields = styled(View)`
  gap: 20px;
`;

const NoVehicleButton = styled(TouchableOpacity)`
  margin-top: 10px;
  align-self: flex-start;
`;

const NoVehicleButtonText = styled(Text)`
  font-size: 17px;
  font-weight: 500;
`;
