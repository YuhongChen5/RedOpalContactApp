import { StyleSheet } from "react-native";



const styles = StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: "#f5f5f5",
      justifyContent: "center",
    },
    containerRow: {
      flex: 1,
      flexDirection: "row",
      padding: 10,
    },
    mainButton: {     
      width: 220,
      marginVertical: 10,
      backgroundColor: "#DEB887",
      alignSelf: "center",
      alignItems: "center",
      padding: 10,
      borderRadius: 10
    },
    smallButton:{
      backgroundColor: "#DEB887", 
      width: 100,
      marginHorizontal:5, 
      alignItems: "center", 

      borderRadius: 5
    },
    mainBtnText: {
      fontSize: 20,
      fontWeight: "bold",
      color: "white",
    },
    smallBtnText: {
      fontSize: 15,
      color: "white",
    },
    welcomeText: {
      fontSize: 30,
      fontWeight: "bold",
    },
    contactName: {
      flex:1, 
      fontSize: 15,
      fontWeight: "bold",
      alignSelf: "center"
    },
    contactDetail: {
      padding: 10,

    },
    textInput: {
      height: 30,
      margin: 10,
      borderWidth: 1,
      padding: 10,
    }


  })

export default styles;
