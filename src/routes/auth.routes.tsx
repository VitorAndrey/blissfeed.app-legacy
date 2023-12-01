import {
  createNativeStackNavigator,
  NativeStackNavigationProp,
} from "@react-navigation/native-stack";

import { Welcome } from "@screens/auth/Welcome";
import { Login } from "@screens/auth/Login";
import { Register } from "@screens/auth/Register";
import { CompleteRegister } from "@screens/auth/CompleteRegister";

export type AuthRoutes = {
  Welcome: undefined;
  Login: undefined;
  Register: undefined;
  CompleteRegister: undefined;
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
      <Screen name="Login" component={Login} />
      <Screen name="Register" component={Register} />
      <Screen name="CompleteRegister" component={CompleteRegister} />
    </Navigator>
  );
}
