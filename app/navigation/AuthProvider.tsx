import React, { useState, useContext } from "react";
import { ActivityIndicator, View } from "react-native";
import { NavigationContainer } from "@react-navigation/native";

// local imports
import { AuthStack, HomeTabs } from "app/navigation";
import { AuthContext } from "app/context/AuthContext";

export const AuthProvider = () => {
  const [user, setUser] = useState(null);
  const { isLoading } = useContext(AuthContext);

  if (isLoading) {
    return (
      <View style={{ flex: 1, justifyContent: "center", alignItems: "center" }}>
        <ActivityIndicator size="large" />
      </View>
    );
  }

  return (
    <>
      <AuthContext.Provider value={{ user, setUser }}>
        <NavigationContainer>
          {user ? <HomeTabs /> : <AuthStack />}
        </NavigationContainer>
      </AuthContext.Provider>
    </>
  );
};
