import {
  createNativeStackNavigator,
  NativeStackNavigationProp,
} from "@react-navigation/native-stack";

import { CompleteRegister } from "@screens/auth/CompleteRegister";
import { Login } from "@screens/auth/Login";
import { Register } from "@screens/auth/Register";
import { Welcome } from "@screens/auth/Welcome";

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
      screenOptions={{
        headerShown: false,
        animation: "fade",
      }}
    >
      <Screen name="Welcome" component={Welcome} />
      <Screen name="Login" component={Login} />
      <Screen name="Register" component={Register} />
      <Screen name="CompleteRegister" component={CompleteRegister} />
    </Navigator>
  );
}
