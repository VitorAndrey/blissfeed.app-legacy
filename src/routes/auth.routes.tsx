import {
  createNativeStackNavigator,
  NativeStackNavigationProp,
} from "@react-navigation/native-stack";

import { CompleteRegister } from "@screens/auth/CompleteRegister";
import { Login } from "@screens/auth/Login";
import { Onboarding } from "@screens/auth/Onboarding";
import { Register } from "@screens/auth/Register";
import { Welcome } from "@screens/auth/Welcome";

export type AuthRoutes = {
  Welcome: undefined;
  Login: undefined;
  OnBoarding: undefined;
  Register: undefined;
  CompleteRegister: undefined;
};

export type AuthNavigationRoutesProps = NativeStackNavigationProp<AuthRoutes>;

const { Navigator, Screen } = createNativeStackNavigator<AuthRoutes>();

export function AuthRoutes() {
  return (
    <Navigator
      initialRouteName="Welcome"
      screenOptions={{
        headerShown: false,
        animation: "none",
      }}
    >
      <Screen name="Welcome" component={Welcome} />
      <Screen name="Login" component={Login} />
      <Screen name="OnBoarding" component={Onboarding} />
      <Screen name="Register" component={Register} />
      <Screen name="CompleteRegister" component={CompleteRegister} />
    </Navigator>
  );
}
