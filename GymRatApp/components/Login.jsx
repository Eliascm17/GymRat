import React, { useState, useEffect } from 'react'
import { StyleSheet, Text, View, TextInput } from 'react-native'
// import Icon from 'react-native-vector-icons/FontAwesome'
// import { Input } from 'react-native-elements'


function Login() {

    const [UserTextInput, setUserTextInput] = useState('Enter your name...')
    const [LoginUser, setloginUser] = useState(null)

    changeText = (user) => {
        setUserTextInput(user)
        //set context for user HERE
    }


    return (
        <view>
            <Text>This is the login page lol</Text>
            <TextInput
                onChangeText={text => changeText(text)}
                value={UserTextInput}
            />
        </view>
    )
}

const styles = StyleSheet.create({
    TextInput: {

    }
});

export default Login