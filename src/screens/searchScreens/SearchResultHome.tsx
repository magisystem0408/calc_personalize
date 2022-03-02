import {useState, VFC} from "react";
import {StyleSheet, View} from "react-native";
import {NativeStackScreenProps} from "@react-navigation/native-stack";
import {PersonalDetailsProps, RootStackParamList} from "../../types/types";
import {
    AspectRatio, Avatar,
    Box,
    Button,
    Center,
    Container,
    Heading,
    HStack,
    Image,
    Modal,
    ScrollView,
    Text
} from "native-base";
import {SelectButton} from "../../components/SelectButton";

type Props = NativeStackScreenProps<RootStackParamList, "SearchResultHome">;

export const SearchResultHome: VFC<Props> = ({route, navigation}) => {
    const [modalVisible, setModalVisible] = useState<boolean>(false)
    const personalDetails = route.params;
    const handleClick = () => {
        setModalVisible(!modalVisible)
    }
    return (
        <View style={styles.container}>
            <SelectButton name={personalDetails.name} description={personalDetails.description} btnName="自分は誰？" />

            <SelectButton name={personalDetails.name} description={personalDetails.description} btnName="理想の相手" />
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