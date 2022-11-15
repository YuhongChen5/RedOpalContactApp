import React, { useState } from "react";
import { View, FlatList, Text, StyleSheet, Button, TextInput } from "react-native";
import styles from "../services/css";

export default function SearchResult({navigation}) {

    return (
        <View style={styles.container}>
            <Text>Below is the search result</Text>
            <Button title="Another search" onPress={(e) => navigation.navigate("Search")} />
            <Button title="Update contact" onPress={(e) => navigation.navigate("Update Contact")} />
            <Button title="Add New" onPress={(e) => navigation.navigate("Add New")} />
            <Button title="Back to full list" onPress={(e) => navigation.navigate("Full List")} />
            <Button title="Back to home page" onPress={(e) => navigation.navigate("Home")} />
        </View>
    )
}
