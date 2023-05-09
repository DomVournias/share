import React from "react";
import { StyleSheet, View, Text, TextInput, Button } from "react-native";
import DateTimePickerModal from "react-native-modal-datetime-picker";
import { Formik } from "formik";
import { Picker } from "@react-native-picker/picker";
import * as yup from "yup";

const initialValues = {
  from: "",
  to: "",
  date: "",
  time: "",
  seats: "",
};

const validationSchema = yup.object().shape({
  from: yup.string().required("From address is required"),
  to: yup.string().required("To address is required"),
  date: yup.date().required("Date is required"),
  time: yup.string().required("Time is required"),
  seats: yup
    .number()
    .typeError("Number of seats must be a number")
    .min(1, "Number of seats must be at least 1")
    .max(10, "Number of seats cannot be more than 10")
    .required("Number of seats is required"),
});

const TestForm = () => {
  const [isDatePickerVisible, setDatePickerVisibility] = React.useState(false);
  const [isTimePickerVisible, setTimePickerVisibility] = React.useState(false);

  const showDatePicker = () => {
    setDatePickerVisibility(true);
  };

  const hideDatePicker = () => {
    setDatePickerVisibility(false);
  };

  const handleDateConfirm = (date) => {
    hideDatePicker();
    setFieldValue("date", date.toDateString());
  };

  const showTimePicker = () => {
    setTimePickerVisibility(true);
  };

  const hideTimePicker = () => {
    setTimePickerVisibility(false);
  };

  const handleTimeConfirm = (time) => {
    hideTimePicker();
    setFieldValue("time", time.toLocaleTimeString());
  };

  return (
    <View>
      <Formik
        initialValues={initialValues}
        validationSchema={validationSchema}
        onSubmit={(values) => console.log(values)}
      >
        {({
          handleChange,
          handleBlur,
          handleSubmit,
          values,
          errors,
          touched,
        }) => (
          <View>
            <Text>From Address</Text>
            <TextInput
              onChangeText={handleChange("from")}
              onBlur={handleBlur("from")}
              value={values.from}
              placeholder="From address"
            />
            {touched.from && errors.from && (
              <Text style={{ color: "red" }}>{errors.from}</Text>
            )}

            <Text>To Address</Text>
            <TextInput
              onChangeText={handleChange("to")}
              onBlur={handleBlur("to")}
              value={values.to}
              placeholder="To address"
            />
            {touched.to && errors.to && (
              <Text style={{ color: "red" }}>{errors.to}</Text>
            )}

            <Text>Date</Text>
            <TextInput
              onChangeText={handleChange("date")}
              onBlur={handleBlur("date")}
              value={values.date}
              placeholder="Date"
            />
            {touched.date && errors.date && (
              <Text style={{ color: "red" }}>{errors.date}</Text>
            )}

            <Text>Time</Text>
            <TextInput
              onChangeText={handleChange("time")}
              onBlur={handleBlur("time")}
              value={values.time}
              placeholder="Time"
            />
            <Button
              title={values.time ? values.time : "Select time"}
              onPress={showTimePicker}
            />
            <DateTimePickerModal
              isVisible={isTimePickerVisible}
              mode="time"
              onConfirm={handleTimeConfirm}
              onCancel={hideTimePicker}
            />
            {touched.time && errors.time && (
              <Text style={{ color: "red" }}>{errors.time}</Text>
            )}

            <Text>Number of Seats</Text>
            <TextInput
              onChangeText={handleChange("seats")}
              onBlur={handleBlur("seats")}
              value={values.seats}
              keyboardType="numeric"
              placeholder="Number of seats"
            />
            {touched.seats && errors.seats && (
              <Text style={{ color: "red" }}>{errors.seats}</Text>
            )}

            <Button title="Submit" onPress={handleSubmit}></Button>
          </View>
        )}
      </Formik>
    </View>
  );
};

const styles = StyleSheet.create({
  input: {
    borderWidth: 1,
    borderColor: "gray",
    borderRadius: 5,
    padding: 10,
    marginBottom: 10,
  },
  label: {
    marginBottom: 5,
  },
});

export default TestForm;

// const handleInputChange = (text, name) => {
//     if (name === "from") {
//       setFormData((prevFormData) => ({
//         ...prevFormData,
//         from: text,
//       }));

//       if (text.length >= 3) {
//         setShowDeleteIcon((prevFormData) => ({
//           ...prevFormData,
//           input: "from",
//           show: true,
//         }));
//       } else {
//         setShowDeleteIcon((prevFormData) => ({
//           ...prevFormData,
//           input: "from",
//           show: false,
//         }));
//       }
//     } else if (name === "to") {
//       setFormData((prevFormData) => ({
//         ...prevFormData,
//         to: text,
//       }));

//       if (text.length >= 3) {
//         setShowDeleteIcon((prevFormData) => ({
//           ...prevFormData,
//           input: "to",
//           show: true,
//         }));
//       } else {
//         setShowDeleteIcon((prevFormData) => ({
//           ...prevFormData,
//           input: "to",
//           show: false,
//         }));
//       }
//     }
//   };
