import React, {useState, useEffect} from 'react';
import {
    Button,
    StyleSheet,
    Text,
    View,
    Alert,
    KeyboardAvoidingView,
    Image,
    TextInput,
    TouchableOpacity
} from 'react-native';
import { css } from '../assets/css/css';

export default function Login() {

    const [display, setDisplay]=useState('none');

    return (
        <KeyboardAvoidingView style={[css.container, css.darkbg ]}>
            <View style = {css.login__logomarca}> 
                <Image source={require('../assets/img/logo.jpg')}/>

            </View>

            <View >
                <Text  style={css.login__msg (display)}>Usuário ou senha inválidos!</Text>
            </View>

            <View  style={css.login__form}>
                <TextInput  style={css.login__input} placeholder='Usuário'/>
                <TextInput  style={css.login__input} placeholder='Senha' secureTextEntry={true}/>

                <TouchableOpacity  style={css.login__button} onPress={()=>setDisplay('flex')}>
                    <Text  style={css.login__buttonText}>Entrar</Text>
                </TouchableOpacity>

            </View>
        </KeyboardAvoidingView>


    );

}