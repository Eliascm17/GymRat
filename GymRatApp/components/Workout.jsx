import React, { useState, useEffect, useContext } from 'react'
import { Card, ListItem, Button } from 'react-native-elements'
import { StyleSheet, Text, View, TextInput, Image } from 'react-native'
import { createMaterialTopTabNavigator } from '@react-navigation/material-top-tabs';
import Icon from 'react-native-vector-icons/FontAwesome';
import axios from 'axios';
import userContext from '../contexts/userContext'
import FontAwesome5 from 'react-native-vector-icons/FontAwesome5'


const Tab = createMaterialTopTabNavigator();

function workoutsTab() {

    const [Workouts, setWorkouts] = useState([])
    const { user } = useContext(userContext)

    useEffect(() => {
        axios.get('https://gymratstable-yswlpk5fsa-uc.a.run.app/api/workouts/' + user)
            .then(results => setFavorites(results))
            .then(() => {console.log()})
            .catch(err => console.log(err))
    })

        return (
            <View>
                {Workouts ? cards(Workouts) : null}

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
                    // onPress{() => modal()}
                />
            </View>
    
            )


}

function favoritesTab() {

    const [Favorites, setFavorites] = useState([])
    const { user } = useContext(userContext)


    return (
        <View>
            <Card containerStyle={{padding: 0}}>
                <Card
                    title='HELLO WORLD'>
                </Card>
            </Card>
            <Card containerStyle={{padding: 0}}>
                <Card
                    title='HELLO WORLD'>
                </Card>
            </Card>
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



