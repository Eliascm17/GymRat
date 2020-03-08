import React, { useState, useEffect, useContext } from 'react'
import { StyleSheet, Text, View, TextInput, Image } from 'react-native'
import userContext from '../contexts/userContext'
import { Button } from 'react-native-elements';
import axios from 'axios'

function Login(props) {

    const [userTextInput, setuserTextInput] = useState('')
    const [ data, setData ] = useState(null)
    const { user, setUser} = useContext(userContext);

    function newUser(query){
        axios.post('https://gymratstable-yswlpk5fsa-uc.a.run.app/api/profile/' + query)
            .then(result => setUser({ name: query, bio: "Certified Gym Rat©", points: 0 }))
            .catch(err => console.log('Error:', err))
    }

    function submit(query) {
        axios.get('https://gymratstable-yswlpk5fsa-uc.a.run.app/api/profile/' + query)
            .then(result => console.log(result.data))
            .then(result => result ? setUser({ name: query, ...result }) : newUser(query))
            .catch(err => console.log('Error: ', err))
    }

    return (
        <View style={styles.container}>
            <Image
                style={{ alignSelf: 'center', width: 150, height: 150, marginTop: 125}}
                source={require('../assets/gymrat-logo-transparent.png')}
            />
            <TextInput
                style={styles.TextInput}
                placeholder="Enter your name..."
                onChangeText={text => setuserTextInput(text)}
                value={userTextInput}
            />
            <Button
                buttonStyle={{ marginTop: 25, width: 300, alignSelf: 'center', borderRadius: 50, backgroundColor: "#951BAD", height: 65}}
                titleStyle={{ fontSize: 24 }}
                title='Submit'
                backgroundColor='#951BAD'
                color='#951BAD'
                onPress={() => submit(userTextInput)}
            /> 
        </View>
    )
}

const styles = StyleSheet.create({
    TextInput: {
        alignSelf: 'center',
        marginTop: 50,
        fontSize: 30,
        backgroundColor: '#d1d1d1',
        width: 300,
        height: 65,
        borderRadius: 50,
        textAlign: 'center'
    }
});

export default Login