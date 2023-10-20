import { View } from "react-native";
import { NavigationContainer } from "@react-navigation/native";

import { AppRoutes } from "./app.routes";
import { AuthRoutes } from "./auth.routes";

export function Routes() {
  const isUserLogged = false;

  return (
    <View className="flex-1">
      <NavigationContainer>
        {isUserLogged ? <AppRoutes /> : <AuthRoutes />}
      </NavigationContainer>
    </View>
  );
}
