import { Header, HeaderControls, Wrapper } from "./Header.styled";

import { View } from "react-native";

const HeaderCustomized = ({ children }) => {
  return (
    <Wrapper>
      <Header>{children}</Header>
    </Wrapper>
  );
};

export default HeaderCustomized;
