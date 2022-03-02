import {RootNavigator} from "./src/navigations/RootNavigator";
import {NativeBaseProvider} from "native-base";

export default function App() {
    return (
        <NativeBaseProvider>
            <RootNavigator/>
        </NativeBaseProvider>
    );
}
