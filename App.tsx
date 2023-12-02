/* eslint-disable simple-import-sort/imports */
import "react-native-gesture-handler";
/* eslint-enable simple-import-sort/imports */

import { Inter_400Regular, useFonts } from "@expo-google-fonts/inter";
import { Itim_400Regular } from "@expo-google-fonts/itim";
import { StatusBar } from "expo-status-bar";
import { useColorScheme } from "nativewind";

import { Routes } from "@routes/index";

import { AppProvider } from "@components/layout/AppProvider";
import { Loading } from "@components/layout/Loading";

export default function App() {
  const [fontsLoaded] = useFonts({
    Inter_400Regular,
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
