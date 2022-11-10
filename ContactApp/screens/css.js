import { StyleSheet } from "react-native";



const styles = StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: "#fff",
      justifyContent: "center",
    },
    containerRow: {
      flex: 1,
      flexDirection: "row",
      padding: 10,
    },
    welcomeText: {
      fontSize: 20,
      fontWeight: "bold",
    },
    contactName: {
      flex:1, 
      fontWeight: "bold",
    },
    contactDetail: {
      flex: 1,
      padding: 10,

    },
    mainButton: {
      flex: 1,
      Color: "#ffebcd",
      height: 10,
      justifyContent: "space-between",
    },

  })

export default styles;
