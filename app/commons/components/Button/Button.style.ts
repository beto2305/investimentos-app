import { StyleSheet, Platform } from "react-native";

// local import

import colors from "app/config/colors";
export { colors };

export default StyleSheet.create({
  touchButton: {
    backgroundColor: colors.primary,
    paddingVertical: 10,
    borderRadius: 5,
    marginBottom: 30,
    marginTop: 20,
  },
  text: {
    color: colors.dark,
    fontSize: 18,
    fontFamily: Platform.OS === "android" ? "Roboto" : "Avenir",
  },
  textInput: {
    flex: 1,
    paddingVertical: 0,
  },
  textButton: {
    textAlign: "center",
    fontWeight: "700",
    color: "#fff",
  },
});
