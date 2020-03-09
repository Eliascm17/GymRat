import React from 'react'
import { View, Text } from 'react-native'
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs'
import { NavigationContainer } from '@react-navigation/native'
import FontAwesome5 from 'react-native-vector-icons/FontAwesome5'

import Map from './Map'
import Workout from './Workout'
import Profile from './Profile'

export default function Home(props) {

    const Tab = createBottomTabNavigator();
    
    return (
        <NavigationContainer independent={true}>
          <Tab.Navigator
            initialRouteName="map"
            tabBarOptions={{
              activeTintColor: "white",
              inactiveTintColor: "gray",
              activeBackgroundColor: "#951BAD",
              marginBottom: 23
            }}
          >
            <Tab.Screen
              name="map"
              component={Map}
              options={{
                tabBarIcon: ({ color, size }) => (
                  <FontAwesome5 name={"map"} color={color} size={size} />
                )
              }}
            />
            <Tab.Screen
              name="workout"
              component={Workout}
              options={{
                tabBarIcon: ({ color, size }) => (
                  <FontAwesome5 name={"dumbbell"} color={color} size={size} />
                )
              }}
            />
            <Tab.Screen
              name="profile"
              component={Profile}
              options={{
                tabBarIcon: ({ color, size }) => (
                  <FontAwesome5 name={"user"} color={color} size={size} />
                )
              }}
            />
          </Tab.Navigator>
        </NavigationContainer>
      
    );

}