import React from "react";
import { View, Text, TouchableOpacity } from "react-native";
import styles from "../services/css";

export default function HomeScreen({navigation}) {  
    return (
        <View style={styles.container}>
            <View style={{alignItems:'center', paddingVertical: 100 }}>
                <Text style={styles.welcomeText}>Welcome to</Text>
                <Text style={styles.welcomeText}>Red Opal Contact App</Text>
            </View>

            <View style={{height: 50, marginLeft: 15, justifyContent: 'space-between'}}>
                <Text>Choose what you would like to do:</Text>
            </View>
            
            <View style={{flex: 1, justifyContent: 'top'}}>
                <TouchableOpacity
                style={styles.mainButton}
                onPress={(e) => navigation.navigate('Full List')}>
                    <Text style={styles.mainBtnText}>Show Full List</Text>
                </TouchableOpacity>
                <TouchableOpacity
                style={styles.mainButton}
                onPress={(e) => navigation.navigate('Search')}>
                    <Text style={styles.mainBtnText}>Search Contact</Text>
                </TouchableOpacity>
                <TouchableOpacity
                style={styles.mainButton}
                onPress={(e) => navigation.navigate('Add New')}>
                    <Text style={styles.mainBtnText}>Add New Contact</Text>
                </TouchableOpacity>
            </View>
        </View>
        )
}