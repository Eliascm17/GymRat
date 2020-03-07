import React, { useState } from 'react'
import { StyleSheet, Text, View, TouchableOpacity } from 'react-native'
import MenuDrawer from 'react-native-side-drawer'
import { PanGestureHandler } from 'react-native-gesture-handler'
import Swipeable from 'react-native-gesture-handler/Swipeable'
 
export default function Profile() {
	
	const [drawer, setDrawer] = useState(false)

	function drawerContent() {
		return (
			<TouchableOpacity onPress={() => setDrawer(false)} style={styles.animatedBox}>
				<Text>Close</Text>
			</TouchableOpacity>
		);
	};
 
	return (
		<View style={styles.container}>
			<MenuDrawer 
				open={drawer}
				drawerContent={() => drawerContent()}
				drawerPercentage={60}
				animationTime={250}
				overlay={true}
				opacity={0.4}
			>
				<PanGestureHandler onGestureEvent={() => setDrawer(!drawer)} activeOffsetX={20}>
					<Text>Swipe</Text>
				</PanGestureHandler>
			</MenuDrawer>
		</View>
	);
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