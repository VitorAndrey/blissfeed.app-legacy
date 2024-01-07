import AsyncStorage from "@react-native-async-storage/async-storage";

export async function clearOnboarding() {
  await AsyncStorage.removeItem("@viewedOnboarding");
}
