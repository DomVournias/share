import React, { useContext } from "react";
import { Entypo } from "@expo/vector-icons";
import { RightButtonStyled } from "./index.styled";
import * as ImagePicker from "expo-image-picker";
import { ActivityIndicator } from "react-native";
import uploadImageFromDevice from "../../../hooks/photoUpload/uploadImageFromDevice";
import useProfileSettings from "../../../context/user/useProfileSettings";
import { updateCurrentUserProfileImage } from "../../../context/user/UserActions";
import { CurrentUserProfileContext } from "../../../context/user/UserReducer";

const EditImageButton = () => {
  const { settings, setSettings } = useProfileSettings();

  const { currentUserProfile, currentUserProfileDispatch } = useContext(
    CurrentUserProfileContext
  );

  const isImageUploading = currentUserProfile.settings.isUploading;

  const handleLocalImageUpload = async () => {
    const fileURI = await uploadImageFromDevice();

    if (fileURI) {
      updateCurrentUserProfileImage(currentUserProfileDispatch, {
        imgURI: fileURI,
        isSaved: false,
      });
    }
  };

  return (
    <RightButtonStyled
      onPress={() => handleLocalImageUpload()}
      activeOpacity={0.8}
    >
      {!isImageUploading ? (
        <Entypo name="camera" size={17} color="white" />
      ) : (
        <ActivityIndicator size={"small"} color="white" />
      )}
    </RightButtonStyled>
  );
};

export default EditImageButton;
