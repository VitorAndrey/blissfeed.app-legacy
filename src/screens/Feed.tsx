import { Post } from "@layout/Post";
import { Text } from "@ui/Text";
import { useCallback, useEffect, useRef, useState } from "react";
import { FlatList, RefreshControl, TouchableOpacity, View } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";

import { fetchPosts } from "@services/fetchPosts";

export function Feed() {
  const [posts, setPosts] = useState([]);
  const [refreshing, setRefreshing] = useState(false);

  const onRefresh = useCallback(() => {
    setRefreshing(true);
    fetchPosts();
  }, []);

  function fetchPosts() {
    setTimeout(() => {
      setRefreshing(false);
    }, 2000);
  }

  const flatListRef = useRef<FlatList>(null);

  function scrollToTop() {
    if (flatListRef.current) {
      flatListRef.current.scrollToOffset({ animated: true, offset: 0 });
    }
  }

  useEffect(() => {}, []);

  return (
    <SafeAreaView className="flex-1">
      <View className="z-50 border-b border-zinc-100 bg-background-light p-2 dark:bg-background-dark">
        <TouchableOpacity onPress={scrollToTop}>
          <Text>Scroll to Top</Text>
        </TouchableOpacity>
      </View>

      <FlatList
        ref={flatListRef}
        refreshControl={
          <RefreshControl
            className="mt-1"
            refreshing={refreshing}
            onRefresh={onRefresh}
          />
        }
        data={posts}
        showsVerticalScrollIndicator={false}
        renderItem={({ item }) => <Post data={item} />}
        keyExtractor={(item) => item.id}
        contentContainerStyle={{
          gap: 20,
          paddingVertical: 30,
          paddingHorizontal: 20,
        }}
      />
    </SafeAreaView>
  );
}
