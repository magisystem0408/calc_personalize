import { VFC} from "react";
import {StyleSheet, View} from "react-native";
import {NativeStackScreenProps} from "@react-navigation/native-stack";
import { RootStackParamList} from "../../types/types";
import {SelectButton} from "../../components/SelectButton";
import {SelectButtonSearch} from "../../components/SelectButtonSearch";

type Props = NativeStackScreenProps<RootStackParamList, "SearchResultHome">;

export const SearchResultHome: VFC<Props> = ({route, navigation}) => {
    const personalDetails = route.params;
    return (
        <View style={styles.container}>
            <SelectButton name={personalDetails.details.name} description={personalDetails.details.description} btnName="自分は誰？" />
            <SelectButtonSearch type={personalDetails.details.compatibility.best} btnName="理想の相手" />
            <SelectButtonSearch type={personalDetails.details.compatibility.terrible} btnName="気が合わない相手" />
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: "center",
        alignItems: "center",
    },
});