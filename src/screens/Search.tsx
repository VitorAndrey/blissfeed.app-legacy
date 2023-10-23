import { SearchContext } from "@contexts/SearchContext";
import { Text } from "@ui//Text";
import { ArrowLeft } from "lucide-react-native";
import { useContext } from "react";
import { TouchableOpacity, View } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";

export function Search() {
  const { isSearching, handleStartSearching, handleStopSearching } =
    useContext(SearchContext);

  return (
    <SafeAreaView className="flex-1 px-4">
      <View className="flex-row items-center gap-4">
        {isSearching && (
          <TouchableOpacity onPress={handleStopSearching}>
            <ArrowLeft color="black" />
          </TouchableOpacity>
        )}

        <TouchableOpacity onPress={handleStartSearching}>
          <Text>Search</Text>
        </TouchableOpacity>
      </View>
    </SafeAreaView>
  );
}
