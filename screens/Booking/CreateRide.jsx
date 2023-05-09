import { View, Text, TouchableOpacity, Button } from "react-native";
import React from "react";
import styled from "styled-components/native";
import * as yup from "yup";
import { Formik } from "formik";
import AddressInput from "../../components/Inputs/Booking/AddressInput";
import DateInput from "../../components/Inputs/Booking/DateInput";
import {
  SubmitButton,
  SubmitButtonText,
} from "../../components/Inputs/Booking/BookingInputs.styled";

const CreateRide = () => {
  const initialValues = {
    from: "",
    to: "",
    date: "",
    time: "",
    seats: "",
  };

  const validationSchema = yup.object().shape({
    from: yup
      .string()
      .required("The address you are traveling from is required"),
    to: yup.string().required("The address you are traveling to is required"),
    date: yup.date().required("The date your are traveling is required"),
    time: yup.string().required("The time your are traveling is required"),
    seats: yup
      .number()
      .typeError("Number of seats must be a number")
      .min(1, "Number of seats must be at least 1")
      .max(10, "Number of seats cannot be more than 10")
      .required("Number of seats is required"),
  });

  const handleFormSubmit = (values) => {
    // console.log("FORM DATA", values);
  };

  return (
    <Container>
      <Formik
        initialValues={initialValues}
        validationSchema={validationSchema}
        onSubmit={handleFormSubmit}
      >
        {({ values }) => (
          <View>
            <AddressInput fieldName="from" placeholder={"Leaving from"} />
            <AddressInput fieldName="to" placeholder={"Going to"} />
            <DateInput fieldName="date" placeholder={"Date"} />

            <SubmitButton onPress={() => handleFormSubmit(values)}>
              <SubmitButtonText>Submit</SubmitButtonText>
            </SubmitButton>
          </View>
        )}
      </Formik>
    </Container>
  );
};

export default CreateRide;

const Container = styled(View)`
  padding: 20px;
  gap: 10px;
`;
