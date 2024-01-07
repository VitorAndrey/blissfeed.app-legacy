import AsyncStorage from "@react-native-async-storage/async-storage";

export async function setViewedOnboarding() {
  await AsyncStorage.setItem("@viewedOnboarding", "true");
}
