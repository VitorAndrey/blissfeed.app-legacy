import { useContext } from "react";
import { View } from "react-native";

import { DefaultTheme, NavigationContainer } from "@react-navigation/native";
import { useColorScheme } from "nativewind";
import colors from "src/theme/colors";

import { UserContext } from "@contexts//UserContext";

import { AppRoutes } from "./app.routes";
import { AuthRoutes } from "./auth.routes";

export function Routes() {
  const { isUserLogged } = useContext(UserContext);
  const { colorScheme } = useColorScheme();

  const MyTheme = {
    ...DefaultTheme,
    colors: {
      ...DefaultTheme.colors,
      background:
        colorScheme === "light" ? colors.theme.white : colors.theme.black,
    },
  };

  return (
    <NavigationContainer theme={MyTheme}>
      <View className="flex-1">
        {isUserLogged ? <AppRoutes /> : <AuthRoutes />}
      </View>
    </NavigationContainer>
  );
}
