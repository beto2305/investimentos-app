import React, { useState } from "react";
import {
  View,
  Image,
  Text,
  SafeAreaView,
  TouchableOpacity,
  ActivityIndicator,
} from "react-native";

import { useNavigation } from "@react-navigation/native";

/**
 * Local Imports
 */
import styles from "./LoginScreen.style";
import { AppLogo } from "app/assets";

import { SocialButton } from "app/features/login/components/SocialButton";

import { AuthNavigationProp } from "app/navigation";

import { GoogleIcon, FacebookIcon, TwitterIcon } from "app/assets/login";
import { Button } from "app/commons/components/Button";

import { TextInputField } from "app/commons/components/TextInputField";

import { ErrorMessage } from "app/commons/components/ErrorMessage";

import { useAuth } from "app/hooks/useAuth";

export const LoginScreen = () => {
  const navigation = useNavigation<AuthNavigationProp>();
  const { login, loginError, isLoading } = useAuth();

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const isSocialLoginEnabled = false;
  const handleLogin = async () => {
    if (email !== "" && password !== "") {
      login(email, password);
    }
  };

  return (
    <SafeAreaView style={styles.screen}>
      <View>
        <View style={[styles.viewAppLogo]}>
          <Image style={styles.appLogo} source={AppLogo} />
          <Text style={[styles.text, styles.textAppName]}>Investimentos</Text>
        </View>
        {isLoading ? (
          <View
            style={{ flex: 1, justifyContent: "center", alignItems: "center" }}
          >
            <ActivityIndicator size="large" />
          </View>
        ) : (
          <>
            <View style={{ backgroundColor: "" }}>
              <TextInputField
                fieldIcon={"email-outline"}
                placeholder={"Email"}
                keyboardType="email-address"
                onChangeText={(text) => setEmail(text)}
              />
            </View>
            <View style={{ backgroundColor: "" }}>
              <TextInputField
                fieldIcon={"lock-outline"}
                placeholder={"Password"}
                onChangeText={(text) => setPassword(text)}
                isPasswordField={true}
              />
            </View>
            <View style={{ justifyContent: "center", flexDirection: "row" }}>
              <TouchableOpacity
                onPress={() => navigation.navigate("ResetPassword")}
              >
                <Text style={[styles.text, styles.textLink]}>
                  {"Forgot your password?"}
                </Text>
              </TouchableOpacity>
            </View>
            <View>
              <Button label={"Login"} onPress={handleLogin} />
            </View>
            {/* FIXME: mensagens de erro mudam largura da tela*/}
            {loginError ? (
              <View style={{ marginBottom: 10 }}>
                <ErrorMessage error={loginError} visible={true} />
              </View>
            ) : null}

            <View style={styles.viewSignUp}>
              <Text style={[styles.text]}>Don't have an account?</Text>
              <TouchableOpacity onPress={() => navigation.navigate("Register")}>
                <Text style={[styles.text, styles.textLink]}>Sign up</Text>
              </TouchableOpacity>
            </View>
            {isSocialLoginEnabled && (
              <>
                <View style={styles.viewAlternativeLogin}>
                  <Text style={styles.text}>Or, login with ...</Text>
                </View>
                <View style={styles.viewSocialLogin}>
                  <SocialButton imageSource={GoogleIcon} onPress={() => {}} />
                  <SocialButton imageSource={FacebookIcon} onPress={() => {}} />
                  <SocialButton imageSource={TwitterIcon} onPress={() => {}} />
                </View>
              </>
            )}
          </>
        )}
      </View>
    </SafeAreaView>
  );
};
