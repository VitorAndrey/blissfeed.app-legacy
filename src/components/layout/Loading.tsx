import { ActivityIndicator, View, ViewProps } from "react-native";

import colors from "src/theme/colors";
import { twMerge } from "tailwind-merge";

type LoadingProps = ViewProps & {
  iconSize?: boolean;
};

export function Loading({
  className,
  iconSize = false,
  ...rest
}: LoadingProps) {
  return (
    <View
      className={twMerge(
        `${iconSize ? "h-10 w-10" : "flex-1"} items-center justify-center`,
        className,
      )}
      {...rest}
    >
      <ActivityIndicator animating color={colors.theme.primary} />
    </View>
  );
}
