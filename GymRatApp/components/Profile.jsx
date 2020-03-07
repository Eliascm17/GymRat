import React, { useState } from 'react'
import { StyleSheet, Text, View, TouchableOpacity } from 'react-native'
import MenuDrawer from 'react-native-side-drawer'
 
export default function Profile() {
	
	const [drawer, setDrawer] = useState(false)
 
	toggleOpen = () => {
		this.setState({ open: !this.state.open });
	};
 
	drawerContent = () => {
		return (
			<TouchableOpacity onPress={() => setDrawer(false)} style={styles.animatedBox}>
				<Text>Close</Text>
			</TouchableOpacity>
		);
	};
 
	render() {
		return (
			<View style={styles.container}>
				<MenuDrawer 
					open={drawer}
					drawerContent={this.drawerContent()}
					drawerPercentage={60}
					animationTime={250}
					overlay={true}
					opacity={0.4}
				>
					<TouchableOpacity onPress={() => setDrawer(true)} style={styles.body}>
						<Text>Open</Text>
					</TouchableOpacity>
				</MenuDrawer>
			</View>
		);
	}
}
 
const styles = StyleSheet.create({
	container: {
		flex: 1,
		backgroundColor: "#fff",
		alignItems: "center",
		justifyContent: "center",
		marginTop: 30,
		zIndex: 0
	},
	animatedBox: {
		flex: 1,
		backgroundColor: "#38C8EC",
		padding: 10
	},
	body: {
		flex: 1,
		alignItems: 'center',
		justifyContent: 'center',
		backgroundColor: '#F04812'
	}
})