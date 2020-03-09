import React, { useState } from 'react'
import { Platform, StyleSheet, Text, View } from 'react-native'
import 'react-native-gesture-handler';
import { NavigationContainer, ThemeProvider } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';

import UserContext from './contexts/userContext'

import Home from './components/Home'
import Login from './components/Login'
import Profile from './components/Profile'

const Stack = createStackNavigator();

export default function App() {

	const [user, setUser] = useState({ name: "", bio: "", points: 0 })

	const theme = {}

	return (
		<UserContext.Provider value={{user, setUser}}>
			<ThemeProvider theme={theme}>
				<NavigationContainer>
					{!user.name ?
						<Stack.Navigator headerMode="none">
							<Stack.Screen name="login" component={Login}/>
						</Stack.Navigator>
					: 
						<Stack.Navigator headerMode="none">
							<Stack.Screen name="home" component={Home} />
						</Stack.Navigator>
					}
				</NavigationContainer>
			</ThemeProvider>
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
