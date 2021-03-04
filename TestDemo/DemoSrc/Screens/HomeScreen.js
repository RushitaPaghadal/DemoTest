import React, { Component } from 'react';
import {
    View,
    StyleSheet,
    Text
} from 'react-native';
import { useSelector } from 'react-redux';

const HomeScreen: () => React$Node = (props) => {

    
    return (
        <View style={{ flex: 1, justifyContent: 'center' }}>
            <Text style={styles.button}
                onPress={() => props.navigation.navigate('LoginScreen')}>Sign In</Text>

        </View>
    )
}






const styles = StyleSheet.create({

    button: {

        margin: 20,
        padding: 15,
        backgroundColor: 'rgb(236,89,72)',
        borderRadius: 5,
        textAlign: 'center',
        fontSize: 20,
        color: 'white',

        // fontWeight : 'bold'
    }
});

export default HomeScreen;