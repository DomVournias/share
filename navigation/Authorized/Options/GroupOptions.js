const { CardStyleInterpolators } = require("@react-navigation/stack");
const {
  default: BackButton,
} = require("components/Buttons/SettingsButtons/BackButton");

const settingsGroupOptions = {
  presentation: "card",
  headerMode: "screen",
  cardStyleInterpolator: CardStyleInterpolators.forNoAnimation,
  headerShown: true,
  headerStatusBarHeight: 15,

  headerStyle: {
    borderBottomWidth: 0,
    elevation: 0,
  },
  headerShadowVisible: false,
  headerLeft: () => <BackButton />,
};

export default settingsGroupOptions;
