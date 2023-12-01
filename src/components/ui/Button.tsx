import { Pressable, PressableProps } from "react-native";

import { twMerge } from "tailwind-merge";

import { Text } from "./Text";

type IconButtonProps = PressableProps & {
  children: React.ReactNode;
};

export function Button({ className, children, ...rest }: IconButtonProps) {
  return (
    <Pressable
      className={twMerge(
        "bg-primary h-10 items-center justify-center rounded-xl px-6",
        className,
      )}
      {...rest}
    >
      <Text className="font-semibold">{children}</Text>
    </Pressable>
  );
}
