import React, { PureComponent } from "react";
import { View, Text, TouchableOpacity, TextInput } from "react-native";

import { MaterialCommunityIcons } from "@expo/vector-icons";

/**
 * Local Imports
 */
import styles, { colors } from "./EmailInputField.style";

type InputFieldProps = {
  fiedlAction?(): void;
  dataTestId?: string;
};

export const EmailInputField = ({ fiedlAction }: InputFieldProps) => {
  return (
    <View style={styles.container}>
      <MaterialCommunityIcons
        name="email-outline"
        size={24}
        color={colors.medium}
        style={styles.fieldIcon}
      />
      <TextInput
        placeholder="Email"
        style={styles.textInput}
        keyboardType="email-address"
      />
    </View>
  );
};
