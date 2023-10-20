import { Text as NativeText, TextProps as NativeTextProps } from "react-native";

type TextProps = NativeTextProps & {
  children: React.ReactNode;
};

export function Text({ children }: TextProps) {
  return <NativeText>{children}</NativeText>;
}
