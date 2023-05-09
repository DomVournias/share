import {
  Button,
  FlatList,
  Image,
  SafeAreaView,
  Text,
  TouchableOpacity,
  View,
} from "react-native";
import {
  EditImageButton,
  GoBackButton,
  UploadImageButton,
} from "../components/Buttons/ProfileButtons";
import React, { useContext, useLayoutEffect } from "react";

import { AntDesign } from "@expo/vector-icons";
import AsyncStorage from "@react-native-async-storage/async-storage";
import { AuthContext } from "../context/auth/AuthReducer";
import { CurrentUserProfileContext } from "../context/user/UserReducer";
import { Dimensions } from "react-native";
import { Feather } from "@expo/vector-icons";
import { Ionicons } from "@expo/vector-icons";
import { MaterialIcons } from "@expo/vector-icons";
import { Octicons } from "@expo/vector-icons";
import { UPDATE_CURRENT_USER_PROFILE_FIRST_NAME } from "../context/user/types";
import { auth } from "../lib/firebase";
import { signOut } from "firebase/auth/react-native";
import { signOutCurrentUser } from "../context/auth/AuthFunctions";
import styled from "styled-components/native";
import useAuth from "../context/auth/useAuth";
import { useEffect } from "react";
import { useNavigation } from "@react-navigation/native";
import useProfileSettings from "../context/user/useProfileSettings";
import { useState } from "react";

const settingsData = [
  {
    id: 123,
    title: "Λογαριασμός",
    description: "Ονομα χρήστη, Κωδικός...",
    icon: <AntDesign name="key" size={22} color="black" />,
    link: "",
  },
  {
    id: 234,
    title: "Προφίλ",
    description: "Εικόνες, Στοιχεία...",
    icon: <Ionicons name="md-person-outline" size={22} color="black" />,
    link: "",
  },
  {
    id: 345,
    title: "Δεδομένα",
    description: "Ταξίδια, Μίλια, Πόλεις...",
    icon: <MaterialIcons name="graphic-eq" size={22} color="black" />,
    link: "",
  },
  {
    id: 456,
    title: "Ταυτοποίηση",
    description: "Επαλήθευση στοιχείων...",
    icon: <Octicons name="verified" size={22} color="black" />,
    link: "",
  },
];

const SettingsOld = () => {
  const navigation = useNavigation();

  const { currentUserProfile, currentUserProfileDispatch } = useContext(
    CurrentUserProfileContext
  );

  const screenWidth = Dimensions.get("window").width;
  const [previewImage, setPreviewImage] = useState();
  const [showSaveButton, setShowSaveButton] = useState(false);

  const isProfileImageSaved = currentUserProfile.settings.profileImage.isSaved;

  useLayoutEffect(() => {
    navigation.setOptions({
      headerShown: true,
      headerStatusBarHeight: 0,
      headerTransparent: true,
      title: "",
      animationTypeForReplace: "",
      animation: "slide_from_bottom",
      headerShadowVisible: false,
      headerStyle: {
        backgroundColor: "transparent",
      },
      headerLeft: () => <GoBackButton />,
      headerRight: () => <EditImageButton />,
    });
  }, [navigation]);

  useEffect(() => {
    const editedImage = currentUserProfile.settings.profileImage.imgURI;
    const defaultImage = currentUserProfile.data.profileImage;

    if (editedImage !== "") {
      setPreviewImage(editedImage);
      setShowSaveButton(true);
    } else {
      setPreviewImage(defaultImage);
    }
  }, [currentUserProfile.settings.profileImage]);

  const handleSignOut = async () => {
    signOutCurrentUser(currentUserProfileDispatch, authDispatch);
  };

  // console.log("USER SETTINGS CONTEXT", currentUserProfile.settings);
  return (
    <Container>
      <>
        <ProfileImageContainer>
          <ProfileImage
            source={{
              uri: previewImage,
            }}
            dynamicHeight={`${screenWidth / 1.3}px`}
          />
          {!isProfileImageSaved && <UploadImageButton />}
        </ProfileImageContainer>
      </>

      <Main>
        {/* <Top>
          <EditProfileImage>
            <ProfileImage
              source={{
                uri: "https://www.clevelanddentalhc.com/wp-content/uploads/2018/03/sample-avatar.jpg",
              }}
            />
            <EditButton activeOpacity={0.8}>
              <Feather name="plus" size={19} color="white" />
            </EditButton>
          </EditProfileImage>
          <ProfileName>Heiden Biermann</ProfileName>
        </Top> */}
        <View>
          <SettingsLinks
            data={settingsData}
            renderItem={({ item }) => (
              <SettingsLink activeOpacity={0.7}>
                <Block>
                  <Icon>{item.icon}</Icon>
                  <Details>
                    <Title>{item.title}</Title>
                    <Description>{item.description}</Description>
                  </Details>
                </Block>

                <Arrow>
                  <AntDesign name="right" size={15} color="black" />
                </Arrow>
              </SettingsLink>
            )}
            ItemSeparatorComponent={() => (
              <View
                style={{ backgroundColor: "rgba(0, 0, 0, 0.1)", height: 1 }}
              />
            )}
            keyExtractor={(item) => item.id}
          />
        </View>
      </Main>

      <Footer>
        <LogoutButton activeOpacity={0.8} onPress={handleSignOut}>
          <Feather name="log-out" size={19} color="black" />
          <LogoutText>Αποσύνδεση</LogoutText>
        </LogoutButton>
      </Footer>
    </Container>
  );
};

export default SettingsOld;

const ProfileImageContainer = styled.View`
  position: relative;
  background-color: black;
`;

const ProfileImage = styled.Image`
  width: 100%;
  height: ${(props) => props.dynamicHeight};
  border-top-left-radius: 20px;
  border-top-right-radius: 20px;
`;

const Main = styled.View`
  padding: 30px 30px;
  /* padding-bottom: 150px; */
`;

const Footer = styled.View`
  width: 100%;
  position: absolute;
  bottom: 0;
  left: 0;
  background-color: white;
  justify-content: center;
  align-items: center;
  padding: 20px;
  border-top-left-radius: 25px;
  border-top-right-radius: 25px;
`;

const LogoutButton = styled.TouchableOpacity`
  flex-direction: row;
  text-align: center;
  justify-content: center;
  align-items: center;
  width: 100%;
  gap: 10px;
  border: 1px solid black;
  border-radius: 15px;
  padding: 15px 0px;
  background-color: white;
`;
const LogoutText = styled.Text`
  font-size: 16px;
  font-weight: 600;
`;

const Container = styled.SafeAreaView`
  position: relative;
  height: 100%;
  background-color: #f7f8fb;
`;

const SettingsLinks = styled.FlatList`
  background-color: white;
  border-radius: 10px;
  border: 1px solid rgba(0, 0, 0, 0.1);
`;
const SettingsLink = styled.TouchableOpacity`
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  padding: 15px 18px;
`;

const Block = styled.View`
  flex-direction: row;
  justify-content: center;
  align-items: center;
  gap: 15px;
`;

const Icon = styled.View`
  border: 1px solid rgba(0, 0, 0, 0.2);
  border-radius: 7px;
  padding: 5px;
`;

const Details = styled.View`
  gap: 2px;
`;

const Title = styled.Text`
  font-size: 15px;
  font-weight: 600;
`;

const Description = styled.Text`
  font-size: 12px;
  font-weight: 300;
`;

const Arrow = styled.View``;

// const Top = styled.View`
//   background-color: #f7f8fb;
//   align-items: center;
//   justify-content: center;
//   margin-bottom: 30px;
// `;

// const EditProfileImage = styled.View`
//   position: relative;
//   margin-top: 25px;
//   margin-bottom: 25px;
// `;

// const EditButton = styled.TouchableOpacity`
//   position: absolute;
//   right: -10px;
//   bottom: -10px;
//   width: 35px;
//   height: 35px;
//   border-radius: 12px;
//   justify-content: center;
//   align-items: center;
//   background-color: black;
// `;

// const ProfileImage = styled.Image`
//   width: 120px;
//   height: 120px;
//   border-radius: 30px;
// `;

// const ProfileName = styled.Text`
//   font-size: 18.5px;
//   font-weight: 600;
// `;

// const TextButton = styled.Button`
//   background-color: white;
//   font-size: 8px;
// `;
