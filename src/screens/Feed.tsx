import { useCallback, useRef, useState } from "react";
import { FlatList, RefreshControl } from "react-native";

import { SafeAreaView } from "react-native-safe-area-context";

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
