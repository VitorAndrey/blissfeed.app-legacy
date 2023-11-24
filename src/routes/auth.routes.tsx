import {
  createNativeStackNavigator,
  NativeStackNavigationProp,
} from "@react-navigation/native-stack";

import { Welcome } from "@screens/Welcome";
import { SignIn } from "@screens/SignIn";
import { SignUp } from "@screens/SignUp";
import { CompleteSignUp } from "@screens/CompleteSignUp";

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
