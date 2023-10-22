import { useNavigation } from "@react-navigation/native";
import { X } from "lucide-react-native";
import { TouchableOpacity } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";

export function CreatePost() {
  const navigation = useNavigation();

  function handleGoBack() {
    navigation.goBack();
  }

  return (
    <SafeAreaView className="flex-1 px-4">
      <TouchableOpacity onPress={handleGoBack}>
        <X color="black" />
      </TouchableOpacity>
    </SafeAreaView>
  );
}
