import { ReactNode } from "react";
import { Text as NativeText, TextProps as NativeTextProps } from "react-native";

import { twMerge } from "tailwind-merge";

type TextProps = NativeTextProps & {
  children: ReactNode;
  invertedColors?: boolean;
};

export function Text({
  className,
  invertedColors = false,
  children,
  ...rest
}: TextProps) {
  return (
    <NativeText
      className={twMerge(
        `font-inter-400 ${
          invertedColors
            ? "text-theme-gray-light dark:text-theme-gray-dark"
            : "text-theme-gray-dark dark:text-theme-gray-light"
        } `,
        className,
      )}
      {...rest}
    >
      {children}
    </NativeText>
  );
}
