import React from 'react'
import { View } from 'react-native'
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs'
import { NavigationContainer } from '@react-navigation/native'
import { Icon } from 'react-native-elements'

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
                        let iconName;

                        switch(route.name) {
                            case 'map':     return <Icon name='map-marked-alt' type="font-awesome" color={color} size={size}/>
                            case 'workout': return <Icon name='dumbbell' type="font-awesome" color={color} size={size}/>
                            default:        return <Icon name='bolt' type="font-awesome" color={color} size={size}/>
                        }
                    }
                })}
                tabBarOptions={{
                    activeTintColor: 'tomato',
                    inactiveTintColor: 'gray',
                }}
            >
                <Tab.Screen name="map" component={Map} />
                <Tab.Screen name="workout" component={Workout} />
            </Tab.Navigator>
        </NavigationContainer>
    )

}