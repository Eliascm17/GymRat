import React, { useState, useEffect, useContext } from 'react'
import { StyleSheet, Text, View, TouchableOpacity } from 'react-native'
import { DrawerLayout, PanGestureHandler } from 'react-native-gesture-handler' 
import { Avatar, Image } from 'react-native-elements'

import UserContext from '../contexts/userContext'

export default function Profile() {

	const { user } = useContext(UserContext)

	function profileContent() {

		return (
			<View style={{ flex: 1, padding: 30, alignItems: 'center', flexDirection: 'column' }}>
				<Avatar
					rounded
					source={{
						uri: "https://raw.githubusercontent.com/Eliascm17/GymRat/master/GymRatApp/assets/icon.png"
					}}
					size="xlarge"
				/>
				<Text style={{ paddingTop: 20, fontFamily: 'System' }}>
					{user.name || "Not logged in..."}
				</Text>
				<Text style={{ paddingTop: 20, flexGrow: 1, fontFamily: 'System' }}>
					{user.bio || "Enter a bio here..."}
				</Text>
				<Text style={{ paddingTop: 20, fontFamily: 'System' }}>
					{user.points || 0}
				</Text>
			</View>
		);
	};
 
	return (
		<View style={{ flex: 1 }}>
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