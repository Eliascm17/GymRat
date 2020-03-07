import React, { useState } from 'react'
import { StyleSheet, Text, View } from 'react-native'
import 'react-native-gesture-handler';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';

import UserContext from './contexts/userContext'

import Splash from './components/Splash'
import Home from './components/Home'
import Profile from './components/Profile'
import Workout from './components/Workout'

const Stack = createStackNavigator();

export default function App() {

	const [user, setUser] = useState({ id: "", name: "", bio: "", points: 0 })
	newUser = async (name) => {
		// api call

		// set user
	}

	return (
		<UserContext.Provider value={{user, newUser}}>
			<NavigationContainer>
				<Stack.Navigator>
					<Stack.Screen name="splash" component={Profile} />
				</Stack.Navigator>
			</NavigationContainer>
		</UserContext.Provider>
	);
}

const styles = StyleSheet.create({
	container: {
		flex: 1,
		backgroundColor: '#fff',
		alignItems: 'center',
		justifyContent: 'center',
	},
});
