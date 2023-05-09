import { View } from "react-native";
import { HeaderControls, Wrapper } from "./Header.styled";

const HeaderCustomized = ({ children }) => {
  return (
    <Wrapper>
      <HeaderControls>{children}</HeaderControls>
    </Wrapper>
  );
};

export default HeaderCustomized;
