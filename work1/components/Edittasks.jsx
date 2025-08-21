import { useEffect, useState } from "react";
import { StyleSheet } from "react-native";
import { Text } from "react-native";
import { TextInput } from "react-native";
import { TouchableOpacity } from "react-native";
import { Modal, View } from "react-native";
import AsyncStorage from "@react-native-async-storage/async-storage";

export const Edittasks = ({ modal, setModal, tasks, setTasks}) => { //export const Edittasks = ({ modal, setModal, taskarr, setTaskArr }) => {    //
  function addon() {
  
    if (title) {
     const arr=[...tasks,{
      name: title,
      iscompleted: false,
    },];
      setTasks(arr);
     AsyncStorage.setItem("storekey", JSON.stringify(arr));
      setTitle("");
      setModal(false);
    
    }

    // console.log(tasks);
  }
  

  function onchange(text) {
    setTitle(text);
  }
  const [title, setTitle] = useState("");
  return (
    <Modal visible={modal} animationType="slide" transparent={true} style={{}}>
      <View 
        style={{
          height: 200,
          width: "90%",
          borderWidth: 2,
          gap: 10,
          margin: "auto",
          borderRadius: 40,
          backgroundColor: "rgba(221, 218, 220, 0.5)",
        }}
      >
        <TextInput
          style={styles.text}
          value={title}
          onChangeText={onchange}
          placeholder="Write your Task .... "
        />
        <TouchableOpacity onPress={() => setModal(false)} style={styles.click}>
          <Text>❌</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.click2} onPress={addon}>
          <Text>ADD</Text>
        </TouchableOpacity>
      </View>
    </Modal>
  );
};

const styles = StyleSheet.create({
  click: {
    backgroundColor: "lightgray",
    borderWidth: 1,
    borderRadius: "50%",
    padding: 2,
    position: "absolute",
    right: "5%",
    top: "-10%",
  },
  click2: {
    backgroundColor: "lightgray",
    borderWidth: 1,
    borderRadius: "20%",
    padding: 10,
    width: "15%",
    alignItems: "center",
    alignSelf: "center",
    marginVertical:"auto"
  },
  text: {
        flex:1,

    marginHorizontal: "auto",
    marginTop: "20%",
  },
});
