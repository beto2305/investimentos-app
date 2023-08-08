import { StyleSheet, Platform } from "react-native";

// local import

import colors from "app/config/colors";

export default StyleSheet.create({
  container: {
    flexDirection: "row",
    borderBottomColor: "#ccc",
    borderBottomWidth: 1,
    paddingBottom: 8,
    marginBottom: 25,
  },
  fieldIcon: {
    marginRight: 10,
    textAlignVertical: "center",
  },

  textInput: {
    flex: 1,
    paddingVertical: 0,
    color: colors.dark,
    fontSize: 14,
    fontFamily: Platform.OS === "android" ? "Roboto" : "Avenir",
  },
});

export { colors };
