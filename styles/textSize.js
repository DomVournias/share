import { Dimensions } from "react-native";

const deviceHeight = Dimensions.get("window").height;
const deviceWidth = Dimensions.get("window").height;

export const ResponsiveSize = (size) => {
  if (deviceHeight === 568) {
    return size;
  } else if (deviceHeight === 667) size * 1.17;
  else if (deviceHeight === 736) size * 1.29;
  else if (deviceHeight === 1024) size * 1.8;
};
