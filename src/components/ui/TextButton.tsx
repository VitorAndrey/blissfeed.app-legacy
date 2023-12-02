import {
  TextProps,
  TouchableOpacity,
  TouchableOpacityProps,
} from "react-native";

import { ClassNameValue, twMerge } from "tailwind-merge";

import { Text } from "./Text";

type IconButtonProps = {
  children: React.ReactNode;
  touchableOpacityProps?: TouchableOpacityProps & {
    containerClass?: ClassNameValue;
  };
  textProps?: TextProps & {
    textClass?: ClassNameValue;
  };
  underline?: boolean;
};

export function TextButton({
  touchableOpacityProps,
  textProps,
  underline = false,
  children,
}: IconButtonProps) {
  return (
    <TouchableOpacity
      activeOpacity={0.8}
      className={twMerge("", touchableOpacityProps?.containerClass)}
      {...touchableOpacityProps}
    >
      <Text
        className={twMerge(
          `${underline && "underline"} text-theme-primary`,
          textProps?.textClass,
        )}
        {...textProps}
      >
        {children}
      </Text>
    </TouchableOpacity>
  );
}
