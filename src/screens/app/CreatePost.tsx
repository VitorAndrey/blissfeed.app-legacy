import { useState } from "react";
import { TextInput, TouchableOpacity, View } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";

import { useNavigation } from "@react-navigation/native";

import { Mic, MicOff, SendHorizonal, X } from "lucide-react-native";

import { Text } from "@components/ui/Text";

export function CreatePost() {
  const [isRecording, setIsRecording] = useState<boolean>(false);
  const [inputValue, setInputValue] = useState<string>("");

  const navigation = useNavigation();

  function handleIsRecording() {
    setInputValue("");
    setIsRecording((prev) => !prev);
  }

  function handleGoBack() {
    navigation.goBack();
  }

  return (
    <SafeAreaView className="flex-1">
      <View className="flex-row items-center gap-3 px-4">
        <TouchableOpacity onPress={handleGoBack}>
          <X color="black" size={22} />
        </TouchableOpacity>

        <Text className="flex-1">Nova Conversa</Text>

        <TouchableOpacity>
          <Text>Publicar</Text>
        </TouchableOpacity>
      </View>

      <View className="flex-1 px-4"></View>

      <View className="flex-row items-end gap-2 py-2 px-2">
        <View className="flex-1 flex-row items-center rounded-3xl bg-zinc-200 px-5">
          <TouchableOpacity
            className="h-12 justify-center self-end"
            onPress={handleIsRecording}
          >
            {isRecording ? (
              <MicOff color="black" size={20} />
            ) : (
              <Mic color="black" size={20} />
            )}
          </TouchableOpacity>
          <TextInput
            className="max-h-[135] min-h-[12] flex-1 px-4 py-2 text-base"
            multiline={true}
            editable={!isRecording}
            value={inputValue}
            onChangeText={setInputValue}
          />
        </View>

        <TouchableOpacity
          disabled={!inputValue}
          className={`h-12 w-12 items-center justify-center rounded-full pl-1 transition-all
          ${inputValue ? "bg-primary-light" : "bg-zinc-200"}
          `}
        >
          <SendHorizonal color="black" size={20} />
        </TouchableOpacity>
      </View>
    </SafeAreaView>
  );
}
