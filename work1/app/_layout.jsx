import { AntDesign } from "@expo/vector-icons";
import { Tabs } from "expo-router";

export default function Layout() {
    return (
        <Tabs screenOptions={{
            tabBarStyle: {
                height: 70,
            }
        }}>
        
            <Tabs.Screen
                name="index"
                options={{
                    title: "Home",
                    headerShown:false,
                    tabBarIcon: () => <AntDesign name="home" size={24} color="black" />,
                }}
            />
            <Tabs.Screen
                name="test"
                options={{
                    title: "About",
                    tabBarIcon: () => <AntDesign name="infocirlceo" size={24} color="grey" />
                }}
            />
        </Tabs>
    );
}
