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
  secureInput?: boolean;
};

export function Input({
  containerProps,
  inputProps,
  icon,
  secureInput = false,
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
        `h-10 w-full flex-row items-center rounded-lg bg-theme-gray-light px-4 ${
          secureInput && "pr-1"
        }`,
        containerProps?.containerClass,
      )}
      {...containerProps}
    >
      <TextInput
        secureTextEntry={secureInput && hideChars}
        className={twMerge(
          "font-poppins-400 h-full flex-1 text-sm",
          inputProps?.inputClass,
        )}
        {...inputProps}
      />

      {icon && !secureInput && icon()}

      {secureInput && (
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
