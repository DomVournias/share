import { Image, Text, TouchableOpacity, View } from "react-native";

import { CurrentUserProfileContext } from "../../../context/user/UserReducer";
import React from "react";
import { RightButtonStyled } from "../ProfileButtons/index.styled";
import { auth } from "../../../lib/firebase";
import { avatar } from "../../../assets/imageLinks";
import styled from "styled-components/native";
import { useNavigation } from "@react-navigation/native";

const ProfileButton = () => {
  const navigation = useNavigation();
  // const { currentUserProfile } = React.useContext(CurrentUserProfileContext);
  const { currentUserProfile } = React.useContext(CurrentUserProfileContext);

  // const profilePhoto = auth.currentUser.photoURL;

  const handleUserProfileTypeNavigation = () => {
    if (currentUserProfile.userType === "driver") {
      navigation.navigate("Profile", {
        profile: currentUserProfile.data.driver,
      });
    } else if (currentUserProfile.userType === "rider") {
      navigation.navigate("Profile", {
        profile: currentUserProfile.data.rider,
      });
    }
  };

  // console.log("CURRENTprofile==>", currentUserProfile);
  return (
    <Wrapper onPress={handleUserProfileTypeNavigation} activeOpacity={0.9}>
      <Image
        source={{
          uri: currentUserProfile?.data?.profileImage,
        }}
        width={47}
        height={47}
      />
    </Wrapper>
  );
};

export default ProfileButton;

const Wrapper = styled.TouchableOpacity`
  border-radius: 50px;
  overflow: hidden;
  border: 2px solid #000;
`;
