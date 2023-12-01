export type User = {
  id: string;
  name: string;
  email: string;
  password: string;
  imageUrl: string;
  posts: Post[];
  conversations: Conversation[];
};

export type RegisterUser = {
  name: string;
  email: string;
  password: string;
};

export type LoginUser = {
  email: string;
  password: string;
};

export type Conversation = {
  id: string;
  userId: string;
  messages: Message[];
};

export type Message = {
  id: string;
  content: string;
  sentByUser: boolean;
  conversationId: string;
};

export type Post = {
  id: string;
  authorId: string;
  content: string;
  likes: number;
  reposts: number;
  shares: number;
  comments: Comment[];
};

export type Comment = {
  id: string;
  content: string;
  likes: number;
  authorId: string;
  postId: string;
  replies: Reply[];
};

export type Reply = {
  id: string;
  commentId: string;
  content: string;
  likes: number;
  authorId: string;
};
