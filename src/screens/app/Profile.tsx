// import { useState } from "react";
// import { FlatList } from "react-native";
import { Image, TouchableOpacity, View } from "react-native";

import { Button } from "@ui/Button";
import { ProfileAnalyticsItem } from "@ui/ProfileAnalyticsItem";
import { Text } from "@ui/Text";

import {
  HeartIcon,
  MessageSquareIcon,
  MoreHorizontalIcon,
  UserPlus2Icon,
} from "lucide-react-native";

import colors from "@theme/colors";

export function Profile() {
  // const [data, setData] = useState([{ id: "1", name: "jhon" }]);

  return (
    <View className="flex-1">
      <View className="relative h-40 w-full">
        <Image
          source={{ uri: "https://github.com/X.png" }}
          className="h-full w-full"
        />

        <TouchableOpacity
          activeOpacity={0.8}
          className="absolute top-2 right-2 h-7 w-7 items-center justify-center rounded-full bg-theme-white/80"
        >
          <MoreHorizontalIcon color={colors.theme.black} size={18} />
        </TouchableOpacity>
      </View>
      <View className="mx-4 items-center">
        <View className="-mt-8 h-20 w-20 rounded-full border-4 border-theme-white">
          <Image
            source={{ uri: "https://github.com/Mat.png" }}
            className="h-full w-full rounded-full"
          />
        </View>

        <Text className="mt-1">Jhon Doe</Text>

        <View className="flex-row items-center gap-1">
          <Text className="text-xs text-theme-gray-medium">
            Vencerei a(o) Ansiedade
          </Text>
          <HeartIcon
            fill={colors.theme.primary}
            color={colors.theme.primary}
            size={14}
          />
        </View>

        <View className="my-8 flex-row">
          <ProfileAnalyticsItem value="54h" description="assistidas" />

          <View className="mx-2 h-full w-px bg-theme-gray-light"></View>

          <ProfileAnalyticsItem value="22" description="desabafos" />

          <View className="mx-2 h-full w-px bg-theme-gray-light"></View>

          <ProfileAnalyticsItem value="8" description="ajudas" />
        </View>

        <View className="flex-row">
          <Button
            icon={() => (
              <UserPlus2Icon
                color={colors.theme.white}
                size={16}
                className="ml-1"
              />
            )}
            touchableOpacityProps={{ containerClass: "flex-1 mr-2" }}
          >
            Seguir
          </Button>
          <Button
            icon={() => (
              <MessageSquareIcon
                color={colors.theme.black}
                size={12}
                className="ml-1"
              />
            )}
            variant="secondary"
            touchableOpacityProps={{ containerClass: "flex-1" }}
          >
            Message
          </Button>
        </View>

        {/* <FlatList
          data={data}
          renderItem={({ item }) => <Text>{item.name}</Text>}
          keyExtractor={(item) => item.id}
        /> */}
      </View>
    </View>
  );
}
