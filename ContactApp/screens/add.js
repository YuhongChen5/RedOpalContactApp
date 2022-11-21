import React, { useState } from "react";
import { View, Text, TextInput, TouchableOpacity } from "react-native";
import styles from "../services/css";

//use route to get data passed from other page
//use navigation to ensure it still can navigate to other pages
export default function SearchScreen({navigation}) {
    const [id, setId] = useState();
    const [firstName, setFirstName] = useState('');
    const [lastName, setLastName] = useState('');
    const [phone, setPhone] = useState('');
    const [departmentId, setDepartmentId] = useState();
    const [address, setAddress] = useState('');
    const [city, setCity] = useState('');
    const [state, setState] = useState('');
    const [zip, setZIP] = useState('');
    const [country, setCountry] = useState('Australia');

    return (
        <View style={[styles.container, {justifyContent: "space-between"}]}>
            <View>
                <Text style={{marginLeft: 10, marginVertical: 10}}>Fill in the new contact details:</Text>
                <Text style={{marginLeft: 10}}>{'First Name:\t\t'}
                    <TextInput style={styles.textInput} value={firstName} onChangeText={(text) => setFirstName(text)} />
                </Text>
                <Text style={{marginLeft: 10}}>{'Last Name:\t\t'}
                    <TextInput style={styles.textInput} value={lastName} onChangeText={(text) => setLastName(text)} />
                </Text>
                <Text style={{marginLeft: 10}}>{'Phone:\t\t\t'}
                    <TextInput style={styles.textInput} value={phone} onChangeText={(text) => setPhone(text)} />
                </Text>
                <Text style={{marginLeft: 10}}>{'Department Id:\t'}
                    <TextInput style={styles.textInput} value={departmentId} onChangeText={(text) => setDepartmentId(text)} />
                </Text>
                <Text style={{marginLeft: 10}}>{'Address:\t\t\t'}
                    <TextInput style={styles.textInput} value={address} onChangeText={(text) => setAddress(text)} />
                </Text>
                <Text style={{marginLeft: 10}}>{'City:\t\t\t\t'}
                    <TextInput style={styles.textInput} value={city} onChangeText={(text) => setCity(text)} />
                </Text>
                <Text style={{marginLeft: 10}}>{'State:\t\t\t'}
                    <TextInput style={styles.textInput} value={state} onChangeText={(text) => setState(text)} />
                </Text>
                <Text style={{marginLeft: 10}}>{'ZIP:\t\t\t\t'}
                    <TextInput style={styles.textInput} value={zip} onChangeText={(text) => setZIP(text)} />
                </Text>
                <Text style={{marginLeft: 10}}>{'Country:\t\t\t'}
                    <TextInput style={styles.textInput} placeholder={country} value={country} onChangeText={(text) => setCountry(text)} />
                </Text>
            </View>
            <View>
                <TouchableOpacity
                    style={styles.mainButton}>
                        <Text style={styles.mainBtnText}>Create New</Text>
                </TouchableOpacity>
                <TouchableOpacity
                    style={styles.mainButton}
                    onPress={(e) => navigation.navigate('Full List')}>
                        <Text style={styles.mainBtnText}>Back to Full List</Text>
                </TouchableOpacity>
                <TouchableOpacity
                    style={styles.mainButton}
                    onPress={(e) => navigation.navigate('Home')}>
                        <Text style={styles.mainBtnText}>Back to Home Page</Text>
                </TouchableOpacity>
            </View>
        </View>
    )
}

