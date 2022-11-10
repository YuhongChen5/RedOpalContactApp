import React, { useState } from "react";
import { View, FlatList, Text, StyleSheet, Button, TextInput } from "react-native";
import styles from "./css";


export default function UpdateScreen({navigation}) {
    const [firstName, setFirstName] = useState('');
    const [lastName, setLastName] = useState('');
    const [phone, setPhone] = useState('');
    const [departmentId, setDepartmentId] = useState();
    const [address, setAddress] = useState('');
    const [city, setCity] = useState('');
    const [state, setState] = useState('');
    const [zip, setZIP] = useState('');
    const [country, setCountry] = useState('');

    return (
        <View style={styles.container}>
            <Text>Fill in the new contact details:</Text>
            <TextInput placeholder="Enter First Name" value={firstName} onChangeText={(text) => setFirstName(text)} />
            <TextInput placeholder="Enter Last Name" value={lastName} onChangeText={(text) => setLastName(text)} />
            <TextInput placeholder="Enter phone number (starting with area code)" value={phone} onChangeText={(text) => setPhone(text)} />
            <TextInput placeholder="Enter department Id" value={departmentId} onChangeText={(text) => setDepartmentId(text)} />
            <TextInput placeholder="Enter street address" value={address} onChangeText={(text) => setAddress(text)} />
            <TextInput placeholder="Enter city" value={city} onChangeText={(text) => setCity(text)} />
            <TextInput placeholder="Enter state" value={state} onChangeText={(text) => setState(text)} />
            <TextInput placeholder="Enter ZIP" value={zip} onChangeText={(text) => setZIP(text)} />
            <TextInput placeholder="Enter country (default Australia)" value={country} onChangeText={(text) => setCountry(text)} />
            <Button title="Update" />
            <Button title="Back to full list" onPress={(e) => navigation.navigate("Full List")} />
            <Button title="Back to home page" onPress={(e) => navigation.navigate("Home")} />
        </View>
    )
}

