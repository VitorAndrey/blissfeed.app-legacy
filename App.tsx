import "react-native-gesture-handler";

import { useColorScheme } from "nativewind";

import { StatusBar } from "expo-status-bar";

import {
  useFonts,
  HappyMonkey_400Regular,
} from "@expo-google-fonts/happy-monkey";
import { Itim_400Regular } from "@expo-google-fonts/itim";
import { Poppins_400Regular } from "@expo-google-fonts/poppins";

import { Routes } from "@routes/index";

import { Loading } from "@layout/Loading";
import { AppProvider } from "@layout/AppProvider";

export default function App() {
  const [fontsLoaded] = useFonts({
    HappyMonkey_400Regular,
    Poppins_400Regular,
    Itim_400Regular,
  });

  const { colorScheme } = useColorScheme();

  return (
    <AppProvider>
      <StatusBar
        style={colorScheme === "light" ? "dark" : "light"}
        translucent
        backgroundColor="transparent"
      />

      {fontsLoaded ? <Routes /> : <Loading />}
    </AppProvider>
  );
}
