import {
  SafeAreaProvider,
  initialWindowMetrics,
} from "react-native-safe-area-context";

import { View } from "react-native";
import { UserContextProvider } from "@contexts/UserContext";
import { SearchContextProvider } from "@contexts/SearchContext";

import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
const queryClient = new QueryClient();

export function AppProvider({ children }: { children: React.ReactNode }) {
  return (
    <View className="flex-1">
      <QueryClientProvider client={queryClient}>
        <UserContextProvider>
          <SearchContextProvider>
            <SafeAreaProvider initialMetrics={initialWindowMetrics}>
              {children}
            </SafeAreaProvider>
          </SearchContextProvider>
        </UserContextProvider>
      </QueryClientProvider>
    </View>
  );
}
