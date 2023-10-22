import { View, TouchableOpacity } from "react-native";

import { useNavigation } from "@react-navigation/native";
import { Text } from "@ui//Text";
import { AuthNavigationRoutesProps, AuthRoutes } from "@routes/auth.routes";

export function Splash() {
  const natigation = useNavigation<AuthNavigationRoutesProps>();

  function handleNavigate(route: keyof AuthRoutes) {
    if (route) natigation.navigate(route);
  }

  return (
    <View className="flex-1 items-center justify-center">
      <Text className="mb-20 font-happy-monkey text-4xl">Blissfeed</Text>

      <TouchableOpacity
        onPress={() => handleNavigate("SignIn")}
        className="mb-4"
      >
        <Text>Login</Text>
      </TouchableOpacity>

      <TouchableOpacity onPress={() => handleNavigate("SignUp")}>
        <Text>Cadastro</Text>
      </TouchableOpacity>
    </View>
  );
}
