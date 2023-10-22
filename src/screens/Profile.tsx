import { UserContext } from "@contexts/UserContext";
import { Text } from "@ui//Text";
import { useContext } from "react";
import { TouchableOpacity } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";

export function Profile() {
  const { setIsUserLogged } = useContext(UserContext);

  function handleSignOut() {
    setIsUserLogged(false);
  }

  return (
    <SafeAreaView className="flex-1 items-center justify-center">
      <TouchableOpacity onPress={handleSignOut}>
        <Text>Sair</Text>
      </TouchableOpacity>
    </SafeAreaView>
  );
}
