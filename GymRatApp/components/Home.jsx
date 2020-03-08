import React from 'react'
import { View } from 'react-native'
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs'

import Map from './Map'

export default function Home(props) {

    const Tab = createBottomTabNavigator();
    
    return(
        <View>
            <Tab.Navigator>
                <Tab.Screen name="map" component={Map} />
            </Tab.Navigator>
        </View>
    )

}