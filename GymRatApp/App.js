import React from 'react'
import { StyleSheet, Text, View } from 'react-native'
import Splash from './components/Splash'

export default function App() {
	return (
		<ThemeProvider>
			<Splash/>
		</ThemeProvider>
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
