import { View } from "react-native";
import {
  initialWindowMetrics,
  SafeAreaProvider,
} from "react-native-safe-area-context";

import { SearchContextProvider } from "@contexts/SearchContext";
import { UserContextProvider } from "@contexts/UserContext";

export function AppProvider({ children }: { children: React.ReactNode }) {
  return (
    <View className="flex-1">
      <UserContextProvider>
        <SearchContextProvider>
          <SafeAreaProvider initialMetrics={initialWindowMetrics}>
            {children}
          </SafeAreaProvider>
        </SearchContextProvider>
      </UserContextProvider>
    </View>
  );
}
