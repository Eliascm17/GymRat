import React, { useState, useEffect, useContext } from 'react'
import { StyleSheet, Text, View, TouchableOpacity } from 'react-native'
import { DrawerLayout, PanGestureHandler } from 'react-native-gesture-handler' 

import UserContext from '../contexts/userContext'

export default function Profile() {

	function profileContent() {

		return (
			<View style={{flex: 1, padding: 20 }}>
				<Avatar
					rounded
					source={{
						uri: "https://raw.githubusercontent.com/Eliascm17/GymRat/master/GymRatApp/assets/icon.png"
					}}
				/>
			</View>
		);
	};
 
	return (
		<View style={{flex: 1}}>
			<DrawerLayout
				drawerWidth={300}
				edgeWidth={300}
				drawerPosition={DrawerLayout.positions.Left}
				drawerType='front'
				drawerBackgroundColor="#fafafa"
				renderNavigationView={profileContent}
			>
				<View>
					<Text> Hello, it's me </Text>
				</View>
			</DrawerLayout>
    	</View>
	);
}