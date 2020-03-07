import React, { useState } from 'react'
import { StyleSheet, Text, View, TouchableOpacity } from 'react-native'
import { DrawerLayout, PanGestureHandler } from 'react-native-gesture-handler'
 
export default function Profile() {

	function profileContent() {
		return (
			<View>
				<Text>I am in the drawer!</Text>
			</View>
		);
	};
 
	return (
		<View style={{flex: 1}}>
			<DrawerLayout
				drawerWidth={200}
				drawerPosition={DrawerLayout.positions.Left}
				drawerType='front'
				drawerBackgroundColor="#ddd"
				renderNavigationView={profileContent}
			>
				<View>
					<Text> Hello, it's me </Text>
				</View>
			</DrawerLayout>
    	</View>
	);
}