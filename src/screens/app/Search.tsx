import { useCallback, useContext, useRef, useState } from "react";
import {
  FlatList,
  Keyboard,
  TextInput,
  TouchableOpacity,
  View,
} from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";

import { Text } from "@ui/Text";

import { Post } from "@models/index";
import { SearchContext } from "@contexts/SearchContext";

import { ArrowLeft } from "lucide-react-native";

import colors from "@theme/colors";

export function Search() {
  const { isSearching, handleStartSearching, handleStopSearching } =
    useContext(SearchContext);
  const [inputValue, setInputValue] = useState<string>("");

  const inputRef = useRef<TextInput>(null);

  function handleBackArrow() {
    Keyboard.dismiss();
    handleStopSearching();
  }

  const renderPostItem = useCallback(({ item }: { item: Post }) => {
    return <Text>{item.content}</Text>;
  }, []);

  const data: [] = [];

  return (
    <SafeAreaView className="flex-1">
      <View className="flex-row items-center px-4">
        {isSearching && (
          <TouchableOpacity
            onPress={handleBackArrow}
            className="items-center justify-center py-2 pr-2"
          >
            <ArrowLeft color={colors.theme.gray.dark} />
          </TouchableOpacity>
        )}

        <TextInput
          ref={inputRef}
          onFocus={handleStartSearching}
          placeholder="Search"
          value={inputValue}
          onChangeText={setInputValue}
          className="h-10 flex-1 rounded-3xl bg-theme-gray-light px-6"
        />
      </View>

      <FlatList data={data} renderItem={renderPostItem} className="flex-1" />
    </SafeAreaView>
  );
}
