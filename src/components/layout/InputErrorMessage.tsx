import React from "react";
import { View, ViewProps } from "react-native";

import { twMerge } from "tailwind-merge";

import { Text } from "@components/ui/Text";

type InputErrorMessageProps = ViewProps & {
  message: string | undefined;
};

export function InputErrorMessage({
  message,
  className,
  ...rest
}: InputErrorMessageProps) {
  return (
    <View className={twMerge("h-6", className)} {...rest}>
      {message && <Text className="text-theme-red-500 text-xs">{message}</Text>}
    </View>
  );
}
