import React from "react";
import { StatusBar } from "expo-status-bar";
import {
  ImageBackground,
  View,
  Image,
  Text,
  SafeAreaView,
  TouchableOpacity,
} from "react-native";

/**
 * Local Imports
 */
import styles, { colors } from "./ResetPasswordScreen.style";

export const ResetPasswordScreen = () => {
  return (
    <SafeAreaView style={[styles.screen]}>
      <View style={[styles.view]}>
        <Text style={styles.text}>Password Reset</Text>
      </View>
    </SafeAreaView>
  );
};
