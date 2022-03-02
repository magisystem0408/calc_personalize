import { VFC } from "react";
import { Text, View } from "react-native";
import { NativeStackScreenProps } from "@react-navigation/native-stack";
import { PersonalDetailsProps, RootStackParamList } from "../types/types";

type Props = NativeStackScreenProps<RootStackParamList, "SearchResultHome">;

export const SearchResultHome: VFC<Props> = ({ route, navigation }) => {
  const personalDetails: PersonalDetailsProps = route.params;
  console.log(personalDetails);
  return (
    <View>
      <Text>検索結果にきたよ</Text>
    </View>
  );
};
