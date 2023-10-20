import { Text } from "@ui//Text";
import { Dimensions, Image, View } from "react-native";

// import Carousel from "react-native-reanimated-carousel";

export function Splash() {
  // const { width, height } = Dimensions.get("screen");
  return (
    <View className="relative flex-1 items-center justify-center">
      {/* <Carousel
        loop
        autoPlay={true}
        autoPlayInterval={10000}
        width={width}
        height={height}
        data={[...new Array(2).keys()]}
        scrollAnimationDuration={1000}
        renderItem={({ index }) => (
          <Image
            source={require("../assets/carrousel-1.jpg")}
            className="absolute z-0 h-full w-full object-cover"
          />
        )}
      /> */}
      <View className="absolute z-50 h-full w-full items-center justify-evenly bg-black/70">
        <Text className="font-happy-monkey text-5xl text-white">Blissfeed</Text>

        <View>
          <Text className="text-white">Login</Text>
          <Text className="text-white">Login</Text>
        </View>
      </View>

      <Image
        source={require("../assets/carrousel-1.jpg")}
        className="absolute z-0 h-full w-full object-cover"
      />
    </View>
  );
}
