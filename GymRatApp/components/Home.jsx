import React, { useState, useEffect, useContext } from 'react'
import { Text, View, Dimensions } from 'react-native'
import { Button } from 'react-native-elements'
import Geolocation from '@react-native-community/geolocation';
import MapView from 'react-native-maps'

import HomeMapStyle from './HomeMapStyle.json'
import userContext from '../contexts/userContext'

function Home(props) {

    [gymPlaces, setGymPlaces] = useState([])

    Geolocation.getCurrentPosition(info => console.log(info));

    return (
        <View>
            <MapView 
                style={{ width: Dimensions.get('window').width, height: Dimensions.get('window').height }} 
                customMapStyle={HomeMapStyle}
            />
        </View>
    )
}

export default Home