import { Text, View, StyleSheet, TouchableOpacity, Image, ScrollView, TouchableHighlight } from "react-native";
import { useState } from "react";

const HomePage = () => {
    const [taskarr, setTaskArr] = useState([]);

    return (
        <View>
            <View>
                <Image
                    source={{ uri: 'https://th.bing.com/th/id/OIP.o1zZbawpsrbXkNEF-TEoFgHaEn?cb=iwp2&rs=1&pid=ImgDetMain' }}
                    style={{ width: "100%", height: 275 }}
                />
            </View>
            <View style={{flexDirection:"row"}}>
            <View style={{ marginTop: 30,width:"30%" }}>
                <Text
                    style={{
                        fontSize: 25,
                        textAlign: "left",
                        fontWeight: "bold",
                         marginLeft:6,
                    }}
                >
                    Nike {"\n"}Series 5
                </Text>
            </View>

                <View style={{ flexDirection: "row", 
                    width:"70%",marginTop:"40",justifyContent: "space-around" }}>
                    <View>
                        <Text>Red</Text>
                    </View>
                    <View
                        style={{
                            borderRadius: 7.5,
                            width: 15,
                            height: 15,
                            backgroundColor: "red",
                        }}
                    />
                </View>
            </View>
            <View style={{flexDirection:"row",marginTop:5,gap:"40%"}}>
                <View><Text style={{
                    fontSize: 12,
                    color:"lightgray",
                    marginLeft:6,
                    fontWeight: "bold", //nannu see this at home why it cut half
                }}>WaterProof Sport Shoes</Text></View>
                <View> <Text style={{
                    fontSize:18,
                }}>12 cm</Text></View>
            </View>

            <View style={{flexDirection:"row",alignItems:"center"}}> <Text style={{fontSize:9}}>💲</Text><Text style={{fontSize:25}}> 340</Text></View>
       
       <View style={{ flexDirection:"row",gap:80}}>
       <View> <Text>⭐4.5(103 Reviews)</Text></View>
       <View style={{flexDirection:"row", gap:40}}>
        <View> <TouchableHighlight><Text>➖</Text></TouchableHighlight></View>
         <View> <TouchableHighlight><Text>1</Text></TouchableHighlight></View>
         <View> <Text>➕</Text></View>
         </View>
        </View> 

        <View style={{alignItems:"center",marginTop:30}}>
        <TouchableOpacity style={{width:"90%",height:50,backgroundColor:"#ff6865",borderRadius:15}}><Text style={{ color:"white",textAlign:"center",padding:15,}}>+ Add to cart</Text></TouchableOpacity>

        </View>

<View> <Text style={{marginTop:25,color:"gray"}}>Comfortability is one of the crucial factors that online xyzzzbal factors that online buyers consider when</Text></View>

<ScrollView
    style={{marginTop:20}}
    horizontal={true}
>
    <View style={{flexDirection: 'row', gap: 10}}>
        <Image
            source={{ uri: 'https://th.bing.com/th/id/OIP.orRqsO1iCI8wPjE9NcbxsgHaHa?w=182&h=182&c=7&r=0&o=7&cb=iwp2&dpr=1.3&pid=1.7&rm=3' }}
            style={{ width: 120, height: 130, borderRadius: 10 }}
        />
    
        <Image
            source={{ uri: 'https://th.bing.com/th/id/OIP.LrkxXIPBlXPeCsIdvYMy6wHaHa?w=168&h=180&c=7&r=0&o=7&cb=iwp2&dpr=1.3&pid=1.7&rm=3' }}
            style={{ width: 120, height: 130, borderRadius: 10 }}
        />
       
       <Image
            source={{ uri: 'https://th.bing.com/th/id/OIP.orRqsO1iCI8wPjE9NcbxsgHaHa?w=182&h=182&c=7&r=0&o=7&cb=iwp2&dpr=1.3&pid=1.7&rm=3' }}
            style={{ width: 120, height: 130, borderRadius: 10 }}
        />
    
     <Image
            source={{ uri: 'https://th.bing.com/th/id/OIP.LrkxXIPBlXPeCsIdvYMy6wHaHa?w=168&h=180&c=7&r=0&o=7&cb=iwp2&dpr=1.3&pid=1.7&rm=3' }}
            style={{ width: 120, height: 130, borderRadius: 10 }}
        />
    </View>
</ScrollView>

        </View>
    );
};

export default HomePage;