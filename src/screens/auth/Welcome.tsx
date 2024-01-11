import { Image, View } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";

import { useNavigation } from "@react-navigation/native";
import { Button } from "@ui/Button";
import { Text } from "@ui/Text";
import { TextButton } from "@ui/TextButton";

import { AuthNavigationRoutesProps } from "@routes/auth.routes";

export function Welcome() {
  const navigation = useNavigation<AuthNavigationRoutesProps>();

  function handleNavigateToRegister() {
    navigation.navigate("Register");
  }

  function handleNavigateToLogin() {
    navigation.navigate("Login");
  }

  return (
    <SafeAreaView className="flex-1 py-6">
      <View className="flex-row items-center justify-center gap-2">
        <View className="h-8 w-8 rounded-full bg-theme-primary"></View>
        <Text className="font-itim-400 text-3xl">Blissfeed</Text>
      </View>

      <View className="flex-1 p-8">
        <Image
          className="h-full w-full"
          source={require("../../assets/welcome.png")}
        />
      </View>

      <View className="items-center px-10">
        <Text className="mb-6 max-w-[200px] text-center font-inter-600 text-2xl">
          Compartilhe{" "}
          <Text className="font-inter-600 text-theme-primary">Paz </Text>
          Cultive
          <Text className="font-inter-600 text-theme-primary"> Alegria</Text>
        </Text>

        <Text className="text-center text-theme-gray-medium">
          Do desabafo à serenidade, da partilha à alegria. Compartilhe amor com
          Blissfeed.
        </Text>

        <Button
          touchableOpacityProps={{
            containerClass: "my-5",
            onPress: handleNavigateToRegister,
          }}
        >
          Vamos começar!
        </Button>

        <View className="flex-row items-center justify-center">
          <Text className="mr-1">Já tem uma conta?</Text>
          <TextButton
            underline
            touchableOpacityProps={{
              onPress: handleNavigateToLogin,
            }}
          >
            Entrar!
          </TextButton>
        </View>
      </View>
    </SafeAreaView>
  );
}
