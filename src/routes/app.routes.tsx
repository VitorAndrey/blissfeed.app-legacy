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
import { Profile } from "@screens/app/Profile";
import { Search } from "@screens/app/Search";
import { SearchContext } from "@contexts/SearchContext";

import {
  Coffee,
  Home,
  PenSquare,
  SearchIcon,
  User2,
} from "lucide-react-native";

export type AppRoutes = {
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

  const tabBarActiveTintColor =
    colorScheme === "light"
      ? colors.activeTabBarIcon.light
      : colors.activeTabBarIcon.dark;

  const tabBarInactiveTintColor =
    colorScheme === "light"
      ? colors.inactiveTabBarIcon.light
      : colors.inactiveTabBarIcon.dark;

  return (
    <Navigator
      initialRouteName="Feed"
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
        name="Feed"
        component={Feed}
        options={{
          tabBarIcon: ({ color }) => <Home color={color} />,
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
          tabBarIcon: ({ color }) => <PenSquare color={color} />,
          tabBarStyle: { display: "none" },
        }}
      />
      <Screen
        name="Meditate"
        component={Meditate}
        options={{
          tabBarIcon: ({ color }) => <Coffee color={color} />,
        }}
      />
      <Screen
        name="Profile"
        component={Profile}
        options={{
          tabBarIcon: ({ color }) => <User2 color={color} />,
        }}
      />
    </Navigator>
  );
}
