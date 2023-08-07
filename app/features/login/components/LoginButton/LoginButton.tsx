import { Text, TouchableOpacity } from "react-native";
import React from "react";

import styles from "./LoginButton.style";

type CustomButtonProps = {
  label: string;
  onPress(): void;
};

export const LoginButton = ({ label, onPress }: CustomButtonProps) => {
  return (
    <TouchableOpacity onPress={onPress} style={styles.touchButton}>
      <Text style={[styles.text, styles.textButton]}>{label}</Text>
    </TouchableOpacity>
  );
};
