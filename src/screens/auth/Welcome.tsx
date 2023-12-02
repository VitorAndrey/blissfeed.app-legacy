import { View } from "react-native";

import { useNavigation } from "@react-navigation/native";

import { AuthNavigationRoutesProps } from "@routes/auth.routes";

import { Button } from "@components/ui/Button";
import { Text } from "@components/ui/Text";
import { TextButton } from "@components/ui/TextButton";

export function Welcome() {
  const navigation = useNavigation<AuthNavigationRoutesProps>();

  function handleNavigateToRegister() {
    navigation.navigate("Register");
  }

  function handleNavigateToLogin() {
    navigation.navigate("Login");
  }

  return (
    <View className="flex-1 py-6">
      <View className="flex-row items-center justify-center gap-2">
        <View className="h-8 w-8 rounded-full bg-theme-primary"></View>
        <Text className="font-itim-400 text-3xl">Blissfeed</Text>
      </View>

      <View className="flex-1"></View>

      <View className="items-center px-10">
        <Text className="font-inter-600 mb-6 max-w-[200px] text-center text-xl">
          Your Premier{" "}
          <Text className="font-inter-600 text-theme-primary">
            Social Connection App
          </Text>
        </Text>

        <Text className="text-center text-xs text-theme-gray-medium">
          Lorem ipsum dolor sit amet consectetur. fesfsefsadipisicing elit.
          Eveniet necessitatibus.
        </Text>

        <Button
          touchableOpacityProps={{ containerClass: "my-5" }}
          textProps={{ textClass: "text-theme-white" }}
        >
          Let&apos;s Get Started
        </Button>

        <View className="flex-row items-center">
          <Text className="mr-1">Already hava an account?</Text>
          <TextButton
            underline
            touchableOpacityProps={{
              onPress: handleNavigateToRegister,
            }}
          >
            SignIn!
          </TextButton>
        </View>
      </View>
    </View>
  );
}
