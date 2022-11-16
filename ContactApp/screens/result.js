import React, { useState } from "react";
import { useFocusEffect } from "@react-navigation/native";
import { getAllContact } from "../services/service";
import { View, FlatList, Text, TouchableOpacity, ActivityIndicator } from "react-native";
import styles from "../services/css";

export default function ResultScreen({route, navigation}) {
    const searchResult = route.params;
    const [showDetail, setShowDetail] = useState(false);
    const [moreDetail, setMoreDetail] = useState(true);
    const [selectId, setSelectId] = useState();

    return (
        <View style={styles.container}>
            <Text style={{height: 50, marginLeft: 10, marginVertical: 10}} >
                Below is the search result:
            </Text>
            <FlatList
                data = {searchResult}
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
            />
            <TouchableOpacity
                style={styles.mainButton}
                onPress={(e) => navigation.navigate('Search')}>
                    <Text style={styles.mainBtnText}>Another search</Text>
            </TouchableOpacity>
            <TouchableOpacity
                style={styles.mainButton}
                onPress={(e) => navigation.navigate('Update Contact')}>
                    <Text style={styles.mainBtnText}>Update contact</Text>
            </TouchableOpacity>
            <TouchableOpacity
                style={styles.mainButton}
                onPress={(e) => navigation.navigate('Add New')}>
                    <Text style={styles.mainBtnText}>Add New Contact</Text>
            </TouchableOpacity>
            <TouchableOpacity
                style={styles.mainButton}
                onPress={(e) => navigation.navigate('Full List')}>
                    <Text style={styles.mainBtnText}>Back to full list</Text>
            </TouchableOpacity>
            <TouchableOpacity
                style={styles.mainButton}
                onPress={(e) => navigation.navigate('Home')}>
                    <Text style={styles.mainBtnText}>Back to Home Page</Text>
            </TouchableOpacity>
        </View>
    )
}


