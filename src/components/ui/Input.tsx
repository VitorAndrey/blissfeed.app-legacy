import { ReactNode, useState } from "react";
import { TextInput, View, ViewProps, TextInputProps } from "react-native";

import { twMerge, ClassNameValue } from "tailwind-merge";
import { IconButton } from "./IconButton";
import colors from "src/theme/colors";
import { EyeIcon, EyeOffIcon } from "lucide-react-native";

type InputProps = {
  containerProps?: ViewProps & {
    containerClass?: ClassNameValue;
  };
  inputProps?: TextInputProps & {
    inputClass?: ClassNameValue;
  };
  label?: string;
  icon?: () => ReactNode;
  searchInput: boolean;
};

export function Input({
  containerProps,
  inputProps,
  icon,
  searchInput,
}: InputProps) {
  const [hideChars, setHideChars] = useState<boolean>(true);

  function handleToggleHidden() {
    setHideChars((prev) => !prev);
  }

  return (
    <View
      className={twMerge(
        "h-10 flex-row items-center rounded-2xl px-4",
        containerProps?.containerClass,
      )}
      {...containerProps}
    >
      <TextInput
        className={twMerge(
          "h-full flex-1 font-poppins-400 text-base",
          inputProps?.inputClass,
        )}
        {...inputProps}
      />

      {icon && !searchInput && icon()}

      {searchInput && (
        <IconButton
          onPress={handleToggleHidden}
          className="h-10 w-10 items-center justify-center"
        >
          {hideChars ? (
            <EyeIcon color={colors.activeTabBarIcon.light} size={18} />
          ) : (
            <EyeOffIcon color={colors.activeTabBarIcon.light} size={18} />
          )}
        </IconButton>
      )}
    </View>
  );
}
