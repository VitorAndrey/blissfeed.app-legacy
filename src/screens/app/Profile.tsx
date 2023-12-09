import { useContext } from "react";
import { TouchableOpacity, View } from "react-native";

import { Text } from "@ui/Text";

import { UserContext } from "@contexts/UserContext";

export function Profile() {
  const { handleUpdateUser } = useContext(UserContext);

  function handleSignOut() {
    // await SignOut
    handleUpdateUser(null);
  }

  return (
    <View className="flex-1 items-center justify-center">
      <TouchableOpacity onPress={handleSignOut}>
        <Text>Sair</Text>
      </TouchableOpacity>
    </View>
  );
}
