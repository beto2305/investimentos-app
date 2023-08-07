export { AuthStack } from "./AuthStack";
export { HomeTabs } from "./HomeTabs";

export {
  AuthenticatedUserProvider,
  AuthenticatedUserContext,
} from "./AuthenticatedUserProvider";
export { RootNavigator } from "./RootNavigator";

import type { NativeStackNavigationProp } from "@react-navigation/native-stack";

// auth
export type AuthStackNavigatorParamList = {
  ResetPassword: undefined;
  Login: undefined;
  Register: undefined;
};

export type AuthNavigationProp = NativeStackNavigationProp<
  AuthStackNavigatorParamList,
  "ResetPassword"
>;
