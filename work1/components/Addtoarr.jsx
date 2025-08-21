import { Text, TouchableOpacity, View } from "react-native";
import AsyncStorage from "@react-native-async-storage/async-storage";

function Addtoarr({ item, ind, tasks, setTasks }) {
  const HandlePress = () => {
    const arr2 = [...tasks];
    arr2[ind].iscompleted = !arr2[ind].iscompleted;
    setTasks([...arr2]);
  };

  return (
    <TouchableOpacity
      onPress={HandlePress}
      style={{
        flexDirection: "row",
        gap: 10,
        alignItems: "center",
        flex: 1,
      }}
    >
      <View
        style={{
          marginBottom: 10,
          borderWidth: 1,
          width: 20,
          height: 20,
          borderRadius: 10,
          borderColor: "black",
        }}
      >
        {item.iscompleted && (
          <View
            style={{
              width: 15,
              height: 15,
              backgroundColor: "indigo",
              margin: "auto",
              borderRadius: 7.5,
            }}
          />
        )}
      </View>
      
        <Text
          style={
            {
              flex:1,
              // borderWidth:1,
              // borderColor:"transparent"
            }
          }
        >
          {item.name}
        </Text>
    </TouchableOpacity>
  );
}
export default Addtoarr;
