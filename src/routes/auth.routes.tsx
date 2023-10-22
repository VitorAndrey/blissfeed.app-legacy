import {
  createNativeStackNavigator,
  NativeStackNavigationProp,
} from "@react-navigation/native-stack";

import { Splash } from "@screens/Splash";
import { SignIn } from "@screens/SignIn";
import { SignUp } from "@screens/SignUp";
import { CompleteSignUp } from "@screens/CompleteSignUp";

export type AuthRoutes = {
  Splash: undefined;
  SignIn: undefined;
  SignUp: undefined;
  CompleteSignUp: undefined;
};

export type AuthNavigationRoutesProps = NativeStackNavigationProp<AuthRoutes>;

const { Navigator, Screen } = createNativeStackNavigator<AuthRoutes>();

export function AuthRoutes() {
  return (
    <Navigator initialRouteName="Splash" screenOptions={{ headerShown: false }}>
      <Screen name="Splash" component={Splash} />
      <Screen name="SignIn" component={SignIn} />
      <Screen name="SignUp" component={SignUp} />
      <Screen name="CompleteSignUp" component={CompleteSignUp} />
    </Navigator>
  );
}
