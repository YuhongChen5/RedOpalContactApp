import React, { useState } from "react";
import { View, Text, TextInput, TouchableOpacity, Alert } from "react-native";
import { updateContactToApi } from "../services/service";
import styles from "../services/css";
import { simpleAlert } from "../services/alert";


//use route to get data passed from other page
//use navigation to ensure it still can navigate to other pages
export default function UpdateScreen({route, navigation}) {
    const selectedContact = route.params.selectedContact;
    const [firstName, setFirstName] = useState(selectedContact.FirstName);
    const [lastName, setLastName] = useState(selectedContact.LastName);
    const [phone, setPhone] = useState(selectedContact.Phone);
    const [departmentId, setDepartmentId] = useState(selectedContact.Department);
    const [address, setAddress] = useState(selectedContact.Street);
    const [city, setCity] = useState(selectedContact.City);
    const [state, setState] = useState(selectedContact.State);
    const [zip, setZIP] = useState(selectedContact.ZIP);
    const [country, setCountry] = useState(selectedContact.Country);

    const updateContact = () => {                   
        const updatedContact = {
            Id: selectedContact.Id,
            FirstName: firstName,
            LastName: lastName,
            Phone: phone,
            Department: departmentId,
            Street: address,
            City: city,
            State: state,
            ZIP: zip,
            Country: country
        }
        if (Object.keys(updatedContact).every(key => updatedContact[key] === selectedContact[key])) {
            simpleAlert('Error! No change has been made yet.');
        } else {           
            updateContactToApi(updatedContact)
            .then(() => {
                    simpleAlert('Contact has been successfully updated');
                    navigation.navigate('Full List');
            })
            .catch((error) => {
                console.error(error);
            });
        }
    }

    return (
        <View style={[styles.container, {justifyContent: "space-between"}]}>
            <View>
                <Text style={{marginLeft: 10, marginVertical: 10}}>Fill in the contact details need to be updated:</Text>
                <Text style={{marginLeft: 10}}>{'First Name:\t\t'}
                    <TextInput style={styles.textInput} placeholder={firstName} value={firstName} onChangeText={(text) => setFirstName(text)} />
                </Text>
                <Text style={{marginLeft: 10}}>{'Last Name:\t\t'}
                    <TextInput style={styles.textInput} placeholder={lastName} value={lastName} onChangeText={(text) => setLastName(text)} />
                </Text>
                <Text style={{marginLeft: 10}}>{'Phone:\t\t\t'}
                    <TextInput style={styles.textInput} placeholder={phone} value={phone} onChangeText={(text) => setPhone(text)} />
                </Text>
                <Text style={{marginLeft: 10}}>{'Department Id:\t'}
                    <TextInput style={styles.textInput} placeholder={departmentId} value={departmentId} onChangeText={(text) => setDepartmentId(text)} />
                </Text>
                <Text style={{marginLeft: 10}}>{'Address:\t\t\t'}
                    <TextInput style={styles.textInput} placeholder={address} value={address} onChangeText={(text) => setAddress(text)} />
                </Text>
                <Text style={{marginLeft: 10}}>{'City:\t\t\t\t'}
                    <TextInput style={styles.textInput} placeholder={city} value={city} onChangeText={(text) => setCity(text)} />
                </Text>
                <Text style={{marginLeft: 10}}>{'State:\t\t\t'}
                    <TextInput style={styles.textInput} placeholder={state} value={state} onChangeText={(text) => setState(text)} />
                </Text>
                <Text style={{marginLeft: 10}}>{'ZIP:\t\t\t\t'}
                    <TextInput style={styles.textInput} placeholder={zip} value={zip} onChangeText={(text) => setZIP(text)} />
                </Text>
                <Text style={{marginLeft: 10}}>{'Country:\t\t\t'}
                    <TextInput style={styles.textInput} placeholder={country} value={country} onChangeText={(text) => setCountry(text)} />
                </Text>
            </View>
            <View>
                <TouchableOpacity
                    style={styles.mainButton}
                    onPress={(e) => updateContact()}>
                        <Text style={styles.mainBtnText}>Update</Text>
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

