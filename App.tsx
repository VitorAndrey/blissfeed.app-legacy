/* eslint-disable simple-import-sort/imports */
import "react-native-gesture-handler";
/* eslint-enable simple-import-sort/imports */

import {
  Inter_400Regular,
  Inter_600SemiBold,
  useFonts,
} from "@expo-google-fonts/inter";
import { Itim_400Regular } from "@expo-google-fonts/itim";
import { StatusBar } from "expo-status-bar";
import { useColorScheme } from "nativewind";

import { Routes } from "@routes/index";

import { AppProvider } from "@layout/AppProvider";
import { Loading } from "@layout/Loading";

// import { MMKV } from "react-native-mmkv";
// export const storage = new MMKV({ id: "blissfeed" });

export default function App() {
  const [fontsLoaded] = useFonts({
    Inter_400Regular,
    Inter_600SemiBold,
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
