import { Button, ButtonIcon, Header, Title } from "./Header.styled";
import {
  GoBackButton,
  SettingsButton,
} from "components/Buttons/ProfileButtons";
import { StatusBar, View } from "react-native";

import { AntDesign } from "@expo/vector-icons";
import { Entypo } from "@expo/vector-icons";
import { MaterialCommunityIcons } from "@expo/vector-icons";
import ProfileButton from "components/Buttons/HomeButtons/ProfileButton";
import React from "react";
import { StyleSheet } from "react-native";
import { useNavigation } from "@react-navigation/native";

const HomeHeader = (props) => {
  const navigation = useNavigation();

  const handlePresentModal = React.useCallback(() => {
    props.settingsModalRef.current?.present();
    // settingsModalRef.current?.expand();
  }, []);

  const notifications = 2;
  return (
    <Header color="transparent">
      <StatusBar translucent={false} />

      <Button activeOpacity={0.8} onPress={() => navigation.goBack()}>
        <View style={styles.icon}>
          {notifications > 0 ? (
            <MaterialCommunityIcons
              name="bell-badge-outline"
              size={30}
              color="black"
            />
          ) : (
            <MaterialCommunityIcons
              name="bell-outline"
              size={30}
              color="black"
            />
          )}
        </View>
      </Button>
      <Title>{props.title && props.title}</Title>

      <Button activeOpacity={0.8} onPress={handlePresentModal}>
        <View style={styles.icon}>
          <ProfileButton width={43} />
        </View>
      </Button>
    </Header>
  );
};

export default HomeHeader;

const styles = StyleSheet.create({
  icon: {
    paddingLeft: "4%",
    paddingRight: "4%",
  },
});
