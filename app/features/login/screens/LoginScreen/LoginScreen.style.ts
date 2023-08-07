import { StyleSheet, Platform } from "react-native";
import Constants from "expo-constants";

// local import

import colors from "../../../../config/colors";

export default StyleSheet.create({
  appLogo: {
    width: 100,
    height: 100,
  },

  screen: {
    paddingTop: Constants.statusBarHeight,
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: "white",
  },
  view: {
    flex: 1,
  },
  viewAlternativeLogin: {
    justifyContent: "center",
    flexDirection: "row",
    marginBottom: 20,
    marginTop: 20,
  },
  viewSocialLogin: {
    flexDirection: "row",
    marginBottom: 20,
    justifyContent: "space-between",
  },
  viewSignUp: {
    justifyContent: "center",
    flexDirection: "row",
  },
  viewAppLogo: {
    justifyContent: "center",
    alignItems: "center",
    marginBottom: 30,
  },
  text: {
    color: colors.dark,
    fontSize: 18,
    fontFamily: Platform.OS === "android" ? "Roboto" : "Avenir",
  },
  textAppName: {
    fontSize: 28,
    fontWeight: "600",
    color: colors.primary,
  },
  textLink: {
    color: colors.primary,
    marginLeft: 5,
  },
});

export { colors };
