import { useContext } from "react";

import {
  BottomTabNavigationProp,
  createBottomTabNavigator,
} from "@react-navigation/bottom-tabs";
import { useColorScheme } from "nativewind";
import colors from "src/theme/colors";

import { CreatePost } from "@screens/app/CreatePost";
import { Feed } from "@screens/app/Feed";
import { Meditate } from "@screens/app/Meditate";
import { Onboarding } from "@screens/app/Onboarding";
import { Profile } from "@screens/app/Profile";
import { Search } from "@screens/app/Search";
import { SearchContext } from "@contexts/SearchContext";

import {
  CoffeeIcon,
  HomeIcon,
  PenSquareIcon,
  SearchIcon,
  User2Icon,
} from "lucide-react-native";

export type AppRoutes = {
  OnBoarding: undefined;
  Feed: undefined;
  Search: undefined;
  CreatePost: undefined;
  Meditate: undefined;
  Profile: undefined;
};

export type AppNavigationRoutesProps = BottomTabNavigationProp<AppRoutes>;

const { Navigator, Screen } = createBottomTabNavigator<AppRoutes>();

export function AppRoutes() {
  const { isSearching } = useContext(SearchContext);
  const { colorScheme } = useColorScheme();

  const alreadySeenOnboarding = false;

  const initialRouteName: keyof AppRoutes = alreadySeenOnboarding
    ? "Feed"
    : "OnBoarding";

  const tabBarActiveTintColor =
    colorScheme === "light" ? colors.theme.black : colors.theme.white;

  const tabBarInactiveTintColor =
    colorScheme === "light"
      ? colors.theme.gray.medium
      : colors.theme.gray.medium;

  return (
    <Navigator
      initialRouteName={initialRouteName}
      sceneContainerStyle={{ backgroundColor: "transparent" }}
      backBehavior="history"
      screenOptions={{
        headerShown: false,
        tabBarShowLabel: false,
        tabBarActiveTintColor,
        tabBarInactiveTintColor,
        tabBarStyle: {
          backgroundColor: "transparent",
          elevation: 0,
          height: 60,
        },
      }}
    >
      <Screen
        name="OnBoarding"
        component={Onboarding}
        options={{
          tabBarButton: () => null,
          tabBarStyle: { display: "none" },
        }}
      />

      <Screen
        name="Feed"
        component={Feed}
        options={{
          tabBarIcon: ({ color }) => <HomeIcon color={color} />,
        }}
      />

      <Screen
        name="Search"
        component={Search}
        options={{
          tabBarIcon: ({ color }) => <SearchIcon color={color} />,
          tabBarStyle: {
            display: isSearching ? "none" : undefined,
            height: 60,
            backgroundColor: "transparent",
            elevation: 0,
          },
        }}
      />

      <Screen
        name="CreatePost"
        component={CreatePost}
        options={{
          tabBarIcon: ({ color }) => <PenSquareIcon color={color} />,
          tabBarStyle: { display: "none" },
        }}
      />

      <Screen
        name="Meditate"
        component={Meditate}
        options={{
          tabBarIcon: ({ color }) => <CoffeeIcon color={color} />,
        }}
      />

      <Screen
        name="Profile"
        component={Profile}
        options={{
          tabBarIcon: ({ color }) => <User2Icon color={color} />,
        }}
      />
    </Navigator>
  );
}
