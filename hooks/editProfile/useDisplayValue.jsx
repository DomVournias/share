import React from "react";

export const useDisplayValue = (userData, tempData) => {
  const displayFirstName =
    userData.firstName !== tempData.firstName && tempData.firstName !== ""
      ? tempData.firstName
      : userData.firstName;

  const displayLastName =
    userData.lastName !== tempData.lastName && tempData.lastName !== ""
      ? tempData.lastName
      : userData.lastName;

  const displayGenderBinary =
    userData.gender.binary !== tempData.gender.binary &&
    tempData.gender.binary !== ""
      ? tempData.gender.binary
      : userData.gender.binary;

  const displayGenderIsBinary =
    tempData.gender.isBinary !== null &&
    userData.gender.isBinary !== tempData.gender.isBinary
      ? tempData.gender.isBinary
      : userData.gender.isBinary;

  const displayGenderNonBinary =
    userData.gender.nonBinary !== tempData.gender.nonBinary &&
    tempData.gender.nonBinary !== ""
      ? tempData.gender.nonBinary
      : userData.gender.nonBinary;

  const displayBio =
    userData.bio !== tempData.bio && tempData.bio !== ""
      ? tempData.bio
      : userData.bio;

  return {
    displayFirstName,
    displayLastName,
    displayGenderBinary,
    displayGenderIsBinary,
    displayGenderNonBinary,
    displayBio,
  };
};
