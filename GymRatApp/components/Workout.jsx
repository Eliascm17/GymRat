import React, { useState, useEffect, useContext } from 'react'
import { Card, ListItem, Button, Icon } from 'react-native-elements'
import { StyleSheet, Text, View, TextInput, Image } from 'react-native'
import { createMaterialTopTabNavigator } from '@react-navigation/material-top-tabs';
import axios from 'axios';
import userContext from '../contexts/userContext'

const Tab = createMaterialTopTabNavigator();

function workoutsTab() {

    const [Workouts, setWorkouts] = useState([])
    const { user } = useContext(userContext)

    //axios call
    //call once 
    //given a list of workout object
    // axios.get('url'+ user)   

        return (
            cards(Workouts)
        )


}

function favoritesTab() {

    const [Favorites, setFavorites] = useState([])
    const { user } = useContext(userContext)
    
    //axios call 
    //call once 
    //given a list of workout object

    return (
        cards(Favorites)
    )
}

function cards (list) {

    return (
        <Card containerStyle={{ padding: 0 }} >
            {
                list.map((workout, index) => {
                    return (
                        <ListItem
                            key={index}
                            title={workout.name}
                        />
                    );
                })
            }
        </Card>
    )

}


export default function Workout(props) {
    return (
        <Tab.Navigator tabBarOptions={{
            style: {paddingTop: 40}
        }}
        >
            <Tab.Screen name="Workouts" component={workoutsTab} />
            <Tab.Screen name="Favorites" component={favoritesTab} />
        </Tab.Navigator>
    );
}



