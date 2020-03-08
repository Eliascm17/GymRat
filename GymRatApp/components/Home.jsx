import React, { useState, useEffect, useContext } from 'react'
import { Text, View, Dimensions } from 'react-native'
import { Button } from 'react-native-elements'
import MapView from 'react-native-maps'
import * as Permissions from 'expo-permissions'

import HomeMapStyle from './HomeMapStyle.json'
import userContext from '../contexts/userContext'

function Home(props) {

	const [ gymPlaces, setGymPlaces ] = useState([])

	useEffect(async () => {
		// permissions returns only for location permissions on iOS and under certain conditions, see Permissions.LOCATION
		const { status, permissions } = await Permissions.askAsync(Permissions.LOCATION)
		if (status === 'granted') {
			return Location.getCurrentPositionAsync({ enableHighAccuracy: true })
		} else {
			throw new Error('Location permission not granted')
		}
	}, [])

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