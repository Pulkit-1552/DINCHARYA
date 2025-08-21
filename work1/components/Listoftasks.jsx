import { View, Text, StyleSheet, TouchableOpacity } from "react-native";
import Checkbox from "expo-checkbox";
import { useState } from "react";

export default function Listoftasks({taskval,index})  {
    const [isChecked, setIsChecked] = useState(false);

    function handlePress() {
        setIsChecked((prev) => !prev);
    }

    return (<View>
        <TouchableOpacity onPress={handlePress}>
            <View style={{ flexDirection: "row", gap:10,margin:10 }}>
                <Checkbox value={isChecked} color={"indigo"} />
                <Text key={index} style={{ marginLeft: 10 }}>{taskval}</Text>
            </View>
        </TouchableOpacity>
        </View>
    );
}
const styles = StyleSheet.create({
    box: {
        height: "5%",
        width: "90%",
        alignSelf: "center",
        borderRadius: 10,
        marginBottom: 4,
        backgroundColor: "pink",
        opacity: 0.5,
        alignItems: "center",
        marginVertical: 10,
        flexDirection: "column",
        justifyContent: "flex-start",
    },
});