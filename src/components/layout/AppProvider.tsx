import {
  SafeAreaProvider,
  initialWindowMetrics,
} from "react-native-safe-area-context";

import { View } from "react-native";
import { UserContextProvider } from "@contexts/UserContext";
import { SearchContextProvider } from "@contexts/SearchContext";

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
