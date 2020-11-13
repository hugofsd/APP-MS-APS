import { Assets } from '@react-navigation/stack';
import React, { useState, useEffect } from 'react';
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
import AsyncStorage from '@react-native-async-storage/async-storage';
import * as LocalAuthentication from 'expo-local-authentication';
import api from '../service/api'

export default function Login(props) {

    const [display, setDisplay] = useState('none');
    const [username, setUsername] = useState(null);
    const [password, setPassword] = useState(null);
    const [login, setLogin] = useState(false);


    function logar() {
        api.get("/users").then(response => {
            console.log(response.data);
            let loginOk = false;
           // let nivel;
            response.data.forEach(user => {
                if (!loginOk) {
                    loginOk = user.username === username && user.password === password;
                   // nivel = user.nivel;
                }

            });
            if (loginOk) {
                console.log('senha valida');
                props.navigation.navigate('Dados');
            } else {
                console.log('senha invalida')
            }
        })
            .catch(e => {
                console.log(e);
            })
    };


    {
        // useEffect(() => {
        //     vefifyLogin();
        // }, []);

        //  useEffect(() => {
        //   if (login === true) {
        //          biometria()
        //      }
        //  }, [login]);

        // // // //verificar se o usuario já tem login
        // async function vefifyLogin() {
        //     let response = await AsyncStorage.getItem('username');
        //     let json = await JSON.parse(response);
        //     console.log(json);
        //      if (json != null)
        //      setUsername(username);
        //      setPassword(password);
        //      setLogin(true);
        // }

        // // biometria, verificar compatibilidade, se existe biometria cadastrada
        // // e fazer autencicação 
        // // bimetricrecors verifica se já existe biometria guardada
        //  async function biometria() {
        //      console.log('chamei a biometria');
        // //     let compatible = await LocalAuthentication.hasHardwareAsync(); // se o cell tem digital
        // //     if (compatible) {
        // //         let bimetricrecors = await LocalAuthentication.isEnrolledAsync(); // se existe digital cadastrada
        // //         if (!bimetricrecors) {
        // //             alert('Biometria não cadastrada no celular');
        // //         } else {
        // //             let result = await LocalAuthentication.AuthenticationType(); // se a digital incluida é igaul a cadastrada no cel
        // //             if (result.success) {
        // //                 logar(); //login
        // //             } else {
        // //                 setUsername(null);
        // //                 setPassword(null);
        // //             }
        // //         }
        //     }

        // // }
    }






    return (
        <KeyboardAvoidingView style={[css.container, css.darkbg]}>
            <View style={css.login__logomarca}>
                <Image source={require('../assets/img/logo.jpg')} />

            </View>
            <Text> {username} {password}</Text>

            {/* <View >
                <Text  style={css.login__msg (display)}>Usuário ou senha inválidos!</Text>
            </View> */}

            <View style={css.login__form}>
                <TextInput style={css.login__input} placeholder='Usuário' onChangeText={text => setUsername(text)} />
                <TextInput style={css.login__input} placeholder='Senha' onChangeText={text => setPassword(text)} secureTextEntry={true} />

                <TouchableOpacity style={css.login__button}
                 onPress={() => (logar())}>
                    <Text style={css.login__buttonText}>Entrar</Text>
                </TouchableOpacity>


            </View>
        </KeyboardAvoidingView>


    );

}