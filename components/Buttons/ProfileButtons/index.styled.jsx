import { TouchableOpacity } from "react-native";
import styled from "styled-components/native";

export const ButtonStyled = styled(TouchableOpacity)`
  position: relative;
  /* background-color: rgba(0, 0, 0, 0.2); */

  width: 50px;
  height: 50px;
  padding: 0;
  margin: 0;
  /* margin-left: 10px; */
  justify-content: center;
  align-items: center;
  border-radius: 50px;
`;

export const LeftButtonStyled = styled(ButtonStyled)`
  /* margin-left: 10px; */
`;

export const RightButtonStyled = styled(ButtonStyled)`
  /* margin-right: 10px; */
`;
