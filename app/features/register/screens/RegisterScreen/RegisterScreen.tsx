import React from "react";
import { View, SafeAreaView, StyleSheet } from "react-native";

/**
 * Local Imports
 */
import styles from "./RegisterScreen.style";
import { TextInputField } from "app/commons/components/TextInputField";
import { Button } from "app/commons/components/Button";
TextInputField;

export const RegisterScreen = () => {
  return (
    <SafeAreaView style={[styles.screen]}>
      <View style={styless.container}>
        <View style={{ backgroundColor: "" }}>
          <TextInputField
            fieldIcon={"account-outline"}
            placeholder={"Username"}
            fiedlAction={() => {}}
          />
        </View>
        <View style={{ backgroundColor: "" }}>
          <TextInputField
            fieldIcon={"email-outline"}
            placeholder={"Email"}
            fiedlAction={() => {}}
          />
        </View>
        <View style={{ backgroundColor: "" }}>
          <TextInputField
            fieldIcon={"cellphone"}
            placeholder={"Phone"}
            fiedlAction={() => {}}
          />
        </View>
        <View style={{ backgroundColor: "" }}>
          <TextInputField
            fieldIcon={"lock-outline"}
            placeholder={"Password"}
            fiedlAction={() => {}}
          />
        </View>
        <View style={{ backgroundColor: "" }}>
          <TextInputField
            fieldIcon={"lock-outline"}
            placeholder={"Retype password"}
            fiedlAction={() => {}}
          />
        </View>
        <View>
          <Button label={"Register"} onPress={() => {}} />
        </View>
      </View>
    </SafeAreaView>
  );
};

const styless = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
  },
});
