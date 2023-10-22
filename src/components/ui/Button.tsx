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
        "h-12 items-center justify-center rounded-xl bg-primary px-6",
        className,
      )}
      {...rest}
    >
      <Text className="font-semibold">{children}</Text>
    </Pressable>
  );
}
