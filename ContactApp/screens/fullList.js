import React, { useState } from "react";
import { useFocusEffect } from "@react-navigation/native";
import { getAllContact } from "../services/service";
import { View, FlatList, Text, TouchableOpacity, ActivityIndicator } from "react-native";
import styles from "../services/css";

export default function FullListScreen({navigation}) {
    const [contact, setContact] = useState([]);
    const [isLoading, setIsLoading] = useState(true);
    const [showDetail, setShowDetail] = useState(false);
    const [moreDetail, setMoreDetail] = useState(true);
    const [selectId, setSelectId] = useState();
    
    useFocusEffect(React.useCallback(() => {
        getAllContact()
            .then((data) => setContact(data))
            .catch((error) => { console.error(error) })
            .finally(() => setIsLoading(false));
    }, []));

    return (
        <View style={styles.container}>
            <Text style={{height: 50, marginLeft: 10, marginVertical: 10}} >
                Below is a list of all company staff contact details:
            </Text>
            {isLoading? <ActivityIndicator/> : (
            <FlatList
                data = {contact}
                keyExtractor={(item) => item.Id.toString()}
                //To refresh the flatlist for the item with selected ID
                extraData={selectId}
                renderItem={({item}) => (
                    <View>
                        <View style={styles.containerRow} >
                            <Text style={styles.contactName}>
                                {item.Id}-{item.FirstName} {item.LastName}
                            </Text>
                            <TouchableOpacity
                            style={styles.smallButton}
                            onPress={() => {
                                setShowDetail(!showDetail);
                                setMoreDetail(!moreDetail);
                                setSelectId(item.Id);
                            }}>
                                {/*Only change the selected button name*/}
                                <Text style={styles.smallBtnText}>{item.Id ===selectId? (moreDetail? "More Details": "Less Details"): "More Details"}</Text>
                            </TouchableOpacity>
                            <TouchableOpacity
                            style={styles.smallButton}
                            onPress={(e) => {
                                //setSelectId(item.Id);
                                navigation.navigate('Update Contact', {selectedContact: item})
                                }}>
                                <Text style={styles.smallBtnText}>Update</Text>
                            </TouchableOpacity>
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
            />)}
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
            <TouchableOpacity
                style={styles.mainButton}
                onPress={(e) => navigation.navigate('Home')}>
                    <Text style={styles.mainBtnText}>Back to Home Page</Text>
            </TouchableOpacity>
        </View>
    )
}



