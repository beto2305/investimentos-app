import React, { useContext, useEffect, useState } from "react";
import { NavigationContainer } from "@react-navigation/native";
import { View, ActivityIndicator } from "react-native";

import Firebase from "app/config/firebase";

import { AuthStack, HomeTabs, AuthenticatedUserContext } from "app/navigation";

import { AuthContext } from "app/context/AuthContext";
const auth = Firebase.auth();

export const RootNavigator = () => {
  //const { user, setUser } = useContext(AuthenticatedUserContext);
  const { user, setUser } = useContext(AuthContext);

  const [isLoading, setIsLoading] = useState(true);

  console.log(auth);

  useEffect(() => {
    // onAuthStateChanged returns an unsubscriber
    const unsubscribeAuth = auth.onAuthStateChanged(
      async (authenticatedUser) => {
        try {
          await (authenticatedUser
            ? setUser(authenticatedUser)
            : setUser(null));
          setIsLoading(false);
        } catch (error) {
          console.log(error);
        }
      }
    );

    // unsubscribe auth listener on unmount
    return unsubscribeAuth;
  }, []);

  if (isLoading) {
    return (
      <View style={{ flex: 1, justifyContent: "center", alignItems: "center" }}>
        <ActivityIndicator size="large" />
      </View>
    );
  }

  return (
    <NavigationContainer>
      {user ? <HomeTabs /> : <AuthStack />}
    </NavigationContainer>
  );
};
