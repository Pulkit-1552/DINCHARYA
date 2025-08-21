import {
  Text,
  View,
  StyleSheet,
  TouchableOpacity,
  ScrollView,
  Alert,
  TextInput,
  Modal,
} from "react-native";
import { LinearGradient } from "expo-linear-gradient";
import { AntDesign, MaterialCommunityIcons } from "@expo/vector-icons";
import { useState,useEffect } from "react";

import { Edittasks } from "../components/Edittasks";
import Addtoarr from "../components/Addtoarr";
import AsyncStorage from "@react-native-async-storage/async-storage";
import styles from "../components/style"

const week = [
  "Sunday",
  "Monday",
  "Tuesday",
  "Wednesday",
  "Thursday",
  "Friday",
  "Saturday",
];
const Month = [
  "January",
  "February",
  "March",
  "April",
  "May",
  "June",
  "July",
  "August",
  "September",
  "October",
  "November",
  "December",
];
function suffix(day) {
  if (day === 1 || day === 21 || day === 31) return "st";
  if (day === 2 || day === 22) return "nd";
  if (day === 3 || day === 23) return "rd";
  return "th";
}

const HomePage = () => {
  // function deleteTask(ind) {
  //   const updatedTasks = tasks.filter((_, index) => index !== ind);
  //   setTasks(updatedTasks);
  //   AsyncStorage.setItem("storekey", JSON.stringify(tasks));

  // }
  function handleEdit(index){
    const array=[...tasks];
    const iscom=array[index].iscompleted;
    const currval=array[index].name;
    
    <TextInput value={currval} style={{height:30,width:90}}> enter value</TextInput>
    array[index]={
      name:"editedvalue",
      iscompleted:iscom
    };
    setTasks(array);
  }



  function deleteTask(ind) {
    const updatedTasks = tasks.filter((_, index) => index !== ind);
    setTasks(updatedTasks);
    AsyncStorage.setItem("storekey", JSON.stringify(updatedTasks));
  }

  const [tasks, setTasks] = useState([
    { name: "Task 1", iscompleted: false },
    { name: "Task 2", iscompleted: true },
    { name: "Task 3", iscompleted: false },
  ]);

  const count = tasks.filter((item) => item.iscompleted).length;
  const [modal, setModal] = useState(false);
  const time = new Date();
  const day = time.getDate();
  const month = time.getMonth();
  const weekday = time.getDay();

  useEffect(() => {
    AsyncStorage.getItem("storekey").then((Value) => {
      const newarr = JSON.parse(Value);
      if (Value !== null) {
        setTasks(newarr);
      }
    });
  }, []);
  return (
    <>
      <LinearGradient
        style={styles.s1}
        colors={["#AFA6E6", "transparent"]}
        start={{ x: 0.5, y: 1 }}
        end={{ x: 0.5, y: 0.5 }}
      >
        <View>
          <Text style={{ marginTop: 45, marginLeft: 20, fontSize: 40 }}>
            {day}
            {suffix(day)} {Month[month]}
          </Text>
          <Text style={{ marginLeft: 30, fontSize: 12 }}>{week[weekday]}</Text>
        </View>
        <View style={styles.bar}>
          <LinearGradient
            colors={["#4b0082", "#da70d6"]}
            start={{ x: 0, y: 0 }}
            end={{ x: 1, y: 0 }}
            style={[
              styles.innerbar,
              { width: `${(count / tasks.length) * 100}%` },
            ]}
          >
            <View style={styles.circle} />
          </LinearGradient>
          <View style={{ height: 30 }}>
            <Text
              style={{
                textAlign: "right",
                marginTop: 4,
                fontSize: 13,
                color: "#4b0082",
              }}
            >
              {count}/{tasks.length}
            </Text>
          </View>
        </View>

        <ScrollView
          style={{
            borderWidth: 1,
            borderColor: "lightgray",
            padding: 15,
            margin: 20,
            marginTop: 28,
            borderRadius: 20,
            boxShadow: "0 4px 8px rgba(0, 0, 0, 0.1)",
          }}
        >
          {count === tasks.length && (
            <Text
              style={{
                textAlign: "center",
                marginTop: "auto",
                color: "gray",
                height: 100,
                width: "100%",
              }}
            >
              All Tasks Completed !
            </Text>
          )}
          {tasks.map((item, ind) => {
            if (item.iscompleted) return;
            return (
              <View style={{ flexDirection: "row" }} key={ind}>
                <Addtoarr
                  key={ind}
                  item={item}
                  ind={ind}
                  tasks={tasks}
                  setTasks={setTasks}
                /><View style={styles.views}>

                <TouchableOpacity onPress={function (){handleEdit(ind)}}>
                  <AntDesign name="edit" size={22} color={"gray"}/>
                  </TouchableOpacity>

                <TouchableOpacity
                  onPress={function () {
                    deleteTask(ind);
                  }}>
                  <AntDesign name="minus" size={24} color="red" />
                </TouchableOpacity>

              </View>
              </View>
            );
          })}
        </ScrollView>
        <ScrollView
          style={{
            height: "20%",
            borderWidth: 1,
            borderColor: "lightgray",
            padding: 15,
            margin: 20,
            marginTop: 28,
            borderRadius: 20,
            boxShadow: "0 4px 8px rgba(0, 0, 0, 0.1)",
          }}
        >
          <Text style={{ color: "gray", marginBottom: 20 }}>
            Completed Tasks
          </Text>
          {tasks.map(
            (item, ind) =>
              item.iscompleted && (
                <View
                  key={ind}
                  style={{
                    flexDirection: "row",
                    margin: 2,
                    borderRadius: 15,
                  }}
                >
                  <Addtoarr
                    item={item}
                    ind={ind}
                    tasks={tasks}
                    setTasks={setTasks}
                  /><View style={styles.views}><TouchableOpacity onPress={handleEdit}>
                     <AntDesign name="edit" size={22} color={"gray"}/>
                  </TouchableOpacity>
                 

                  <TouchableOpacity
                    onPress={function () {
                      deleteTask(ind);
                    }}><AntDesign name="minus" size={24} color="red" />
                  </TouchableOpacity>

                </View>
                </View>
              )
          )}
          {tasks.length === count &&
            Alert.alert(
              "Hurrah! 🎉 All Tasks Completed",
              "You can click on the task to mark it as incomplete."
            )}
        </ScrollView>

        {modal && (
          <Edittasks
            modal={modal}
            setModal={setModal}
            tasks={tasks}
            setTasks={setTasks}
          />
        )}
      </LinearGradient>
      <TouchableOpacity style={styles.plus} onPress={() => setModal(true)}>
        <MaterialCommunityIcons name="plus" size={40} color="white" />
      </TouchableOpacity>
    </>
  );
};

export default HomePage;
