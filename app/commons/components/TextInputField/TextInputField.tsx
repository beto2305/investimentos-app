import React from "react";
import { View, TextInput, KeyboardTypeOptions } from "react-native";

import { MaterialCommunityIcons } from "@expo/vector-icons";

/**
 * Local Imports
 */
import styles from "./TextInputField.style";

type TextInputFieldProps = {
  placeholder: string;
  fieldIcon: keyof typeof MaterialCommunityIcons.glyphMap;
  onChangeText?(string): void;
  keyboardType?: KeyboardTypeOptions;
  isPasswordField?: boolean | false;
};

export const TextInputField = ({
  placeholder,
  onChangeText,
  fieldIcon,
  keyboardType,
  isPasswordField,
}: TextInputFieldProps) => {
  return (
    <View style={styles.container}>
      <MaterialCommunityIcons
        name={fieldIcon}
        size={24}
        color={"#ccc"}
        style={styles.fieldIcon}
      />
      <TextInput
        placeholder={placeholder}
        style={styles.textInput}
        keyboardType={keyboardType}
        onChangeText={onChangeText}
        secureTextEntry={isPasswordField}
      />
    </View>
  );
};
