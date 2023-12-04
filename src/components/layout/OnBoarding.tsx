import { OnboardFlow } from "react-native-onboard";

import { useNavigation } from "@react-navigation/native";

import { AuthNavigationRoutesProps } from "@routes/auth.routes";

import fonts from "@theme/fonts";

import { OnBoardingFooter } from "@components/layout/OnBoardingFooter";
import { OnBoardingHeader } from "@components/layout/OnBoardingHeader";

export function OnBoarding() {
  const navigation = useNavigation<AuthNavigationRoutesProps>();

  function handleNavigateToRegister() {
    navigation.navigate("Register");
  }

  const pages = [
    {
      id: "1",
      title: "Welcome to my app",
      subtitle:
        "Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolores nemo, repellat commodi",

      imageUri: "https://github.com/Z.png",
    },
    {
      id: "2",
      title: "Page 2 header",
      subtitle:
        "Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolores nemo, repellat commodi",
      imageUri: "https://github.com/K.png",
    },
    {
      id: "3",
      title: "Page 3 header",
      subtitle:
        "Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolores nemo, repellat commodi",
      imageUri: "https://github.com/P.png",
    },
  ];

  return (
    <OnboardFlow
      onDone={handleNavigateToRegister}
      FooterComponent={(props) => <OnBoardingFooter {...props} />}
      HeaderComponent={(props) => <OnBoardingHeader {...props} />}
      titleStyle={{ fontFamily: fonts["inter-600"], fontSize: 24 }}
      subtitleStyle={{
        fontFamily: fonts["inter-400"],
        fontSize: 14,
        lineHeight: 20,
      }}
      pageStyle={{}}
      pages={pages}
      type={"fullscreen"}
    />
  );
}
