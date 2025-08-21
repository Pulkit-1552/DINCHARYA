import { StyleSheet } from "react-native";
export  default StyleSheet.create({
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
    padding: "5",
    borderRadius: 100,
    position: "absolute",
    bottom: 50,
    left: "50%",
    transform: [
      {
        translateX: "-50%",
      },
    ],
    elevation: 5,
  },
  views :{
    gap:20,
    flexDirection:"row"
  }
});
