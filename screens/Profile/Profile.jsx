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
} from "../../components/Buttons/ProfileButtons";

import { AuthContext } from "../../context/auth/AuthReducer";
import Avatar from "./Avatar";
import Bio from "./Bio";
import { Button } from "react-native";
import { CurrentUserProfileContext } from "../../context/user/UserReducer";
import { Dimensions } from "react-native";
import { FontAwesome } from "@expo/vector-icons";
import { FontAwesome5 } from "@expo/vector-icons";
import { Fragment } from "react";
import HeaderCustomized from "../../components/Headers/HeaderCustomized";
import { Image } from "react-native";
import Name from "./Name";
import { Portal } from "@gorhom/portal";
import ProfileButtons from "./Edit/Buttons";
import Rating from "./Rating";
import React from "react";
import Reviews from "./Reviews";
import { SafeAreaView } from "react-native-safe-area-context";
import Settings from "../AllSettings/Settings";
import Statistics from "./Stats";
import Vehicle from "./Vehicle";
import Verifications from "./Verifications";
import { auth } from "../../lib/firebase";
import { signOutCurrentUser } from "../../context/auth/AuthFunctions";
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
      headerStatusBarHeight: 0,
      headerTransparent: true,
      title: "",
      animationTypeForReplace: "push",
      animation: "slide_from_right",
      headerShadowVisible: false,
      headerStyle: {
        backgroundColor: "transparent",
      },
      header: () => (
        <HeaderCustomized>
          <GoBackButton />
          <SettingsButton settingsModalRef={settingsModalRef} />
        </HeaderCustomized>
      ),
    });
  }, [navigation]);

  // User Profile data

  const bio = currentUserProfile?.data?.bio;
  const vehicle = currentUserProfile?.data?.vehicle;
  const stats = currentUserProfile?.data?.stats;
  const verifications = currentUserProfile?.data?.verifications;
  const reviews = currentUserProfile?.data?.reviews;

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
      <Avatar image={user?.profileImage} />
      <Info>
        <Name
          firstName={user?.firstName}
          lastName={user?.lastName[0]}
          isVerified={true}
        />
        <Bio bio={bio} />
        <ProfileButtons />
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
