import BottomSheet, {
  BottomSheetBackdrop,
  BottomSheetModal,
  BottomSheetModalProvider,
  BottomSheetScrollView,
  BottomSheetView,
} from "@gorhom/bottom-sheet";
import {
  FlatList,
  ScrollView,
  ScrollViewBase,
  StatusBar,
  Text,
  TouchableOpacity,
  View,
} from "react-native";
import {
  GoBackButton,
  SettingsButton,
} from "components/Buttons/ProfileButtons";

import { AuthContext } from "context/auth/AuthReducer";
import Avatar from "components/Profile/Avatar";
import Bio from "components/Profile/Bio";
import { Button } from "react-native";
import { CurrentUserProfileContext } from "context/user/UserReducer";
import { Dimensions } from "react-native";
import { FontAwesome } from "@expo/vector-icons";
import { FontAwesome5 } from "@expo/vector-icons";
import { Fragment } from "react";
import HeaderCustomized from "components/Headers/HeaderCustomized";
import { Image } from "react-native";
import Name from "components/Profile/Name";
import { Portal } from "@gorhom/portal";
import ProfileButtons from "screens/Profile/Edit/Buttons";
import ProfileHeader from "components/Headers/ProfileHeader";
import Rating from "components/Profile/Rating";
import React from "react";
import Reviews from "components/Profile/Reviews";
import { SafeAreaView } from "react-native-safe-area-context";
import Settings from "screens/AllSettings/Settings";
import Statistics from "components/Profile/Stats";
import Vehicle from "components/Profile/Vehicle";
import Verifications from "components/Profile/Verifications";
import { auth } from "lib/firebase";
import { signOutCurrentUser } from "context/auth/AuthFunctions";
import styled from "styled-components/native";
import { useLayoutEffect } from "react";
import { useNavigation } from "@react-navigation/native";

const Profile = () => {
  const navigation = useNavigation();

  const { authDispatch } = React.useContext(AuthContext);

  const { currentUserProfile, currentUserProfileDispatch } = React.useContext(
    CurrentUserProfileContext
  );

  const handleSignOut = async () => {
    await signOutCurrentUser(
      currentUserProfileDispatch,
      authDispatch,
      navigation
    );
  };

  const user = currentUserProfile?.data;

  // const { profile } = route.params;

  const screenWidth = Dimensions.get("window").width;
  const imageHeight = screenWidth / 1.3;

  // Settings Modal
  const settingsModalRef = React.useRef(null);
  const [isModalOpen, setIsModalOpen] = React.useState(false);
  const snapPoints = React.useMemo(() => ["47%"], []);

  const handleSheetChanges = React.useCallback((index) => {
    // console.log("handleSheetChanges", index);
  }, []);

  useLayoutEffect(() => {
    navigation.setOptions({
      headerShown: true,
      header: () => <ProfileHeader settingsModalRef={settingsModalRef} />,
    });
  }, [navigation]);

  // User Profile data
  const firstName = user.firstName;
  const lastName = user.lastName;
  const gender = user.gender;
  const profileImage = user.profileImage;
  const bio = user.bio;
  const vehicle = user.vehicle;
  const stats = user.stats;
  const verifications = user.verifications;
  const reviews = user.reviews;

  // let rawRating = profile.reviews.reduce(
  //   (sum, review) => sum + review.rating.overall,
  //   0
  // );

  // let averageRating = rawRating / profile.reviews.length;

  // const finalRating = Number.parseFloat(averageRating).toFixed(1);

  // console.log("review total", finalRating);

  // console.log("😊PROFILE===>", profile.reviews);

  // const { kilometers, rides } = profile.stats;

  // const currentUserReviews = profile.reviews;

  // const firstName = user.firstName
  // const lastName = user.lastName

  const renderBackdrop = React.useCallback(
    (props) => (
      <BottomSheetBackdrop
        {...props}
        opacity={0.5}
        disappearsOnIndex={-1}
        appearsOnIndex={0}
        pressBehavior="close"
      />
    ),
    []
  );

  // console.log(`\x1b[42m Profile \x1b[0m`, currentUserProfile.data.vehicle);

  return (
    <Container>
      <Avatar image={profileImage} />
      <Info>
        <Name firstName={firstName} lastName={lastName[0]} isVerified={true} />
        <Bio bio={bio} />
        <EditProfileButton
          activeOpacity={0.8}
          onPress={() =>
            navigation.navigate("EditProfile", {
              profileImage,
              firstName,
              lastName,
              gender,
              bio,
              vehicle,
              title: "Edit profile",
            })
          }
        >
          <EditProfileButtonText>Edit Profile</EditProfileButtonText>
        </EditProfileButton>
      </Info>
      <ScrollView>
        <Statistics stats={stats} />
        <Verifications verifications={verifications} />
        {vehicle?.hasVehicle && <Vehicle vehicle={vehicle} />}
        <Rating
          average={4.9}
          safety={3.5}
          communication={4.6}
          timeliness={4.5}
        />
        <Reviews reviews={reviews} />
      </ScrollView>
      <BottomSheetModal
        ref={settingsModalRef}
        backdropComponent={renderBackdrop}
        index={0}
        snapPoints={snapPoints}
        enablePanDownToClose={true}
        animateOnMount={false}
        onChange={handleSheetChanges}
      >
        <BottomSheetScrollView>
          <Settings goTo={navigation} />
        </BottomSheetScrollView>
      </BottomSheetModal>

      <Button title="Sign out" onPress={handleSignOut} />
    </Container>
  );
};

export default Profile;

const Container = styled(View)`
  flex: 1;
  background-color: #f4f4f4;
`;

const Info = styled(View)`
  justify-content: center;
  align-items: center;
  background-color: white;
  padding: 15px 30px;
`;

const EditProfileButton = styled(TouchableOpacity)`
  margin-top: 15px;
  background-color: #eeeeee;
  border-radius: 8px;
  width: 50%;
  text-align: center;
  align-items: center;
  justify-content: center;
`;

const EditProfileButtonText = styled(Text)`
  font-size: 15px;
  font-weight: 600;
  padding: 5px 10px;
`;
