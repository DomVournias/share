import {
  Button,
  SafeAreaView,
  StatusBar,
  Text,
  TouchableOpacity,
  View,
} from "react-native";
import {
  GoBackButton,
  SettingsButton,
} from "../components/Buttons/ProfileButtons";

import { AuthContext } from "../context/auth/AuthReducer";
import AuthLoading from "components/Loading/AuthLoading";
import CenterMapLocation from "../components/Buttons/HomeButtons/CenterMapLocation";
import { CurrentUserProfileContext } from "../context/user/UserReducer";
import FooterHome from "../components/Footers/FooterHome";
import HeaderCustomized from "../components/Headers/HeaderCustomized";
import HomeHeader from "components/Headers/HomeHeader";
import { LoadingContext } from "context/loading/LoadingProvider";
import MainMap from "../components/Maps/MainMap";
import ProfileButton from "../components/Buttons/HomeButtons/ProfileButton";
import React from "react";
import SearchAutocomplete from "../components/Inputs/Booking/SearchAutocomplete";
import { Settings } from "./AllSettings";
import ToggleUserTypeButton from "../components/Buttons/HomeButtons/ToggleUserTypeButton";
import { auth } from "../lib/firebase";
import mapMock from "../assets/mapMock.png";
import styled from "styled-components/native";
import { useNavigation } from "@react-navigation/native";

const Home = () => {
  const navigation = useNavigation();
  const { authData } = React.useContext(AuthContext);

  const { loadingState, loadingDispatch } = React.useContext(LoadingContext);

  const { currentUserProfile } = React.useContext(CurrentUserProfileContext);
  // const { user, message, loading } = useAuth();
  const [isDriver, setIsDriver] = React.useState(true);

  React.useLayoutEffect(() => {
    navigation.setOptions({
      headerShown: true,
      headerStatusBarHeight: 0,
      headerTransparent: true,
      title: "",
      headerShadowVisible: false,
      headerStyle: {
        backgroundColor: "transparent",
      },
      header: () => <HomeHeader />,
    });
  }, [navigation]);

  const handleToggle = () => {
    setIsDriver(!isDriver);
  };

  return (
    <Container>
      {/* <MainMap /> */}

      <FooterHome />
    </Container>
  );
};

export default Home;

const Container = styled(SafeAreaView)`
  position: relative;
  flex: 1;
`;
