import React, { useState, useEffect, useContext } from 'react'
import { Text, View, Dimensions } from 'react-native'
import MapView from 'react-native-maps'
import * as Permissions from 'expo-permissions'
import * as Location from 'expo-location'

import MapStyle from './MapStyle.json'
import userContext from '../contexts/userContext'

function Map(props) {

	let coords;
	const [ gymPlaces, setGymPlaces ] = useState([])

	// useEffect(async () => {
	// 	// permissions returns only for location permissions on iOS and under certain conditions, see Permissions.LOCATION
	// 	const { status, permissions } = await Permissions.askAsync(Permissions.LOCATION)
	// 	if (status === 'granted') {
	// 		coords = await Location.getCurrentPositionAsync({ enableHighAccuracy: true })
	// 	} else {
	// 		throw new Error('Location permission not granted')
	// 	}
	// }, [])

	return (
		<View>
			<MapView 
				style={{ width: Dimensions.get('window').width, height: Dimensions.get('window').height }} 
				customMapStyle={MapStyle}
			/>
		</View>
	)
}

export default Map