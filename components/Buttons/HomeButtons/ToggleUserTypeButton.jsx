import React from "react";
import { Pressable } from "react-native";
import { View, Text } from "react-native";
import styled from "styled-components/native";
import { MotiView, MotiText } from "moti";
import { Easing } from "react-native-reanimated";
import { setCurrentUserProfileType } from "../../../context/user/UserActions";
import { CurrentUserProfileContext } from "../../../context/user/UserReducer";
import AsyncStorage from "@react-native-async-storage/async-storage";

const TRACK_WIDTH = 120;
const TRACK_HEIGHT = 50;
const KNOB_SIZE = 40;
const INACTIVE_COLOR = "rgba(0,0,0,0.7)";
const ACTIVE_COLOR = "#fff";

const Container = styled(Pressable)`
  width: ${TRACK_WIDTH}px;
  height: ${TRACK_HEIGHT}px;
  border-radius: ${TRACK_HEIGHT}px;
  justify-content: center;
  align-items: center;
  padding-left: 3px;
  padding-right: 3px;
  position: relative;
  /* background-color: ${(props) => props.bg}; */
`;

const Knob = styled(MotiView)`
  width: ${KNOB_SIZE}px;
  height: ${KNOB_SIZE}px;
  border-radius: ${KNOB_SIZE}px;
  box-shadow: 0px 2px 2px rgba(0, 0, 0, 0.24);
  text-align: center;
  align-items: center;
  justify-content: center;
  background-color: ${(props) => props.bg};
  z-index: 3;
`;

const Emoticon = styled(MotiText)`
  font-size: 20px;
  align-self: center;
  vertical-align: middle;
`;

const DriverIcon = styled(Emoticon)`
  line-height: ${TRACK_HEIGHT / 2.5}px;
`;

const RiderIcon = styled(Emoticon)`
  line-height: ${TRACK_HEIGHT / 2}px;
`;

const StyledText = styled(MotiText)`
  position: absolute;
  font-size: 20px;
  font-weight: 600;
  z-index: 2;
`;

const RightText = styled(StyledText)`
  right: 12px;
  color: ${INACTIVE_COLOR};
  /* opacity: ${(props) => props.show}; */
`;

const LeftText = styled(StyledText)`
  left: 10px;
  color: ${ACTIVE_COLOR};
  /* opacity: ${(props) => props.show}; */
`;

const transition = {
  backgroundColor: {
    type: "timing",
    duration: 300,
    easing: Easing.inOut(Easing.ease),
  },
  translateX: {
    type: "timing",
    duration: 200,
  },
  translateY: {
    type: "timing",
    duration: 200,
  },
  opacity: {
    type: "timing",
    duration: 200,
  },
};

const textTransition = {};

const ToggleUserTypeButton = () => {
  const [isActive, setIsActive] = React.useState(false);
  const { currentUserProfile, currentUserProfileDispatch } = React.useContext(
    CurrentUserProfileContext
  );

  // Load the value from storage when the component mounts
  React.useEffect(() => {
    AsyncStorage.getItem("currentUserProfileType").then((value) => {
      // console.log("EFFECT", value);
      if (value === "driver") {
        setIsActive(true);
      } else {
        setIsActive(false);
      }
    });
  }, []);

  React.useEffect(() => {
    setCurrentUserProfileType(currentUserProfileDispatch, isActive);
  }, [isActive]);

  const toggleSwitch = () => {
    setIsActive((isActive) => !isActive);
  };

  // console.log(currentUserProfile.userType);
  return (
    <MotiView
      transition={transition}
      from={{ backgroundColor: !isActive ? ACTIVE_COLOR : INACTIVE_COLOR }}
      animate={{
        backgroundColor: isActive ? INACTIVE_COLOR : ACTIVE_COLOR,
      }}
      style={{ borderRadius: 50 }}
    >
      <Container onPress={toggleSwitch}>
        <Knob
          transition={transition}
          bg={isActive ? ACTIVE_COLOR : INACTIVE_COLOR}
          animate={{
            translateX: isActive ? TRACK_WIDTH / 4 : -TRACK_WIDTH / 4,
          }}
        >
          {isActive ? (
            <DriverIcon
              transition={transition}
              animate={{ translateY: isActive ? 0 : -TRACK_HEIGHT }}
            >
              🚘
            </DriverIcon>
          ) : (
            <RiderIcon>🧒</RiderIcon>
          )}
        </Knob>
        <LeftText
          transition={transition}
          from={{
            opacity: !isActive ? 0 : 1,
            translateY: !isActive ? -TRACK_HEIGHT / 2 : TRACK_HEIGHT,
          }}
          animate={{
            opacity: isActive ? 1 : 0,
            translateY: isActive ? 0 : -5,
          }}
        >
          Driver
        </LeftText>
        <RightText
          transition={transition}
          from={{
            opacity: isActive ? 0 : 1,
            translateY: isActive ? -TRACK_HEIGHT / 2 : TRACK_HEIGHT,
          }}
          animate={{
            opacity: !isActive ? 1 : 0,
            translateY: !isActive ? 0 : -5,
          }}
        >
          Rider
        </RightText>
      </Container>
    </MotiView>
  );
};

export default ToggleUserTypeButton;
