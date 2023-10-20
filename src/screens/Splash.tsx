import { Button } from "@ui//Button";
import { Text } from "@ui//Text";
import { Dimensions, Image, View } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";

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
      <SafeAreaView className="absolute z-50 h-full w-full items-center justify-between bg-black/70 py-12">
        <Text className="font-happy-monkey text-5xl text-white">Blissfeed</Text>

        <View className="w-full gap-5 px-10">
          <Button>Login</Button>
          <Button>SignUp</Button>
        </View>
      </SafeAreaView>

      <Image
        source={require("../assets/carrousel-1.jpg")}
        className="absolute z-0 h-full w-full object-cover"
      />
    </View>
  );
}
