import { useContext } from "react";

import { NavigationContainer, DefaultTheme } from "@react-navigation/native";

import { AppRoutes } from "./app.routes";
import { AuthRoutes } from "./auth.routes";

import { UserContext } from "@contexts//UserContext";

import colors from "src/theme/colors";

export function Routes() {
  const { isUserLogged } = useContext(UserContext);

  const MyTheme = {
    ...DefaultTheme,
    colors: {
      ...DefaultTheme.colors,
      background: colors.background.light,
    },
  };

  return (
    <NavigationContainer theme={MyTheme}>
      {isUserLogged ? <AppRoutes /> : <AuthRoutes />}
    </NavigationContainer>
  );
}
