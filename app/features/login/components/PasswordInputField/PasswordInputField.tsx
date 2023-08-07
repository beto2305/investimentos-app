import React, { PureComponent } from "react";
import { View, Text, TouchableOpacity, TextInput } from "react-native";

import { MaterialCommunityIcons } from "@expo/vector-icons";

/**
 * Local Imports
 */
import styles, { colors } from "./PasswordInputField.style";

type InputFieldProps = {
  fiedlAction(): void;
};

export const PasswordInputField = ({ fiedlAction }: InputFieldProps) => {
  return (
    <View style={styles.container}>
      <MaterialCommunityIcons
        name="lock-outline"
        size={24}
        color={colors.medium}
        style={styles.fieldIcon}
      />
      <TextInput
        placeholder="Password"
        style={styles.textInput}
        secureTextEntry={true}
      />
      <TouchableOpacity onPress={fiedlAction}>
        <Text style={[styles.text, styles.textLink]}>{"Forgot?"}</Text>
      </TouchableOpacity>
    </View>
  );
};
