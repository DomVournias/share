import { View, Text, TouchableOpacity } from "react-native";
import React, { useContext } from "react";
import styled from "styled-components/native";

import uploadProfileImage from "../../../hooks/photoUpload/manageFileUpload";
import { ActivityIndicator } from "react-native";
import useAuth from "../../../context/auth/useAuth";
import useProfileSettings from "../../../context/user/useProfileSettings";
import { CurrentUserProfileContext } from "../../../context/user/UserReducer";
import { MessageContext } from "../../../context/message/MessageReducer";
import { LoadingContext } from "../../../context/loading/LoadingProvider";
import { AntDesign } from "@expo/vector-icons";

const UploadImageButton = () => {
  const { messageDispatch } = useContext(MessageContext);

  const { currentUserProfile, currentUserProfileDispatch } = useContext(
    CurrentUserProfileContext
  );

  const isUploading = currentUserProfile.settings.profileImage.isUploading;
  const uploadProgress = currentUserProfile.settings.profileImage.progress;
  const finishedUploading =
    currentUserProfile.settings.profileImage.finishedUploading;

  const handleCloudImageUpload = async () => {
    const imgURI = currentUserProfile.settings.profileImage.imgURI;

    await uploadProfileImage(messageDispatch, currentUserProfileDispatch, {
      imgURI,
    });
  };

  // console.log(uploadProgress);
  return (
    <ButtonContainer>
      <ButtonStyled
        onPress={() => handleCloudImageUpload()}
        activeOpacity={0.8}
      >
        {isUploading ? (
          <>
            {uploadProgress === "100.00" ? (
              <AntDesign name="checkcircle" size={18} color="white" />
            ) : (
              <ActivityIndicator size="small" color="#fff" />
            )}

            <TextStyled>{`${uploadProgress}%`}</TextStyled>
          </>
        ) : (
          <TextStyled>Αποθήκευση</TextStyled>
        )}
      </ButtonStyled>
    </ButtonContainer>
  );
};

export default UploadImageButton;

const ButtonContainer = styled.View`
  position: absolute;
  bottom: 20px;
  left: 0;
  right: 0;
  justify-content: center;
  align-items: center;
`;

const ButtonStyled = styled.TouchableOpacity`
  background-color: rgba(0, 0, 0, 0.4);
  padding: 10px 20px;
  border-radius: 8px;
  border: 1px solid rgba(255, 255, 255, 0.3);
  flex-direction: row;
  gap: 5px;
`;

const TextStyled = styled.Text`
  font-size: 18px;
  font-weight: 400;
  color: white;
`;
