import { Image, View } from "react-native";

import { Text } from "@ui/Text";

type Screen = {
  id: string;
  title: string;
  description: string;
  image: string;
};

type OnBoardingItemProps = {
  data: Screen;
};

export function OnBoardingItem({ data }: OnBoardingItemProps) {
  return (
    <View className="w-screen flex-1 items-center justify-center">
      <Image
        source={{ uri: data.image }}
        className="h-[70%] w-screen justify-center"
      />

      <View className="h-[30%] w-screen items-center justify-center px-10">
        <Text className="mb-6 max-w-[200px] text-center font-inter-600 text-xl">
          {data.title}
        </Text>
        <Text className="text-center text-xs text-theme-gray-medium">
          {data.description}
        </Text>
      </View>
    </View>
  );
}
