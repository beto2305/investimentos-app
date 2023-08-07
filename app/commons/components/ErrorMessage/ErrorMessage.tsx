import React from "react";
import { StyleSheet, Text } from "react-native";

import colors from "app/config/colors";

export const ErrorMessage = ({ error, visible }) => {
  if (!error || !visible) {
    return null;
  }

  return <Text style={styles.errorText}>{error}</Text>;
};

const styles = StyleSheet.create({
  errorText: {
    color: colors.danger,
    fontSize: 14,
    fontWeight: "600",
    textAlign: "center",
  },
});
