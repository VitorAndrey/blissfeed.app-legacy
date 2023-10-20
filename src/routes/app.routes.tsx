import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";

import { Feed } from "@screens/Feed";

type AppRoutesProps = {
  Feed: undefined;
};

const Tab = createBottomTabNavigator<AppRoutesProps>();

export function AppRoutes() {
  return (
    <Tab.Navigator>
      <Tab.Screen name="Feed" component={Feed} />
    </Tab.Navigator>
  );
}
