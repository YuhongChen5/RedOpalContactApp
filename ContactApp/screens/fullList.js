import React, { useState } from "react";
import { View, FlatList, Text, StyleSheet, Button, Alert } from "react-native";
import { useFocusEffect } from "@react-navigation/native";
import { getAllContact } from "../services/service";
import styles from "./css";

export default function FullListScreen({navigation}) {
    const [contact, setContact] = useState([]);
    const [isLoading, setIsLoading] = useState(true);

    useFocusEffect(React.useCallback(() => {
        getAllContact()
            .then((data) => setContact(data))
            .catch((error) => { console.error(error) })
            .finally(() => setIsLoading(false));
    }, []));

    const [showDetail, setShowDetails] = useState(false);
    const [moreDetail, setMoreDetails] = useState(true);
    const [selectId, setSelectId] = useState();
    return (
        <View style={styles.container}>
            <Text >Below is a list of all company staff contact details:</Text>
            <FlatList
                data = {contact}
                keyExtractor={(item) => item.Id.toString()}
                extraData={selectId}
                renderItem={({item}) => (
                    <View>
                        <View style={styles.containerRow} >
                            <Text style={styles.contactName}>{item.Id}-{item.FirstName} {item.LastName}</Text>
                            <Button id={item.Id} title={moreDetail? "More Details" : "Less Details"} color={'#ffebcd'} onPress={() => {
                                    setShowDetails(!showDetail);
                                    setMoreDetails(!moreDetail);
                                    setSelectId(item.Id);
                                }} />
                            <Button title="Update" />
                        </View>
                        {showDetail?
                            item.Id === selectId?
                            <Text style={styles.contactDetail}>                            
                                Phone: {item.Phone}{'\n'}
                                DepartmentID: {item.Department}{'\n'}
                                Street Address: {item.Street}{'\n'}
                                City: {item.City}{'\n'}
                                State: {item.State}{'\n'}
                                ZIP: {item.ZIP}{'\n'}
                                Country: {item.Country}
                            </Text>
                            : null
                        : null}
                    </View>

                )}
            />
            <Button title="Search" onPress={(e) => navigation.navigate("Search")} />
            <Button title="Add New Contact" onPress={(e) => navigation.navigate("Add New")} />
            <Button title="Back to home page" onPress={(e) => navigation.navigate("Home")} />

        </View>
    )
}

