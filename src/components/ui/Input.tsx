import { ReactNode, useState } from "react";
import { TextInput, TextInputProps, View, ViewProps } from "react-native";

import { useColorScheme } from "nativewind";
import { ClassNameValue, twMerge } from "tailwind-merge";

import { EyeIcon, EyeOffIcon } from "lucide-react-native";

import colors from "@theme/colors";

import { IconButton } from "./IconButton";

type InputProps = {
  containerProps?: ViewProps & {
    containerClass?: ClassNameValue;
  };
  inputProps?: TextInputProps & {
    inputClass?: ClassNameValue;
  };
  label?: string;
  icon?: () => ReactNode;
  searchInput?: boolean;
};

export function Input({
  containerProps,
  inputProps,
  icon,
  searchInput = false,
}: InputProps) {
  const { colorScheme } = useColorScheme();

  const [hideChars, setHideChars] = useState<boolean>(true);

  function handleToggleHidden() {
    setHideChars((prev) => !prev);
  }

  const iconColor =
    colorScheme === "light" ? colors.theme.black : colors.theme.white;

  return (
    <View
      className={twMerge(
        "h-10 w-full flex-row items-center rounded-2xl px-4",
        containerProps?.containerClass,
      )}
      {...containerProps}
    >
      <TextInput
        className={twMerge(
          "font-poppins-400 h-full flex-1 text-base",
          inputProps?.inputClass,
        )}
        {...inputProps}
      />

      {icon && !searchInput && icon()}

      {searchInput && (
        <IconButton onPress={handleToggleHidden}>
          {hideChars ? (
            <EyeIcon color={iconColor} size={18} />
          ) : (
            <EyeOffIcon color={iconColor} size={18} />
          )}
        </IconButton>
      )}
    </View>
  );
}
