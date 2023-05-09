import {
  SET_ACCEPTS_TERMS,
  SET_AUTH_DATA,
  SET_DATE_OF_BIRTH,
  SET_EMAIL,
  SET_FIRST_NAME,
  SET_GENDER,
  SET_LAST_NAME,
  SET_PHONE_NUMBER,
  SET_PROFILE_IMAGE,
  SET_STEP,
  SET_VEHICLE,
  SET_VERIFICATION_CODE,
  SET_VERIFICATION_ID,
} from "./types";

export const setAuthPhoneNumber = (authDispatch, phoneNumber) => {
  authDispatch({
    type: SET_PHONE_NUMBER,
    payload: phoneNumber,
  });
};

export const setRegistrationStep = (authDispatch, progress) => {
  // console.log("PROGRESS ACTION", progress);
  authDispatch({
    type: SET_STEP,
    payload: { step: progress },
  });
};

export const setAuthEmail = (authDispatch, email) => {
  authDispatch({
    type: SET_EMAIL,
    payload: email,
  });
};

export const setAuthFirstName = (authDispatch, firstName) => {
  authDispatch({
    type: SET_FIRST_NAME,
    payload: firstName,
  });
};

export const setAuthLastName = (authDispatch, lastName) => {
  authDispatch({
    type: SET_LAST_NAME,
    payload: lastName,
  });
};

export const setAuthGender = (authDispatch, data) => {
  authDispatch({
    type: SET_GENDER,
    payload: { gender: data },
  });
};

export const setDateOfBirth = (authDispatch, date) => {
  authDispatch({
    type: SET_DATE_OF_BIRTH,
    payload: date,
  });
};

export const setVehicle = (authDispatch, data) => {
  authDispatch({
    type: SET_VEHICLE,
    payload: { vehicle: data },
  });
};

export const setAutProfileImage = (authDispatch, profileImage) => {
  authDispatch({
    type: SET_PROFILE_IMAGE,
    payload: profileImage,
  });
};

export const setAuthAcceptsTerms = (authDispatch, acceptsTerms) => {
  authDispatch({
    type: SET_ACCEPTS_TERMS,
    payload: acceptsTerms,
  });
};

export const setAuthVerificationId = (authDispatch, verificationId) => {
  authDispatch({
    type: SET_VERIFICATION_ID,
    payload: verificationId,
  });
};

export const setAuthVerificationCode = (authDispatch, verificationCode) => {
  authDispatch({
    type: SET_VERIFICATION_CODE,
    payload: verificationCode,
  });
};
