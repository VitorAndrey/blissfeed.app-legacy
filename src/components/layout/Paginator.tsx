import { Animated, useWindowDimensions, View } from "react-native";

import colors from "@theme/colors";

type PaginatorProps = {
  data: { id: string; title: string; description: string; image: string }[];
  scrollX: Animated.Value;
};

export function Paginator({ data, scrollX }: PaginatorProps) {
  const { width } = useWindowDimensions();

  return (
    <View className="flex-1 flex-row items-center justify-center gap-2">
      {data.map((_, i) => {
        const inputRange = [(i - 1) * width, i * width, (i + 1) * width];

        const dotSize = scrollX.interpolate({
          inputRange,
          outputRange: [10, 12, 10],

          extrapolate: "clamp",
        });

        const opacity = scrollX.interpolate({
          inputRange,
          outputRange: [0.3, 1, 0.3],

          extrapolate: "clamp",
        });

        return (
          <Animated.View
            key={i.toString()}
            style={{
              opacity,
              width: dotSize,
              height: dotSize,
              borderRadius: 999,
              backgroundColor: colors.theme.primary,
            }}
          ></Animated.View>
        );
      })}
    </View>
  );
}
