import { StyleSheet, Platform } from "react-native";

// local import

import colors from "app/config/colors";

export default StyleSheet.create({
  container: {
    flexDirection: "row",
    borderColor: "#ccc",
    borderWidth: 1,
    borderRadius: 5,
    paddingVertical: 5,
    marginBottom: 5,
  },
  fieldIcon: {
    marginRight: 10,
    marginLeft: 5,
    textAlignVertical: "middle",
  },

  textInput: {
    flex: 1,
    paddingVertical: 0,
    textAlignVertical: "middle",
    color: "#ccc",
    fontSize: 14,
    fontFamily: Platform.OS === "android" ? "Roboto" : "Avenir",
  },
});

export { colors };
