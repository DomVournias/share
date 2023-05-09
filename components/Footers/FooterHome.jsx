import { View } from "react-native";
import styled from "styled-components/native";
import CreateButton from "../Buttons/HomeButtons/CreateButton";

const FooterHome = () => {
  return (
    <Footer>
      <CreateButton />
    </Footer>
  );
};

export default FooterHome;

const Footer = styled(View)`
  position: absolute;
  bottom: 30px;
  width: 100%;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  z-index: 100;
`;
