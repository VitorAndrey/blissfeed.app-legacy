import { useContext, useRef, useState } from "react";
import { TouchableOpacity, View, TextInput, Keyboard } from "react-native";

import { ArrowLeft } from "lucide-react-native";

import { SafeAreaView } from "react-native-safe-area-context";
import { SearchContext } from "@contexts/SearchContext";

export function Search() {
  const { isSearching, handleStartSearching, handleStopSearching } =
    useContext(SearchContext);
  const [inputValue, setInputValue] = useState<string>("");

  const inputRef = useRef<TextInput>(null);

  function handleBackArrow() {
    Keyboard.dismiss();
    handleStopSearching();
  }

  return (
    <SafeAreaView className="flex-1 px-4">
      <View className="flex-row items-center">
        {isSearching && (
          <TouchableOpacity
            onPress={handleBackArrow}
            className="items-center justify-center py-2 pr-2"
          >
            <ArrowLeft color="black" />
          </TouchableOpacity>
        )}

        <TextInput
          ref={inputRef}
          onFocus={handleStartSearching}
          placeholder="Search"
          value={inputValue}
          onChangeText={setInputValue}
          className="h-10 flex-1 rounded-3xl bg-zinc-200 px-6"
        />
      </View>
    </SafeAreaView>
  );
}
