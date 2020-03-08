import React from 'react'
import { View, Text } from 'react-native'
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs'
import { NavigationContainer } from '@react-navigation/native'
import FontAwesome5 from 'react-native-vector-icons/FontAwesome5'

import Map from './Map'
import Workout from './Workout'

export default function Home(props) {

    const Tab = createBottomTabNavigator();
    
    return(
        <NavigationContainer independent={true}>
            <Tab.Navigator 
                initialRouteName="map" 
                screenOptions={({ route }) => ({
                    tabBarIcon: ({ focused, color, size }) => {
                        
                        switch(route.name) {
                            case 'map':     return <FontAwesome5 name={'map-marked-alt'} color={color} size={size}/>
                            case 'workout': return <FontAwesome5 name={'dumbbell'} color={color} size={size}/>
                        }
                    }
                })}
                tabBarOptions={{
                    activeTintColor: 'white',
                    inactiveTintColor: 'gray',
                    activeBackgroundColor: '#951BAD'
                }}
            >
                <Tab.Screen name="map" component={Map} />
                <Tab.Screen name="workout" component={Workout} />
            </Tab.Navigator>
        </NavigationContainer>
    )

}