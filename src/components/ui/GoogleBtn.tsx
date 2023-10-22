import { Pressable, PressableProps } from "react-native";

import { Text } from "./Text";

import { twMerge } from "tailwind-merge";
import GoogleIcon from "@assets/googleIcon.svg";

type IconButtonProps = PressableProps & {
  children: React.ReactNode;
};

export function GoogleBtn({ className, children, ...rest }: IconButtonProps) {
  return (
    <Pressable
      className={twMerge(
        "h-12 flex-row items-center justify-center rounded-xl border px-6",
        className,
      )}
      {...rest}
    >
      <GoogleIcon width={32} height={32} />
      <Text>{children}</Text>
    </Pressable>
  );
}
