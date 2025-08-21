import { useEffect, useState } from "react";
import { View, Text, TextInput, TouchableHighlight } from "react-native";
import AsyncStorage from '@react-native-async-storage/async-storage';

export default function Test() {
    const [text, setText] = useState("");

    useEffect(() => {
        AsyncStorage.getItem("value")
            .then((storedValue) => {
                if (storedValue !== null) {
                    setText(storedValue);
                }
            })
    }, []);

    function HandleText(value) {
        setText(value);
        AsyncStorage.setItem("value", value)
            .then(() => {
                console.log("Value saved successfully");
            })
           
    }

    function Empty() {
        setText("");
        AsyncStorage.removeItem("value");
    }

    return (
        <View>
            <TextInput
                placeholder="enter text here "
                value={text}
                style={{
                    margin: "auto",
                    borderWidth: 1,
                    borderColor: "black",
                    marginVertical: 30,
                }}
                onChangeText={HandleText}
            />
            <TouchableHighlight
                style={{
                    margin: "auto",
                    backgroundColor: "skyblue",
                    height: 20,
                    width: 100,
                    borderRadius: 10,
                    alignItems: "center",
                }}
                onPress={Empty}
            >
                <Text style={{ width: 40 }}>reset</Text>
            </TouchableHighlight>
        </View>
    );
}
