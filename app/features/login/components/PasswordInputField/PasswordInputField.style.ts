import { StyleSheet, Platform } from "react-native";

// local import

import colors from "app/config/colors";
export { colors };

export default StyleSheet.create({
  container: {
    flexDirection: "row",
    borderBottomColor: "#ccc",
    borderBottomWidth: 1,
    paddingBottom: 8,
    marginBottom: 5,
    alignContent: "center",
  },
  fieldIcon: {
    marginRight: 10,
    textAlignVertical: "middle",
  },
  fieldLabel: { color: colors.primary, fontWeight: "600" },
  text: {
    color: colors.dark,
    fontSize: 18,
    fontFamily: Platform.OS === "android" ? "Roboto" : "Avenir",
  },
  textLink: {
    color: colors.primary,
    fontWeight: "600",
    marginLeft: 5,
  },
  textInput: {
    flex: 1,
    paddingVertical: 0,
    color: colors.dark,
    fontSize: 14,
    fontFamily: Platform.OS === "android" ? "Roboto" : "Avenir",
  },
});
