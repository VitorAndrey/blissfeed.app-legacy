import { Image, View } from "react-native";

import { useNavigation } from "@react-navigation/native";
import { Button } from "@ui/Button";
import { Text } from "@ui/Text";
import { TextButton } from "@ui/TextButton";

import { AuthNavigationRoutesProps } from "@routes/auth.routes";

export function Welcome() {
  const navigation = useNavigation<AuthNavigationRoutesProps>();

  function handleNavigateToOnBoarding() {
    navigation.navigate("OnBoarding");
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

      <View className="flex-1 p-8">
        <Image
          className="h-full w-full"
          source={{ uri: "https://github.com/Rick.png" }}
        />
      </View>

      <View className="items-center px-10">
        <Text className="mb-6 max-w-[200px] text-center font-inter-600 text-xl">
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
          touchableOpacityProps={{
            containerClass: "my-5",
            onPress: handleNavigateToOnBoarding,
          }}
          textProps={{ textClass: "text-theme-white" }}
        >
          Let&apos;s Get Started
        </Button>

        <View className="flex-row items-center justify-center">
          <Text className="mr-1">Already hava an account?</Text>
          <TextButton
            underline
            touchableOpacityProps={{
              onPress: handleNavigateToLogin,
            }}
          >
            SignIn!
          </TextButton>
        </View>
      </View>
    </View>
  );
}
