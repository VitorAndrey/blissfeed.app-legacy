import { View, TouchableOpacity } from "react-native";

import { useNavigation } from "@react-navigation/native";
import { AuthNavigationRoutesProps } from "@routes/auth.routes";

import { Text } from "@ui//Text";

export function Splash() {
  const navigation = useNavigation<AuthNavigationRoutesProps>();

  function handleNavigateToSignIn() {
    navigation.navigate("SignIn");
  }

  function handleNavigateToSignUp() {
    navigation.navigate("SignUp");
  }

  return (
    <View className="flex-1 items-center justify-center">
      <Text className="mb-20 font-happy-monkey text-4xl">Blissfeed</Text>

      <TouchableOpacity onPress={handleNavigateToSignIn} className="mb-4">
        <Text>Login</Text>
      </TouchableOpacity>

      <TouchableOpacity onPress={handleNavigateToSignUp}>
        <Text>Cadastro</Text>
      </TouchableOpacity>
    </View>
  );
}
