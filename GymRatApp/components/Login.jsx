import React, { useState, useEffect, useContext } from 'react'
import { StyleSheet, Text, View, TextInput, Image } from 'react-native'
import userContext from '../contexts/userContext'
import { Button } from 'react-native-elements';
import axios from 'axios'
// import Icon from 'react-native-vector-icons/FontAwesome'
// import { Input } from 'react-native-elements'

function Login(props) {

    const [userTextInput, setuserTextInput] = useState('')
    const [ data, setData ] = useState(null)
    const { user, setUser} = useContext(userContext);
    const [ query, setquery] = useState('')

    function newUser(query){
        axios.post('https://gymratdev-yswlpk5fsa-uc.a.run.app/api/profile/' + query)
            .then(result => setUser({ name: query, bio: "Certified Gym Rat©", points: 0 }))
            .catch(err => console.log('Error:', err))
    }

    useEffect(() => {
        axios.get('https://gymratdev-yswlpk5fsa-uc.a.run.app/api/profile/' + query)
            .then(result => console.log(result.data))
            .then(result => result ? setUser({ name: query, ...result }) : newUser(query))
            .catch(err => console.log('Error: ', err))
    }, [query]);


    return (
        <View style={styles.container}>
            <Image
                style={{ alignSelf: 'center', width: 150, height: 150, marginTop: 200}}
                source={require('../assets/gymrat-logo-transparent.png')}
            />
            <TextInput
                style={styles.TextInput}
                placeholder="Enter your name..."
                onChangeText={text => setuserTextInput(text)}
                value={userTextInput}
            />
            <Button
                style={{ paddingTop: 25, width: 300, alignSelf: 'center'}}
                title='Submit'
                borderRadius={50}
                backgroundColor='#951BAD'
                color='#951BAD'
                onPress={() => setquery(userTextInput)}
            /> 
        </View>
    )
}

const styles = StyleSheet.create({
    TextInput: {
        alignSelf: 'center',
        marginTop: 25,
        fontSize: 30,
        backgroundColor: '#d1d1d1',
        paddingLeft: 40,
        width: 300,
        height: 65,
        borderRadius: 50,
    }
});

export default Login