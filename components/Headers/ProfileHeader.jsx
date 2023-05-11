import { Button, ButtonIcon, Header, Title } from "./Header.styled";
import {
  GoBackButton,
  SettingsButton,
} from "components/Buttons/ProfileButtons";

import { AntDesign } from "@expo/vector-icons";
import { Entypo } from "@expo/vector-icons";
import React from "react";
import { StatusBar } from "react-native";
import { StyleSheet } from "react-native";
import { useNavigation } from "@react-navigation/native";

const ProfileHeader = (props) => {
  const navigation = useNavigation();

  const handlePresentModal = React.useCallback(() => {
    props.settingsModalRef.current?.present();
    // settingsModalRef.current?.expand();
  }, []);
  return (
    <Header>
      <Button activeOpacity={0.8} onPress={() => navigation.goBack()}>
        <AntDesign name="left" size={25} color="black" style={styles.icon} />
      </Button>
      <Title>{props.title && props.title}</Title>
      <Button activeOpacity={0.8} onPress={handlePresentModal}>
        <Entypo
          name="dots-three-vertical"
          size={20}
          color="black"
          style={styles.icon}
        />
      </Button>
    </Header>
  );
};

export default ProfileHeader;

const styles = StyleSheet.create({
  icon: {
    paddingLeft: "4%",
    paddingRight: "4%",
  },
});
