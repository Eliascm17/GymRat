import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { ThemeProvider } from 'react-native-elements';

export default function App() {
	return (
		<ThemeProvider>
			
			<Button title="Hey!" />
			<Button title="Hey!" />
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
