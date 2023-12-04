import { View } from "react-native";
import { PageData } from "react-native-onboard";

import { ArrowLeftIcon, ArrowRightIcon } from "lucide-react-native";

import colors from "@theme/colors";

import { IconButton } from "@components/ui/IconButton";

type OnBoardingFooterProps = {
  goToNextPage: () => void;
  goToPreviousPage: () => void;
  pages?: PageData[] | undefined;
  currentPage: number;
};

export function OnBoardingFooter({
  goToNextPage,
  goToPreviousPage,
  pages,
  currentPage,
}: OnBoardingFooterProps) {
  function handleGoToPreviousPage() {
    goToPreviousPage();
  }
  function handleGoToNextPage() {
    goToNextPage();
  }

  return (
    <View className="flex-row py-8 px-8">
      {!(currentPage < 1) ? (
        <IconButton
          className="rounded-full border border-theme-primary"
          onPress={handleGoToPreviousPage}
        >
          <ArrowLeftIcon color={colors.theme.primary} size={18} />
        </IconButton>
      ) : (
        <View className="h-10 w-10"></View>
      )}

      <View className="flex-1 flex-row items-center justify-center gap-1">
        {pages?.map((page, index) => (
          <View
            key={page.id}
            className={`${
              currentPage !== index && "opacity-30"
            } h-3 w-3 rounded-full bg-theme-primary transition-all`}
          ></View>
        ))}
      </View>

      <IconButton
        className="rounded-full bg-theme-primary"
        onPress={handleGoToNextPage}
      >
        <ArrowRightIcon color={colors.theme.white} size={18} />
      </IconButton>
    </View>
  );
}
