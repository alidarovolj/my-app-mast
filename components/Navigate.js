import React from 'react'
import About from './About'
import Main from './MainContent'
import Single from './Single'

import { NavigationContainer } from '@react-navigation/native'
import { createStackNavigator } from '@react-navigation/stack'

const Stack = createStackNavigator();

export default function Navigate() {
    return <NavigationContainer>
        <Stack.Navigator>
           <Stack.Screen name="Main" component = { Main } />
           <Stack.Screen name="About" component = { About } /> 
           <Stack.Screen name="Single" component = { Single } /> 
        </Stack.Navigator>
    </NavigationContainer>
}