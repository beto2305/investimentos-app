import { Text, TouchableOpacity } from "react-native";
import React from "react";

import styles, { colors } from "./Button.style";

type ButtonProps = {
  label: string;
  onPress(): void;
};

export const Button = ({ label, onPress }: ButtonProps) => {
  return (
    <TouchableOpacity onPress={onPress} style={styles.touchButton}>
      <Text style={[styles.text, styles.textButton]}>{label}</Text>
    </TouchableOpacity>
  );
};
