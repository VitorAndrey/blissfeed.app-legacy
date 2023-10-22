import { useNavigation } from "@react-navigation/native";
import { AuthNavigationRoutesProps, AuthRoutes } from "@routes/auth.routes";
import { Text } from "@ui//Text";
import { TouchableOpacity } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";

export function SignUp() {
  const natigation = useNavigation<AuthNavigationRoutesProps>();

  function handleNavigate(route: keyof AuthRoutes) {
    if (route) natigation.navigate(route);
  }

  return (
    <SafeAreaView className="flex-1 items-center justify-center">
      <TouchableOpacity onPress={() => handleNavigate("CompleteSignUp")}>
        <Text>Terminar Cadastro</Text>
      </TouchableOpacity>
    </SafeAreaView>
  );
}
