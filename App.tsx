import {
  useFonts,
  HappyMonkey_400Regular,
} from "@expo-google-fonts/happy-monkey";

import { Poppins_400Regular } from "@expo-google-fonts/poppins";
import { Loading } from "@layout//Loading";
import { Routes } from "@routes/Routes";

import { StatusBar } from "expo-status-bar";

import { View } from "react-native";

export default function App() {
  let [fontsLoaded] = useFonts({
    HappyMonkey_400Regular,
    Poppins_400Regular,
  });

  return (
    <View className="flex-1">
      {fontsLoaded ? <Routes /> : <Loading />}
      <StatusBar style="auto" />
    </View>
  );
}
