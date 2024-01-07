import AsyncStorage from "@react-native-async-storage/async-storage";

export async function viewedOnboarding() {
  const value = await AsyncStorage.getItem("@viewedOnboarding");

  if (value !== null) {
    return true;
  } else return false;
}
