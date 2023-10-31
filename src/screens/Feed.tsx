import { useCallback, useRef, useState } from "react";
import { FlatList, RefreshControl, TouchableOpacity, View } from "react-native";

import { SafeAreaView } from "react-native-safe-area-context";

import { Text } from "@ui/Text";
import { Post } from "@layout/Post";
import { Loading } from "@layout/Loading";

import { getPosts } from "@services/fetchPosts";
import { useQuery } from "@tanstack/react-query";

export function Feed() {
  const [refreshing, setRefreshing] = useState<boolean>(false);

  const { data, isLoading } = useQuery({
    queryKey: ["posts"],
    queryFn: getPosts,
  });

  const flatListRef = useRef<FlatList>(null);

  function scrollToTop() {
    if (flatListRef.current) {
      flatListRef.current.scrollToOffset({ animated: true, offset: 0 });
    }
  }

  const onRefresh = useCallback(() => {
    setRefreshing(true);
    setTimeout(() => {
      setRefreshing(false);
    }, 2000);
  }, []);

  return (
    <SafeAreaView className="flex-1">
      <View className="bg-red z-50 h-16 items-center justify-center border-b border-zinc-100 bg-background-light dark:bg-background-dark">
        <TouchableOpacity
          onPress={scrollToTop}
          className="rounded-xl bg-red-300 p-2"
        >
          <Text>Scroll to Top</Text>
        </TouchableOpacity>
      </View>

      {!isLoading ? (
        <FlatList
          ref={flatListRef}
          refreshControl={
            <RefreshControl refreshing={refreshing} onRefresh={onRefresh} />
          }
          data={data}
          showsVerticalScrollIndicator={false}
          renderItem={({ item }) => <Post data={item} />}
          keyExtractor={(item) => item.id}
          contentContainerStyle={{
            flexGrow: 1,
            gap: 20,
            paddingVertical: 30,
            paddingHorizontal: 20,
          }}
        />
      ) : (
        <Loading />
      )}
    </SafeAreaView>
  );
}
