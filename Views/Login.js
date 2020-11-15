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

    const [username, setUsername] = useState(null);
    const [password, setPassword] = useState(null);
    const [nivel, setNivel] = useState(null);
    const [login, setLogin] = useState(false);

    function logar() { 
        api.get("/users").then(response => {
           // console.log(response.data);
            let loginOk = false;
            response.data.forEach(user => {
                if (!loginOk) {
                    loginOk = user.username ===
                        username && user.password === password &&
                        user.nivel === nivel;
                }

            });
            if (loginOk) {
               if (nivel == 1) {
                   salvar();
                showUser();
                    console.log('senha valida');
                    props.navigation.navigate('Dados')
                    

                } 
                if (nivel == 2) {
                    salvar();
                    console.log('senha valida');
                    props.navigation.navigate('DadosDois')

                } 
                if (nivel == 3) {
                    salvar();
                    console.log('senha valida');
                    props.navigation.navigate('DadosTres')
                    login===true

                }
            }
            else {
                console.log('senha invalida')
            }
        })
            .catch(e => {
                console.log(e);
            })
    };

    async function salvar() {
        const usuario = {
            username, password, nivel
        }
        await AsyncStorage.setItem("usuario", JSON.stringify(usuario))
    }
    

    async function showUser() {
        const json = await AsyncStorage.getItem("usuario");
        const usuario = JSON.parse(json)

        console.log(usuario) 

    }   
    async function bio(){
        const json = await AsyncStorage.getItem("usuario");
        const usuario = JSON.parse(json)
        console.log(usuario)

        api.get("/users").then(response => {
             let loginOk = false;
             // let nivel;
             response.data.forEach(user => {
                 if (!loginOk) {
                     loginOk = user.username ===
                     usuario.username && user.password === usuario.password &&
                         user.nivel === usuario.nivel;
                 }
 
             });
             if (loginOk) {
                 
                if (nivel == 1) {
                 salvar();
                     console.log('senha valida');
                     props.navigation.navigate('Dados')
 
                 } 
                 if (nivel == 2) {
                     salvar();
                     console.log('senha valida');
                     props.navigation.navigate('DadosDois')
 
                 } 
                 if (nivel == 3) {
                     salvar();
                     console.log('senha valida');
                     props.navigation.navigate('DadosTres')
 
                 }
             }
             else {
                 console.log('senha invalida')
             }
         })
             .catch(e => {
                 console.log(e);
             })

    }

    useEffect(() => {
        vefifyLogin();
    }, []);

    useEffect(() => {
        if (login === true) {
            biometria()
        }
    }, [login]);

    // // //verificar se o usuario já tem login
    async function vefifyLogin() {
        let response = await AsyncStorage.getItem('usuario');
        let json = await JSON.parse(response);
        console.log(json);
        if (json != null)
            setUsername(username);
        setPassword(password);
        setLogin(true);
    }

    // biometria, verificar compatibilidade, se existe biometria cadastrada
    // e fazer autencicação 
    // bimetricrecors verifica se já existe biometria guardada
    async function biometria() {
        console.log('chamei a biometria');
        let compatible = await LocalAuthentication.hasHardwareAsync(); // se o cell tem digital
        if (compatible) {
            let bimetricreRecors = await LocalAuthentication.isEnrolledAsync(); // se existe digital cadastrada
            if (!bimetricreRecors) {
                alert('Biometria não cadastrada no celular');
            } else {
                let result = await LocalAuthentication.authenticateAsync(); // se a digital incluida é igaul a cadastrada no cel
                if (result.success) {
                    logar(); //login
                } else {
                    setUsername(null); 
                    setPassword(null); 
                }
            }
        }

    }


    return (
        <KeyboardAvoidingView style={[css.container, css.darkbg]}>
            <View style={css.login__logomarca}>
                <Image source={require('../assets/img/logo.jpg')} />

            </View>
            <View style={css.login__form}>
                <TextInput
                    value={username}
                    style={css.login__input} placeholder='Usuário'
                    onChangeText={text => setUsername(text)}
                />
                <TextInput
                    value={password}
                    style={css.login__input} placeholder='Senha'
                    onChangeText={text => setPassword(text)} secureTextEntry={true} />

                <TextInput
                    value={nivel}
                    style={css.login__input} placeholder='Senha'
                    onChangeText={text => setNivel(text)} secureTextEntry={true} />

                <TouchableOpacity style={css.login__button}
                    onPress={() => (biometria())}>
                    <Text style={css.login__buttonText}>Entrar</Text>
                </TouchableOpacity>

            </View>
        </KeyboardAvoidingView>


    );

      

}