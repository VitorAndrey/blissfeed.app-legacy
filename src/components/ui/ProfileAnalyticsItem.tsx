import { View } from "react-native";

import { Text } from "@ui/Text";

type ProfileAnalyticsItemProps = {
  value: string;
  description: string;
};

export function ProfileAnalyticsItem({
  value,
  description,
}: ProfileAnalyticsItemProps) {
  return (
    <View className="flex-1 items-center">
      <Text>{value}</Text>
      <Text className="text-xs text-theme-gray-medium">{description}</Text>
    </View>
  );
}
