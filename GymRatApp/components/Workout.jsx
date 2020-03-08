import React, { useState, useEffect, useContext } from 'react'
import { Card, ListItem, Button } from 'react-native-elements'
import { StyleSheet, Text, View, TextInput, Image, Modal } from 'react-native'
import { createMaterialTopTabNavigator } from '@react-navigation/material-top-tabs';
import Icon from 'react-native-vector-icons/FontAwesome';
import axios from 'axios';
import userContext from '../contexts/userContext'
import FontAwesome5 from 'react-native-vector-icons/FontAwesome5'

const Tab = createMaterialTopTabNavigator();

function workoutsTab() {

    const [Workouts, setWorkouts] = useState([])
    const { user } = useContext(userContext)

    console.log({Workouts})

    useEffect(() => {
        console.log({user})
        axios.get('https://gymratstable-yswlpk5fsa-uc.a.run.app/api/workouts/' + user.name)
            .then(results => {
                setWorkouts(results.data)
            })
            // .then(results => { console.log('Workouts for user: ' + results.data)})
            .catch(err => console.log(err))
    }, [])

        return (
            <View>
                {Workouts && cards(Workouts)}
                <Button
                    Icon={<FontAwesome5 name={'plus'} color={'black'} size={15}/>}
                    buttonStyle={{ 
                        marginTop: 25, 
                        width: 65, 
                        alignSelf: 'flex-end', 
                        borderRadius: 60, 
                        backgroundColor: "white",
                        marginTop: 590,
                        marginRight: 30,
                        borderWidth: 1,
                        height: 65 
                    }}
                    onPress={() => modal()}
                />
    
            </View>
            )
}

function favoritesTab() {

    const [Favorites, setFavorites] = useState([])
    const { user } = useContext(userContext)

    // useEffect(() => {
    //     axios.get('https://gymratstable-yswlpk5fsa-uc.a.run.app/api/workouts/' + user)
    //         .then(results => setWorkouts(results))
    //         .then(() => { console.log() })
    //         .catch(err => console.log(err))
    // }, [])

    return (
            <View>
                {/* return mapped workouts here in a list */}
            </View>
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

function modal() {

}


export default function Workout(props) {
    return (
        <Tab.Navigator tabBarOptions={{
            style: {paddingTop: 60}
        }}
        >
            <Tab.Screen name="Workouts" component={workoutsTab} />
            <Tab.Screen name="Favorites" component={favoritesTab} />
        </Tab.Navigator>
    );
}



