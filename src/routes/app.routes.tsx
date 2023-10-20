import {
  createBottomTabNavigator,
  BottomTabNavigationProp,
} from "@react-navigation/bottom-tabs";

import { Feed } from "@screens/Feed";
import { Search } from "@screens/Search";
import { CreatePost } from "@screens/CreatePost";
import { Meditate } from "@screens/Meditate";
import { Profile } from "@screens/Profile";

type AppRoutes = {
  Feed: undefined;
  Search: undefined;
  CreatePost: undefined;
  Meditate: undefined;
  Profile: undefined;
};

export type AppNavigationRoutesProps = BottomTabNavigationProp<AppRoutes>;

const { Navigator, Screen } = createBottomTabNavigator<AppRoutes>();

export function AppRoutes() {
  return (
    <Navigator
      initialRouteName="Feed"
      sceneContainerStyle={{ backgroundColor: "transparent" }}
      backBehavior="history"
      screenOptions={{
        headerShown: false,
        tabBarShowLabel: false,
        tabBarActiveTintColor: "#222222",
        tabBarInactiveTintColor: "#999999",
        tabBarStyle: {
          backgroundColor: "transparent",
          elevation: 0,
        },
      }}
    >
      <Screen name="Feed" component={Feed} />
      <Screen name="Search" component={Search} />
      <Screen name="CreatePost" component={CreatePost} />
      <Screen name="Meditate" component={Meditate} />
      <Screen name="Profile" component={Profile} />
    </Navigator>
  );
}
