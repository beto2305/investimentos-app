import React from "react";
import { createNativeStackNavigator } from "@react-navigation/native-stack";

// local imports

import { ResetPasswordScreen } from "app/features/resetPassword/screens/ResetPasswordScreen";
import { LoginScreen } from "app/features/login/screens/LoginScreen";
import { RegisterScreen } from "app/features/register/screens/RegisterScreen";
import colors from "app/config/colors";
import { Platform } from "react-native";

const Stack = createNativeStackNavigator();

export const AuthStack = () => {
  return (
    <Stack.Navigator
      screenOptions={{
        headerShown: true,
        headerTitleStyle: {
          fontFamily: Platform.OS === "android" ? "Roboto" : "Avenir",
          color: colors.primary,
          fontSize: 18,
        },
        headerTintColor: colors.primary,
      }}
    >
      <Stack.Screen
        name="Login"
        component={LoginScreen}
        options={{ headerShown: false }}
      />
      <Stack.Screen
        name="Register"
        component={RegisterScreen}
        options={{
          title: "Create a new account",
        }}
      />
      <Stack.Screen
        name="ResetPassword"
        component={ResetPasswordScreen}
        options={{ title: "Reset your password" }}
      />
    </Stack.Navigator>
  );
};
