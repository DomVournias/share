import React from "react";
import {
  DeleteIcon,
  ErrorMessage,
  Field,
  InputField,
  LeftIcon,
  Message,
  Row,
} from "./BookingInputs.styled";
import { FontAwesome } from "@expo/vector-icons";
import { useFormikContext } from "formik";

const AddressInput = ({ fieldName, placeholder }) => {
  const { handleChange, handleBlur, values, errors, touched, setFieldValue } =
    useFormikContext();

  const handleDeleteInput = (name) => {
    setFieldValue(name, "");
  };
  return (
    <Row direction="column">
      <Field>
        <LeftIcon>
          {fieldName === "from" ? (
            <FontAwesome name="circle" size={15} color="black" />
          ) : (
            <FontAwesome name="circle-o" size={15} color="black" />
          )}
        </LeftIcon>
        <InputField
          onChangeText={handleChange(fieldName)}
          onBlur={handleBlur(fieldName)}
          value={values[fieldName]}
          placeholder={placeholder}
        />

        {values[fieldName] && (
          <DeleteIcon onPress={() => handleDeleteInput(fieldName)}>
            <FontAwesome name="times-circle" size={17} color="black" />
          </DeleteIcon>
        )}
      </Field>

      <ErrorMessage>
        {errors[fieldName] && touched[fieldName] && (
          <Message>{errors[fieldName]}</Message>
        )}
      </ErrorMessage>
    </Row>
  );
};

export default AddressInput;
