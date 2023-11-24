import {
  createNativeStackNavigator,
  NativeStackNavigationProp,
} from "@react-navigation/native-stack";

import { Welcome } from "@screens/auth/Welcome";
import { SignIn } from "@screens/auth/SignIn";
import { SignUp } from "@screens/auth/SignUp";
import { CompleteSignUp } from "@screens/auth/CompleteSignUp";

export type AuthRoutes = {
  Welcome: undefined;
  SignIn: undefined;
  SignUp: undefined;
  CompleteSignUp: undefined;
};

export type AuthNavigationRoutesProps = NativeStackNavigationProp<AuthRoutes>;

const { Navigator, Screen } = createNativeStackNavigator<AuthRoutes>();

export function AuthRoutes() {
  return (
    <Navigator
      initialRouteName="Welcome"
      screenOptions={{ headerShown: false }}
    >
      <Screen name="Welcome" component={Welcome} />
      <Screen name="SignIn" component={SignIn} />
      <Screen name="SignUp" component={SignUp} />
      <Screen name="CompleteSignUp" component={CompleteSignUp} />
    </Navigator>
  );
}
