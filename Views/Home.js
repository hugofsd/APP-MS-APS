import React from 'react';
import {
    Button,
    StyleSheet,
    Text,
    View,
    Alert,
    TouchableOpacity,
    Image
} from 'react-native';
import { css } from '../assets/css/css';


export default function Home(props) {

    console.log(props);
    return (

        <View style={css.container2}>

            <Text style={css.title__home}>Dados Autorizados: </Text>
            <TouchableOpacity
            onPress={() => props.navigation.navigate('Login', { id: 86 })}   >
                <Image  
                    source={require('../assets/img/buttonPasta.png')}
                />
            </TouchableOpacity>

        </View>
    );

}