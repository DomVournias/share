import { Text, TouchableHighlight, View } from "react-native";

import React from "react";
import { settingsList } from "./SettingsData";
import styled from "styled-components/native";

const Settings = ({ goTo }) => {
  const handleNavigation = (screen) => {
    goTo.navigate(`${screen}`);
  };
  return (
    <Container>
      {settingsList.map((item, index) => (
        <ListItem
          key={index}
          activeOpacity={0.6}
          underlayColor="#efefef"
          onPress={() => handleNavigation(item.path)}
        >
          <>
            <Icon>{item.icon}</Icon>
            <Label>{item.name}</Label>
          </>
        </ListItem>
      ))}
    </Container>
  );
};

export default Settings;

const Container = styled(View)`
  flex: 1;
  flex-direction: column;
  justify-content: space-between;
  padding-top: 5px;
  padding-bottom: 10px;
`;

const ListItem = styled(TouchableHighlight)`
  flex-direction: row;
  align-items: center;
  gap: 10px;
  padding-top: 10px;
  padding-bottom: 10px;
  padding-left: 20px;
  padding-right: 20px;
`;

const Icon = styled(View)`
  flex-direction: row;
  align-items: center;
  justify-content: center;
  opacity: 0.95;
`;

const Label = styled(Text)`
  font-size: 15px;
  opacity: 0.9;
`;
