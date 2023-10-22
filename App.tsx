import "react-native-gesture-handler";

import { ColorSchemeName } from "react-native";

import {
  useFonts,
  HappyMonkey_400Regular,
} from "@expo-google-fonts/happy-monkey";

import { useColorScheme } from "nativewind";

import { Poppins_400Regular } from "@expo-google-fonts/poppins";
import { AppProvider } from "@layout//AppProvider";
import { Loading } from "@layout//Loading";
import { Routes } from "@routes/index";

import { StatusBar } from "expo-status-bar";

export default function App() {
  let [fontsLoaded] = useFonts({
    HappyMonkey_400Regular,
    Poppins_400Regular,
  });

  const { colorScheme } = useColorScheme();

  const color: ColorSchemeName = colorScheme === "light" ? "dark" : "light";

  return (
    <AppProvider>
      <StatusBar style={color} translucent backgroundColor="transparent" />

      {fontsLoaded ? <Routes /> : <Loading />}
    </AppProvider>
  );
}
