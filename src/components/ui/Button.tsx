import { TouchableOpacity, TouchableOpacityProps } from "react-native";

import { twMerge } from "tailwind-merge";

import { Text } from "./Text";

type IconButtonProps = TouchableOpacityProps & {
  children: React.ReactNode;
};

export function Button({ className, children, ...rest }: IconButtonProps) {
  return (
    <TouchableOpacity
      activeOpacity={0.8}
      className={twMerge(
        "bg-primary h-10 w-full items-center justify-center rounded-xl px-2",
        className,
      )}
      {...rest}
    >
      <Text className="font-semibold">{children}</Text>
    </TouchableOpacity>
  );
}
