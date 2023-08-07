import { StyleSheet, Platform } from "react-native";
import Constants from "expo-constants";

// local import

import colors from "app/config/colors";

export default StyleSheet.create({
  screen: {
    paddingTop: Constants.statusBarHeight,
    flex: 1,
  },
  view: {
    flex: 1,
  },
  text: {
    color: colors.dark,
    fontSize: 18,
    fontFamily: Platform.OS === "android" ? "Roboto" : "Avenir",
  },
});

export { colors };
