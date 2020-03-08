import React, { useState, useEffect, useContext } from 'react'
import { StyleSheet, Text, View, TouchableOpacity } from 'react-native'
import { DrawerLayout, PanGestureHandler } from 'react-native-gesture-handler' 
import { Avatar, Image, Icon } from 'react-native-elements'

import UserContext from '../contexts/userContext'

export default function Profile(props) {

	const { user } = useContext(UserContext)

	function profileContent() {

		return (
			<View style={{ flex: 1, padding: 30, alignItems: 'center', flexDirection: 'column' }}>
				<Avatar
					rounded
					source={{
						uri: "https://raw.githubusercontent.com/Eliascm17/GymRat/master/GymRatApp/assets/profile-pictures/" + (user.name || 'null') + ".jpg"
					}}
					size="xlarge"
				/>
				<Text style={{ paddingTop: 20, fontFamily: 'System', fontSize: 28 }}>
					{user.name || "Not logged in..."}
				</Text>
				<Text style={{ paddingTop: 20, flexGrow: 1, fontFamily: 'System', fontSize: 20 }}>
					{user.bio || "Certified Gym Rat"}
				</Text>
				<View style={{ paddingVertical: 20, flexDirection: "row", justifyContent: "space-between", alignItems: "center" }}>
					<Text style={{ fontFamily: 'System', fontSize: 28, color: '#951BAD' }}>
						{user.points.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",")}
					</Text>
					<Icon name='bolt' type='font-awesome' color='#951BAD' iconStyle={{ paddingLeft: 3 }} />
				</View>
			</View>
		);
	};
 
	return (
		<DrawerLayout
			drawerWidth={300}
			edgeWidth={300}
			drawerPosition={DrawerLayout.positions.Left}
			drawerType='front'
			drawerBackgroundColor="#fafafa"
			renderNavigationView={profileContent}
		>
			{props.children}
		</DrawerLayout>
	);
}