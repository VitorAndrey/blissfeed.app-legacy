import { SearchContext } from "@contexts/SearchContext";
import { Text } from "@ui//Text";
import { ArrowLeft } from "lucide-react-native";
import { useContext } from "react";
import { TextInput, TouchableOpacity, View } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";

export function Search() {
  const { isSearching, setIsSearching } = useContext(SearchContext);

  return (
    <SafeAreaView className="flex-1 px-4">
      <View className="flex-row items-center gap-4">
        {isSearching && (
          <TouchableOpacity onPress={() => setIsSearching(false)}>
            <ArrowLeft color="black" />
          </TouchableOpacity>
        )}

        <TouchableOpacity onPress={() => setIsSearching(true)}>
          <Text>Search</Text>
        </TouchableOpacity>
      </View>
    </SafeAreaView>
  );
}
