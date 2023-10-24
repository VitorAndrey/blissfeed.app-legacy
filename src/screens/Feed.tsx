import { Post } from "@layout/Post";
import { Text } from "@ui/Text";
import { useCallback, useRef, useState } from "react";
import { FlatList, RefreshControl, TouchableOpacity, View } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";

export function Feed() {
  const data = [
    {
      id: "1",
      authorName: "Alice Wonderland",
      authorPicture: "https://github.com/alice.png",
      content: "Explorando o País das Maravilhas hoje! 🐇🎩",
      interactions: {
        likes: 128,
        reposts: 60,
      },
      comments: [
        {
          id: "1",
          postId: "1",
          authorName: "Chapeleiro Maluco",
          authorPicture: "https://github.com/mad-hatter.png",
          content: "Não se esqueça de visitar o Chá do Chapeleiro!",
          interactions: {
            likes: 55,
          },
          replies: [
            {
              id: "1",
              commentId: "1",
              authorName: "Alice Wonderland",
              authorPicture: "https://github.com/alice.png",
              content: "Claro, vou lá agora mesmo! 🍵🍰",
              interactions: {
                likes: 12,
              },
            },
          ],
        },
      ],
    },
    {
      id: "2",
      authorName: "Sherlock Holmes",
      authorPicture: "https://github.com/sherlock.png",
      content: "Solvendo um enigma intrigante em Londres. 🔍🕵️‍♂️",
      interactions: {
        likes: 238,
        reposts: 75,
      },
      comments: [
        {
          id: "2",
          postId: "2",
          authorName: "Dr. John Watson",
          authorPicture: "https://github.com/watson.png",
          content: "Sherlock, tenha cuidado! 🙏",
          interactions: {
            likes: 92,
          },
        },
      ],
    },
    {
      id: "3",
      authorName: "Elsa Snow",
      authorPicture: "https://github.com/elsa.png",
      content: "Deixando tudo congelar no Arendelle hoje! ❄️❄️❄️",
      interactions: {
        likes: 342,
        reposts: 120,
      },
      comments: [
        {
          id: "3",
          postId: "3",
          authorName: "Anna",
          authorPicture: "https://github.com/anna.png",
          content: "Elsa, você está exagerando novamente! ⛄",
          interactions: {
            likes: 75,
          },
        },
      ],
    },
    {
      id: "4",
      authorName: "Captain Jack Sparrow",
      authorPicture: "https://github.com/jack-sparrow.png",
      content: "Em busca do tesouro perdido! ☠️⚓",
      interactions: {
        likes: 178,
        reposts: 98,
      },
      comments: [
        {
          id: "4",
          postId: "4",
          authorName: "Barbossa",
          authorPicture: "https://github.com/barbossa.png",
          content: "Cuidado com o Kraken, Jack!",
          interactions: {
            likes: 66,
          },
        },
      ],
    },
    {
      id: "5",
      authorName: "Dorothy Gale",
      authorPicture: "https://github.com/dorothy.png",
      content: "Seguindo a Estrada de Tijolos Amarelos! 🌈👠",
      interactions: {
        likes: 215,
        reposts: 42,
      },
      comments: [
        {
          id: "5",
          postId: "5",
          authorName: "Espantalho",
          authorPicture: "https://github.com/scarecrow.png",
          content: "Dorothy, espero encontrar um cérebro no final da jornada!",
          interactions: {
            likes: 88,
          },
        },
      ],
    },
    {
      id: "6",
      authorName: "Tony Stark",
      authorPicture: "https://github.com/iron-man.png",
      content: "Testando o mais recente traje do Homem de Ferro! 🦾💥",
      interactions: {
        likes: 478,
        reposts: 205,
      },
      comments: [
        {
          id: "6",
          postId: "6",
          authorName: "Pepper Potts",
          authorPicture: "https://github.com/pepper.png",
          content: "Tenha cuidado, Tony! 😷💼",
          interactions: {
            likes: 155,
          },
        },
      ],
    },
    {
      id: "7",
      authorName: "Bilbo Baggins",
      authorPicture: "https://github.com/bilbo.png",
      content: "Partindo em uma nova aventura pela Terra-média! 🌋🐉",
      interactions: {
        likes: 312,
        reposts: 88,
      },
      comments: [
        {
          id: "7",
          postId: "7",
          authorName: "Gandalf",
          authorPicture: "https://github.com/gandalf.png",
          content: "Leve o Um Anel com você, Bilbo!",
          interactions: {
            likes: 67,
          },
        },
      ],
    },
    {
      id: "8",
      authorName: "Hermione Granger",
      authorPicture: "https://github.com/hermione.png",
      content: "Estudando poções mágicas em Hogwarts! 🧙‍♀️📚",
      interactions: {
        likes: 165,
        reposts: 53,
      },
      comments: [
        {
          id: "8",
          postId: "8",
          authorName: "Ron Weasley",
          authorPicture: "https://github.com/ron.png",
          content: "Hermione, você é incrível!",
          interactions: {
            likes: 70,
          },
        },
      ],
    },
    {
      id: "9",
      authorName: "Mulan",
      authorPicture: "https://github.com/mulan.png",
      content: "Treinando para ser a melhor guerreira da China! ⚔️🉐",
      interactions: {
        likes: 243,
        reposts: 97,
      },
      comments: [
        {
          id: "9",
          postId: "9",
          authorName: "Mushu",
          authorPicture: "https://github.com/mushu.png",
          content: "Vá, Mulan, mostre a eles do que você é feita!",
          interactions: {
            likes: 81,
          },
        },
      ],
    },
    {
      id: "10",
      authorName: "Gandalf the Grey",
      authorPicture: "https://github.com/gandalf.png",
      content: "Você não deve passar! ⛰️🔥",
      interactions: {
        likes: 420,
        reposts: 190,
      },
      comments: [
        {
          id: "10",
          postId: "10",
          authorName: "Frodo Baggins",
          authorPicture: "https://github.com/frodo.png",
          content: "Gandalf, eu devo passar!",
          interactions: {
            likes: 99,
          },
        },
      ],
    },
  ];

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
        data={data}
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
