import {
  SafeAreaProvider,
  initialWindowMetrics,
} from "react-native-safe-area-context";

import { View } from "react-native";

export function AppProvider({ children }: { children: React.ReactNode }) {
  return (
    <View className="flex-1">
      <SafeAreaProvider initialMetrics={initialWindowMetrics}>
        {children}
      </SafeAreaProvider>
    </View>
  );
}
