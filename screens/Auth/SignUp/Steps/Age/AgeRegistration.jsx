import { setDateOfBirth, setRegistrationStep } from "context/auth/AuthActions";

import { AuthContext } from "context/auth/AuthReducer";
import DateInputField from "components/Inputs/DateInputField";
import DateTimePickerModal from "react-native-modal-datetime-picker";
import React from "react";
import { RegistrationSteps } from "screens/Auth/SignUp/Steps/template/RegistrationSteps";
import { format } from "date-fns";
import styled from "styled-components/native";
import { useNavigation } from "@react-navigation/native";

const AgeRegistration = () => {
  const navigation = useNavigation();

  const { authData, authDispatch } = React.useContext(AuthContext);

  const [inputDate, setInputDate] = React.useState("");
  const [showModal, setShowModal] = React.useState(false);

  const handleModal = () => {
    // console.log("SHOW MODAL");
    setShowModal(true);
  };

  const today = new Date();
  const minimumDate = new Date("1920-01-01");
  const maximumYear = today.getFullYear() - 17;
  const maximumDate = new Date(maximumYear, today.getMonth(), today.getDate());

  const handleInputDateChange = (selectedDate) => {
    setShowModal(true);
    const formattedDate = format(new Date(selectedDate), "dd/MM/yyyy");
    setInputDate(formattedDate);
    setShowModal(false);
  };

  const handleAgeRegistration = () => {
    setDateOfBirth(authDispatch, inputDate);

    setRegistrationStep(authDispatch, { age: true });

    navigation.navigate("VehicleRegistration");
  };

  return (
    <RegistrationSteps
      onPressBack={() => navigation.navigate("FullNameRegistration")}
      onPressNext={handleAgeRegistration}
      disableBack={false}
      disableNext={inputDate === "" ? true : false}
    >
      <Main>
        <Title>Πόσο χρονών είσαι;</Title>
        <Description>
          Είσαγε την ημερομηνία γέννησης σου όπως ακριβώς καταγράφεται στην
          αστυνομική ταυτότητα.
        </Description>
        <DateInputField
          placeholder="Ημ. γέννησης"
          //   keyboardType="numeric"
          onChangeText={(selectedDate) => handleInputDateChange(selectedDate)}
          value={inputDate}
          onFocus={() => handleModal()}
        />
        <DateTimePickerModal
          minimumDate={minimumDate}
          maximumDate={maximumDate}
          isVisible={showModal}
          mode="date"
          // minimumDate={minimumDate}
          value={inputDate}
          onConfirm={(selectedDate) => handleInputDateChange(selectedDate)}
          onCancel={() => setShowModal(false)}
        />
      </Main>
    </RegistrationSteps>
  );
};

export default AgeRegistration;

const Main = styled.View`
  gap: 15px;
`;

const Title = styled.Text`
  font-size: 22px;
  font-weight: 400;
  /* margin-bottom: 15px; */
  color: black;
`;

const Description = styled.Text`
  font-size: 16px;
  font-weight: 400;
  margin-bottom: 15px;
`;
