import React from "react";
import { Entypo } from "@expo/vector-icons";
import { useNavigation } from "@react-navigation/native";
import { RightButtonStyled } from "./index.styled";

const SettingsButton = ({ settingsModalRef }) => {
  // const navigation = useNavigation();

  const handlePresentModal = React.useCallback(() => {
    settingsModalRef.current?.present();
    // settingsModalRef.current?.expand();
  }, []);

  return (
    <RightButtonStyled onPress={handlePresentModal} activeOpacity={0.8}>
      <Entypo name="dots-three-vertical" size={20} color="black" />
    </RightButtonStyled>
  );
};

export default SettingsButton;
