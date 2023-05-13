import { Image, Text, TouchableOpacity } from "react-native";

import { TextInput } from "react-native";
import { View } from "react-native";
import styled from "styled-components/native";

export const ProfilePhoto = styled(View)`
  align-items: center;

  justify-content: center;
  margin-bottom: 20px;
`;

export const PhotoFrame = styled(TouchableOpacity)`
  position: relative;
`;

export const Photo = styled(Image)`
  border-radius: 50px;
`;

export const Icon = styled(View)`
  position: absolute;
  right: -2px;
  bottom: -2px;
  background-color: white;
  padding: 3px;
  border-radius: 50px;
`;

export const PhotoText = styled(Text)`
  font-size: 15px;
  font-weight: 500;
  margin-top: 4px;
  opacity: 0.8;
`;

export const Fields = styled(View)`
  width: 100%;
  flex-direction: column;
  gap: 10px;
`;

export const Field = styled(View)`
  flex-direction: column;
  width: 100%;
`;

export const Label = styled(Text)`
  font-size: 15px;
  font-weight: 400;
  margin-bottom: 4px;
  opacity: 0.6;
`;

export const Input = styled(TextInput)`
  flex: 1;
  font-size: 17px;
  width: 100%;
  padding: 12px 15px;
`;

export const Paragraph = styled(Text)`
  margin-top: 15px;
  font-size: 15px;
  opacity: 0.9;
`;
