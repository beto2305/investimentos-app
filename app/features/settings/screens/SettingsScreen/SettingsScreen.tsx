import React from "react";
import { StatusBar } from "expo-status-bar";
import { Text, SafeAreaView, View } from "react-native";

/**
 * Local Imports
 */
import styles, { colors } from "./SettingsScreen.style";

export const SettingsScreen = () => {
  return (
    <SafeAreaView style={[styles.screen]}>
      <View style={[styles.view]}>
        <Text style={styles.text}>Settings</Text>
      </View>
    </SafeAreaView>
  );
};
