import { View } from "react-native";
import { PageData } from "react-native-onboard";

import { TextButton } from "@components/ui/TextButton";

type OnBoardingHeaderProps = {
  goToNextPage: () => void;
  pages?: PageData[] | undefined;
};

export function OnBoardingHeader({
  goToNextPage,
  pages,
}: OnBoardingHeaderProps) {
  return (
    <View className="items-end px-8">
      <TextButton touchableOpacityProps={{}}>Skip</TextButton>
    </View>
  );
}
