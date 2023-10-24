import { Text } from "@ui/Text";
import { Image, View } from "react-native";

interface Post {
  id: string;
  authorName: string;
  authorPicture: string;
  content: string;
  interactions: {
    likes: number;
    reposts: number;
  };
  comments: Comment[];
}

interface Comment {
  id: string;
  postId: string;
  authorName: string;
  authorPicture: string;
  content: string;
  interactions: {
    likes: number;
  };
  replies: Reply[];
}

interface Reply {
  id: string;
  commentId: string;
  authorName: string;
  authorPicture: string;
  content: string;
  interactions: {
    likes: number;
  };
}

export function Post({ data }: { data: Post }) {
  return (
    <View>
      <View className="flex-row items-center gap-2">
        <Image
          className="h-8 w-8 rounded-full"
          source={{ uri: data.authorPicture }}
        />
        <Text>{data.authorName}</Text>
      </View>

      <Text>{data.content}</Text>
    </View>
  );
}
