import { createNativeStackNavigator } from "@react-navigation/native-stack";

import { SignIn } from "@screens/SignIn";

type AuthRoutesProps = {
  SignIn: undefined;
};

const Stack = createNativeStackNavigator<AuthRoutesProps>();

export function AuthRoutes() {
  return (
    <Stack.Navigator>
      <Stack.Screen name="SignIn" component={SignIn} />
    </Stack.Navigator>
  );
}
