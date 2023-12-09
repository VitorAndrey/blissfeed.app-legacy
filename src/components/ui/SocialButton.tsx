import { TouchableOpacity, TouchableOpacityProps } from "react-native";

import { ClassNameValue, twMerge } from "tailwind-merge";

type IconButtonProps = {
  children: React.ReactNode;
  touchableOpacityProps?: TouchableOpacityProps & {
    containerClass?: ClassNameValue;
  };
};

export function SocialButton({
  touchableOpacityProps,
  children,
}: IconButtonProps) {
  return (
    <TouchableOpacity
      activeOpacity={0.8}
      className={twMerge(
        "bg-primary h-10 w-full flex-row items-center justify-center rounded-3xl border border-theme-gray-light px-2",
        touchableOpacityProps?.containerClass,
      )}
      {...touchableOpacityProps}
    >
      {children}
    </TouchableOpacity>
  );
}
