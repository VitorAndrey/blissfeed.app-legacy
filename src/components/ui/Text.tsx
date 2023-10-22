import { Text as NativeText, TextProps as NativeTextProps } from "react-native";
import { twMerge } from "tailwind-merge";

type TextProps = NativeTextProps & {
  children: React.ReactNode;
};

export function Text({ className, children, ...rest }: TextProps) {
  return (
    <NativeText
      className={twMerge(
        "text-font-light dark:text-font-dark font-poppins-400",
        className,
      )}
      {...rest}
    >
      {children}
    </NativeText>
  );
}
