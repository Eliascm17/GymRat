import React, { useState, useEffect, useContext } from 'react'
import { StyleSheet, Text, View, TextInput } from 'react-native'
import userContext from '../contexts/userContext'
import { Button } from 'react-native-elements';
import axios from 'axios'
// import Icon from 'react-native-vector-icons/FontAwesome'
// import { Input } from 'react-native-elements'

function Login() {

    const [userTextInput, setuserTextInput] = useState('')
    const [ data, setData ] = useState(null)
    const { user, setUser} = useContext(userContext);
    const [ query, setquery] = useState('')

    // function newUser(query){

    //     axios.get('https://gymratdev-yswlpk5fsa-uc.a.run.app/api/profile?name=' + query)
    //         .then()

    // }

    useEffect(() => {
        axios.get('https://gymratdev-yswlpk5fsa-uc.a.run.app/api/profile/' + query)
            .then(result => console.log(result.data))
            .then(result => result ? setUser({name: query, ...result}) : newUser(query))
            .catch(() => {console.log('Query: ' + query)})
    }, [query]);


    return (
        <View style={styles.container}>
            <Text>This is the login page lol</Text>
            <TextInput
                placeholder="Enter your name..."
                onChangeText={text => setuserTextInput(text)}
                value={userTextInput}
            />
            <Button
                title='Submit'
                type='solid'
                onPress={() => setquery(userTextInput)}
                size={15}
            />
        </View>
    )
}

const styles = StyleSheet.create({
    container: {

    },
    TextInput: {

    },
    Text: {

    }
});

export default Login