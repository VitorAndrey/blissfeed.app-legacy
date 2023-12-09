import { useRef, useState } from "react";
import { Animated, FlatList, View, ViewToken } from "react-native";

import { OnBoardingItem } from "@layout/OnBoardingItem";
import { Paginator } from "@layout/Paginator";
import { useNavigation } from "@react-navigation/native";
import { IconButton } from "@ui/IconButton";
import { TextButton } from "@ui/TextButton";

import { AppNavigationRoutesProps } from "@routes/app.routes";

import { ArrowLeftIcon, ArrowRightIcon, CheckIcon } from "lucide-react-native";

import colors from "@theme/colors";

type ViewableItemsType = {
  viewableItems: ViewToken[];
  changed: ViewToken[];
};

export function Onboarding() {
  const [currentIndex, setCurrentIndex] = useState<number | null>(0);
  const navigation = useNavigation<AppNavigationRoutesProps>();

  const scrollX = useRef<Animated.Value>(new Animated.Value(0)).current;
  const slidesRef = useRef<FlatList>(null);

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

  function scrollForwards() {
    if (currentIndex === null || !slidesRef.current) return;

    if (currentIndex < data.length - 1) {
      slidesRef.current.scrollToIndex({ index: currentIndex + 1 });
    } else {
      handleNavigateToFeed();
    }
  }

  function scrollBackwards() {
    if (currentIndex === null || !slidesRef.current) return;

    if (currentIndex !== 0) {
      slidesRef.current.scrollToIndex({ index: currentIndex - 1 });
    } else return;
  }

  function handleNavigateToFeed() {
    navigation.navigate("Feed");
  }

  return (
    <View className="flex-1 items-center justify-center">
      <TextButton
        touchableOpacityProps={{
          containerClass: "p-4 self-end",
          onPress: handleNavigateToFeed,
        }}
      >
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
        <View className="h-10 w-10">
          {currentIndex !== 0 && (
            <IconButton
              onPress={scrollBackwards}
              className="h-full w-full rounded-full border border-theme-gray-medium"
            >
              <ArrowLeftIcon color={colors.theme.gray.medium} size={20} />
            </IconButton>
          )}
        </View>

        <Paginator data={data} scrollX={scrollX} />

        <IconButton
          onPress={scrollForwards}
          className="h-10 w-10 rounded-full border border-theme-primary bg-theme-primary"
        >
          {currentIndex == data.length - 1 ? (
            <CheckIcon color={colors.theme.white} size={20} />
          ) : (
            <ArrowRightIcon color={colors.theme.white} size={20} />
          )}
        </IconButton>
      </View>
    </View>
  );
}
