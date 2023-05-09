import { View, Text, TouchableOpacity } from "react-native";
import styled from "styled-components/native";

export const Row = styled(View)`
  flex-direction: ${(props) => props.direction};
`;
export const Column = styled(View)`
  width: ${(props) => props.width};
`;

export const Field = styled(View)`
  flex-direction: row;
  align-items: center;
  width: 100%;
  background-color: rgba(0, 0, 0, 0.08);
  border-radius: 8px;
  overflow: hidden;
`;

export const ErrorMessage = styled(View)`
  height: 20px;
  align-items: flex-start;
  justify-content: center;
  margin-top: 1px;
  margin-bottom: 3px;
`;

export const Message = styled(Text)`
  color: #fff;
  font-size: 12px;
  background-color: #c73e1d;
  padding: 2px 4px;
  border-radius: 8px;
`;

export const InputField = styled.TextInput`
  flex: 1;
  font-size: 17px;
  width: 100%;
  padding: 12px 15px;
  /* background-color: rgba(0, 0, 0, 0.08); */
  /* border: 2px solid ${(props) => props.borderColor}; */
`;

export const LeftIcon = styled(View)`
  padding: 0px 0px 0px 10px;
`;

export const RightIcon = styled(TouchableOpacity)`
  padding: 0px 10px 0px 10px;
`;

export const DeleteIcon = styled(TouchableOpacity)`
  padding: 0px 10px;
`;

export const TodayButton = styled(TouchableOpacity)`
  border: 1px solid black;
  border-radius: 8px;
  justify-content: center;
  align-items: center;
  margin-right: 10px;
  background-color: ${(props) => props.bg};
`;

export const TodayButtonText = styled(Text)`
  font-size: 17px;
  padding: 12px 15px;
  color: ${(props) => props.color};
`;

export const SubmitButton = styled(TouchableOpacity)`
  background-color: black;
  justify-content: center;
  align-items: center;
  border-radius: 8px;
`;

export const SubmitButtonText = styled(Text)`
  font-size: 17px;
  font-weight: 600;
  padding: 12px 15px;
  color: white;
`;
