import { ReactNode } from "react";
import { Text as NativeText, TextProps as NativeTextProps } from "react-native";

import { twMerge } from "tailwind-merge";

type TextProps = NativeTextProps & {
  children: ReactNode;
};

export function Text({ className, children, ...rest }: TextProps) {
  return (
    <NativeText
      className={twMerge(
        "font-inter-400 text-theme-gray-dark dark:text-theme-gray-light",
        className,
      )}
      {...rest}
    >
      {children}
    </NativeText>
  );
}
