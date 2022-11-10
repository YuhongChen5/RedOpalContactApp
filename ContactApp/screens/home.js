import React, { useState } from "react";
import { View, FlatList, Text, StyleSheet, Button } from "react-native";
import styles from "./css";



export default function HomeScreen({navigation}) {

    return (
        <View style={styles.container}>
            <View style={{alignItems:'center', paddingVertical: 140 }}>
                <Text style={styles.welcomeText}>Welcome to Red Opal Contact App</Text>
            </View>
            <View style={{height: 50, justifyContent: 'space-between'}}>
                <Text>Choose what you would like to do:</Text>
            </View>
            <View style={{flex: 1, justifyContent: 'top'}}>
                <Button title="Show Full List" style={styles.mainButton} onPress={(e) => navigation.navigate('Full List')}/>
                <Button title="Search Contact" onPress={(e) => navigation.navigate('Search')} />
                <Button title="Add New Contact" onPress={(e) => navigation.navigate('Add New')} />
            </View>
        </View>
    )



}
