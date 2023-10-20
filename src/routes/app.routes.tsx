import {
  createBottomTabNavigator,
  BottomTabNavigationProp,
} from "@react-navigation/bottom-tabs";

import { CreatePost } from "@screens/CreatePost";
import { Feed } from "@screens/Feed";

type AppRoutes = {
  Feed: undefined;
  CreatePost: undefined;
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
        tabBarStyle: {},
      }}
    >
      <Screen name="Feed" component={Feed} />
      <Screen name="CreatePost" component={CreatePost} />
    </Navigator>
  );
}
