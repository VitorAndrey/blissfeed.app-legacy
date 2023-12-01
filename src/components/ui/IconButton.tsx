import { TouchableOpacity, TouchableOpacityProps } from "react-native";

import { twMerge } from "tailwind-merge";

type IconButtonProps = TouchableOpacityProps & {
  children: React.ReactNode;
};

export function IconButton({ className, children, ...rest }: IconButtonProps) {
  return (
    <TouchableOpacity
      className={twMerge(
        "h-10 w-10 items-center justify-center rounded-xl",
        className,
      )}
      {...rest}
    >
      {children}
    </TouchableOpacity>
  );
}
