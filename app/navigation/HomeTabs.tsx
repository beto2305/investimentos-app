import React from "react";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import {
  MaterialCommunityIcons,
  MaterialIcons,
  Ionicons,
} from "@expo/vector-icons";

// local imports
import { ResetPasswordScreen } from "app/features/resetPassword/screens/ResetPasswordScreen";
import { SettingsScreen } from "app/features/settings/screens/SettingsScreen";
import colors from "app/config/colors";
import { useAuth } from "app/hooks/useAuth";

const Tab = createBottomTabNavigator();

export const HomeTabs = () => {
  const { logout } = useAuth();

  // TODO: encontrar uma maneira melhor de tratar o erro e exibir na tela
  const handleSignOut = async () => {
    try {
      logout();
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <Tab.Navigator
      initialRouteName="Home"
      screenOptions={{
        headerShown: false,
        tabBarActiveTintColor: colors.primary,
      }}
    >
      <Tab.Screen
        name="Home"
        component={ResetPasswordScreen}
        options={{
          tabBarLabel: "Home",
          tabBarIcon: ({ color }) => (
            <MaterialCommunityIcons name="home" color={color} size={24} />
          ),
        }}
      />
      <Tab.Screen
        name="Settings"
        component={SettingsScreen}
        options={{
          tabBarLabel: "Settings",
          tabBarIcon: ({ color }) => (
            <MaterialIcons name="settings" color={color} size={24} />
          ),
        }}
      />
      <Tab.Screen
        name="Notifications"
        component={SettingsScreen}
        options={{
          tabBarLabel: "Notifications",
          tabBarIcon: ({ color }) => (
            <Ionicons name="notifications" color={color} size={24} />
          ),
        }}
      />
      <Tab.Screen
        name="Logout"
        component={SettingsScreen}
        options={{
          tabBarLabel: "Logout",
          tabBarIcon: ({ color }) => (
            <Ionicons name="log-out" color={color} size={24} />
          ),
        }}
        listeners={{
          tabPress: (e) => {
            // Prevent default action
            e.preventDefault();
            handleSignOut();
          },
        }}
      />
    </Tab.Navigator>
  );
};
