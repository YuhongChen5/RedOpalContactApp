import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import React from 'react';
import HomeScreen from './screens/home';
import ResultScreen from './screens/result';
import SearchScreen from './screens/search';
import AddScreen from './screens/add';
import FullListScreen from './screens/fullList';
import UpdateScreen from './screens/update';

const Stack = createNativeStackNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName='Home'>
        <Stack.Screen name='Home' component={HomeScreen} />
        <Stack.Screen name='Search' component={SearchScreen} />
        <Stack.Screen name='Full List' component={FullListScreen} />
        <Stack.Screen name='Search Result' component={ResultScreen} />
        <Stack.Screen name='Add New' component={AddScreen} />
        <Stack.Screen name='Update Contact' component={UpdateScreen} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}


