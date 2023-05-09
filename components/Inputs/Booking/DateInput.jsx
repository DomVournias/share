import React from "react";
import {
  Column,
  DeleteIcon,
  ErrorMessage,
  Field,
  InputField,
  Message,
  RightIcon,
  Row,
  TodayButton,
  TodayButtonText,
} from "./BookingInputs.styled";
import DateTimePickerModal from "react-native-modal-datetime-picker";
import { FontAwesome5 } from "@expo/vector-icons";
import { TouchableWithoutFeedback } from "react-native";
import { format } from "date-fns";
import { useFormikContext } from "formik";

const DateInput = ({ fieldName, placeholder }) => {
  const { handleChange, handleBlur, values, errors, touched, setFieldValue } =
    useFormikContext();

  const [inputDate, setInputDate] = React.useState("");
  const [todayDate, setTodayDate] = React.useState(false);
  const [showModal, setShowModal] = React.useState(false);

  const minimumDate = new Date();

  const handleModal = () => {
    setShowModal(true);
  };

  const handleTodayButton = () => {
    setTodayDate(!todayDate);
    if (!todayDate) {
      const formattedDate = format(minimumDate, "d MMMM, yyyy");
      setFieldValue(fieldName, formattedDate);
    } else {
      setShowModal(true);
    }
  };

  const handleInputDateChange = (selectedDate) => {
    setShowModal(true);
    const formattedDate = format(new Date(selectedDate), "d MMMM, yyyy");
    setFieldValue(fieldName, formattedDate);
    setShowModal(false);
  };

  // console.log(inputDate);

  return (
    <Row direction="row">
      <Column width="30%">
        <TodayButton
          activeOpacity={0.8}
          bg={todayDate ? "black" : "transparent"}
          onPress={handleTodayButton}
        >
          <TodayButtonText color={todayDate ? "white" : "black"}>
            Today
          </TodayButtonText>
        </TodayButton>
      </Column>
      {/* <TouchableWithoutFeedback onPress={handleModal}> */}
      <Column width="70%">
        <Field>
          <InputField
            onChangeText={(selectedDate) => handleInputDateChange(selectedDate)}
            onBlur={handleBlur(fieldName)}
            value={values[fieldName]}
            placeholder={placeholder}
            onFocus={handleModal}
          />
          <RightIcon activeOpacity={0.8} onPress={handleModal}>
            <FontAwesome5 name="calendar-alt" size={20} color="black" />
          </RightIcon>
        </Field>

        <ErrorMessage>
          {touched[fieldName] && errors[fieldName] && (
            <Message>{errors[fieldName]}</Message>
          )}
        </ErrorMessage>
      </Column>
      {/* </TouchableWithoutFeedback> */}
      <DateTimePickerModal
        isVisible={showModal}
        mode="date"
        minimumDate={minimumDate}
        value={values[fieldName]}
        onConfirm={(selectedDate) => handleInputDateChange(selectedDate)}
        onCancel={() => setShowModal(false)}
      />
    </Row>
  );
};

export default DateInput;
