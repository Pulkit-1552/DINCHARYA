import { Text, View, StyleSheet ,TouchableOpacity } from "react-native";
import { LinearGradient}  from "expo-linear-gradient";
import { MaterialCommunityIcons } from "@expo/vector-icons";
import { useState } from "react";
import {Edittasks} from "../components/Edittasks";  
import Listoftasks from "../app/Listoftasks";
// import Listoftasks from "../components/Listoftasks"; 



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
    const [taskarr, setTaskArr] = useState([]);
    const [modal,setModal]=useState(false);
    const time = new Date();
    const day = time.getDate();
    const month = time.getMonth();
    const weekday = time.getDay();

    return (
        <LinearGradient
            style={styles.s1}
            colors={["#AFA6E6", "transparent"]}
            start={{ x: 0.5, y: 1 }}
            end={{ x: 0.5, y: 0.5 }}
        >
            <View>
                <Text
                    style={{
                        marginTop: 45,
                        marginLeft: 20,
                        fontSize: 40,
                    }}
                >{day}{suffix(day)} {Month[month]}</Text>
                <Text
                    style={{
                        marginLeft: 30,
                        fontSize: 12,
                    }}
                >{week[weekday]}</Text>
            </View>

            <View style={styles.bar}>
                <LinearGradient
                    colors={["#4b0082", "#da70d6"]}
                    start={{ x: 0, y: 0 }}
                    end={{ x: 1, y: 0 }}
                    style={styles.innerbar}
                >
                    <View style={styles.circle}></View>
                </LinearGradient>
                <View
                    style={{
                        height: 30,
                        
                    }}
                >
                    <Text
                        style={{
                            textAlign: "right",
                            marginTop: 4,
                            fontSize: 13,
                            color: "#4b0082",
                        }}
                    >60% completed</Text>
                </View>
            </View>
            <View style={styles.plus}>
                <TouchableOpacity
                    style={{
                        justifyContent: "center",
                        alignItems: "center",
                        width: "100%",
                        height: "100%",
                    }}
                >
                    
                    <MaterialCommunityIcons name="plus" color="#FAFAFA99" onPress={()=>{setModal(true)}}  size={40}   />
                </TouchableOpacity>
                
            </View>
            {/* { taskarr.length >0 && taskarr.map((item) => (
               <Listoftasks taskval={item}/>
            ))} */}
            <View style={{borderWidth:1,borderColor:taskarr&&taskarr.length>0 ?"pink":"white",marginTop:25,}}>
           {  taskarr.map((item,ind)=>(
              <Listoftasks taskval={item} index={ind}/>
            ))
        }
        </View>
                   { modal && <Edittasks modal={modal} setModal={setModal} taskarr={taskarr} setTaskArr={setTaskArr}/>}


        </LinearGradient>
    );
};

export default HomePage;

const styles = StyleSheet.create({
    s1: {
        height: "100%",
    },
    bar: {
        backgroundColor: "white",
        height: 20,
        width: "90%",
        alignSelf: "center",
        borderWidth: 1,
        borderRadius: 10,
        marginTop: 20,
    },
    innerbar: {
        backgroundColor: "red",
        height: 18,
        borderRadius: 10,
        width: "60%",
    },
    circle: {
        borderWidth: 1,
        height: 16,
        width: 16,
        backgroundColor: "white",
        borderRadius: 8,
        position: "absolute",
        left: "100%",
        transform: [{ translateX: -20 }],
        top: 1,
    },
    plus: {
        backgroundColor: "#AFA6E6",
        height: 60,
        width: 60,
        borderRadius: 30,
        position: "absolute",
        bottom: 50,
        borderWidth: 0.5,
        shadowColor: "black",
        shadowOffset: { width: 0, height: 2 },
        shadowOpacity: 0.25,
        shadowRadius: 4,
        elevation: 5,
        alignSelf: "center",
    },
});
