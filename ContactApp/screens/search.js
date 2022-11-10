import React, { useState } from "react";
import { View, FlatList, Text, StyleSheet, Button, TextInput } from "react-native";


export default function SearchScreen({navigation}) {
    const [id, setId] = useState();
    const [firstName, setFirstName] = useState('');
    const [lastName, setLastName] = useState('');
    const [phone, setPhone] = useState('');
    const [city, setCity] = useState('');
    const [state, setState] = useState('');
    const [zip, setZIP] = useState('');

    return (
        <View style={styles.container}>
            <Text>Fill in the search criteria:</Text>
            <TextInput placeholder="Enter ID" value={id} onChangeText={(text) => setId(text)} />
            <TextInput placeholder="Enter First Name" value={firstName} onChangeText={(text) => setFirstName(text)} />
            <TextInput placeholder="Enter Last Name" value={lastName} onChangeText={(text) => setLastName(text)} />
            <TextInput placeholder="Enter phone number (starting with area code)" value={phone} onChangeText={(text) => setPhone(text)} />
            <TextInput placeholder="Enter city" value={city} onChangeText={(text) => setCity(text)} />
            <TextInput placeholder="Enter state" value={state} onChangeText={(text) => setState(text)} />
            <TextInput placeholder="Enter ZIP" value={zip} onChangeText={(text) => setZIP(text)} />
            <Button title="Search" onPress={(e) => navigation.navigate("Search Result")} />
            <Button title="Back to full list" onPress={(e) => navigation.navigate("Full List")} />
            <Button title="Back to home page" onPress={(e) => navigation.navigate("Home")} />
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: '#fff',
      justifyContent: 'center',
    },
  });