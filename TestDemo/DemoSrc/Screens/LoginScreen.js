import React, { useEffect, useRef } from 'react';
import {
    View,
    StyleSheet,
    Text,
    TextInput
} from 'react-native';
import { useSelector, useDispatch } from 'react-redux';
import { Signin } from '../Actions/LoginAction';



const LoginScreen: () => React$Node = (props) => {

    const SignInFun = (props) => {
        if (ID !== '' && Password !== '') {
            dispatch(Signin(ID, Password));

        } else {
            alert("Enter the Sign In Details");
        }
    }

    const IdRef = useRef(null);
    const PassRef = useRef(null);
    const [ID, setID] = React.useState('');
    const [Password, setPassword] = React.useState('');

    const dispatch = useDispatch()
    const login = useSelector(state => state);

    console.log("LLLL", login);

    if(login.login.signup){
        props.navigation.navigate("Logout")
    }


    return (
        <>
            <TextInput
                ref={IdRef}
                style={[{ marginTop: 100 }, styles.textinmput]}
                placeholder="ID"
                onChangeText={(ID) => setID(ID)}
                value={ID}
                autoCapitalize="none"
                clearTextOnFocus={true}
                keyboardType="email-address"
                returnKeyType="next"
                onSubmitEditing={() => PassRef.current.focus()}
            />

            <TextInput
                ref={PassRef}
                style={styles.textinmput}
                placeholder="PASSWORD"
                onChangeText={(Password) => setPassword(Password)}
                value={Password}
                secureTextEntry={true}
                keyboardType="default"
                returnKeyType='done'

            />

            <Text style={styles.button} onPress={() => SignInFun(props)}>Sign In</Text>
        </>
    )
}




const styles = StyleSheet.create({
    textinmput: {
        margin: 10,
        padding: 5,
        backgroundColor: 'rgb(243,243,243)',
        borderRadius: 5
    },
    button: {
        margin: 10,
        padding: 15,
        backgroundColor: 'rgb(236,89,72)',
        borderRadius: 5,
        textAlign: 'center',
        fontSize: 20,
        color: 'white',
        // fontWeight : 'bold'
    }
})


export default LoginScreen;