import { ReactNode } from "react";
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
  variant?: "default" | "secondary";
  icon?: () => ReactNode;
};

export function Button({
  touchableOpacityProps,
  textProps,
  icon,
  variant = "default",
  children,
}: IconButtonProps) {
  return (
    <TouchableOpacity
      activeOpacity={0.8}
      className={twMerge(
        `${
          variant === "secondary"
            ? "border border-theme-gray-light bg-transparent"
            : "bg-theme-primary"
        }
        ${touchableOpacityProps?.disabled && "bg-theme-primary/60"}

        h-10 w-full flex-row items-center justify-center rounded-3xl px-2`,
        touchableOpacityProps?.containerClass,
      )}
      {...touchableOpacityProps}
    >
      <Text
        className={twMerge(
          `${variant === "default" && "text-theme-white"}`,
          textProps?.textClass,
        )}
        {...textProps}
      >
        {children}
      </Text>

      {icon && icon()}
    </TouchableOpacity>
  );
}
