import { useRef, useState } from "react";
import { Animated, FlatList, View, ViewToken } from "react-native";

import { OnBoardingItem } from "@layout/OnBoardingItem";
import { Paginator } from "@layout/Paginator";
import { IconButton } from "@ui/IconButton";
import { TextButton } from "@ui/TextButton";

import { ArrowLeftIcon, ArrowRightIcon } from "lucide-react-native";

import colors from "@theme/colors";

type ViewableItemsType = {
  viewableItems: ViewToken[];
  changed: ViewToken[];
};

export function Onboarding() {
  const [currentIndex, setCurrentIndex] = useState<number | null>(0);

  const scrollX = useRef(new Animated.Value(0)).current;
  const slidesRef = useRef(null);

  const viewableItemsChanged = useRef(
    ({ viewableItems }: ViewableItemsType) => {
      setCurrentIndex(viewableItems[0].index);
    },
  ).current;

  const viewConfig = useRef({ viewAreaCoveragePercentThreshold: 50 }).current;

  const data = [
    {
      id: "1",
      title: "lorem vnasuior feuibsa",
      description:
        "Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolorum recusandae repudiandae dicta!",
      image: "https://github.com/Matt.png",
    },
    {
      id: "2",
      title: "lorem vnasuior feuibsa",
      description:
        "Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolorum recusandae repudiandae dicta!",
      image: "https://github.com/Jacob.png",
    },
    {
      id: "3",
      title: "lorem vnasuior feuibsa",
      description:
        "Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolorum recusandae repudiandae dicta!",
      image: "https://github.com/Mattheo.png",
    },
  ];

  return (
    <View className="flex-1 items-center justify-center">
      <TextButton touchableOpacityProps={{ containerClass: "p-4 self-end" }}>
        Skip
      </TextButton>

      <FlatList
        data={data}
        keyExtractor={(item) => item.id}
        renderItem={({ item }) => <OnBoardingItem data={item} />}
        horizontal
        showsHorizontalScrollIndicator={false}
        pagingEnabled
        overScrollMode="never"
        bounces={false}
        contentContainerStyle={{
          flexGrow: 1,
        }}
        onScroll={Animated.event(
          [{ nativeEvent: { contentOffset: { x: scrollX } } }],
          { useNativeDriver: false },
        )}
        scrollEventThrottle={32}
        onViewableItemsChanged={viewableItemsChanged}
        viewabilityConfig={viewConfig}
        ref={slidesRef}
      />

      <View className="flex-row items-center p-8">
        <View className="h-12 w-12">
          {currentIndex !== 0 && (
            <IconButton className="h-full w-full rounded-full border">
              <ArrowLeftIcon color={colors.theme.gray.medium} size={20} />
            </IconButton>
          )}
        </View>

        <Paginator data={data} scrollX={scrollX} />

        <IconButton className="h-12 w-12 rounded-full border border-theme-primary bg-theme-primary">
          <ArrowRightIcon color={colors.theme.white} size={20} />
        </IconButton>
      </View>
    </View>
  );
}
