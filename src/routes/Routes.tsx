import { View } from "react-native";

import { AppRoutes } from "./app.routes";
import { AuthRoutes } from "./auth.routes";

export function Routes() {
  const isUserLogged = true;

  return <View>{isUserLogged ? <AppRoutes /> : <AuthRoutes />}</View>;
}
