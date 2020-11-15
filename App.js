import { StatusBar } from 'expo-status-bar';
import React, { useState,useEffect  } from 'react';
import { Button, StyleSheet, Text, View, Alert } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';


//telas
import {Home, Login, Dados} from './Views';
import DadosDois from './Views/DadosDois';
import DadosTres from './Views/DadosTres';



const Stack = createStackNavigator();

export default function App() {

  return(
    <NavigationContainer>
    <Stack.Navigator>

    <Stack.Screen name="Home"
     component={Home}
     options={{
       title: "Bem-vindo!",
       headerStyle: {
         backgroundColor: "#006400"
       },
       headerTintColor:'#fff',
       headerTitleStyle: {
         fontWeight:'bold', alignSelf:'center'
       },

     }} />  

<Stack.Screen name="Login"  component={Login} />
    
    <Stack.Screen name="Dados"
     component={Dados} 
    options={{
      title: "Usuário Nível 1",
      headerStyle: {
        backgroundColor: "#fff"
      },
      headerTintColor:'#006400',
      headerTitleStyle: {
        fontWeight:'bold'
      },
    }}
   />

<Stack.Screen
 name="DadosDois"
component={DadosDois}
options={{
  title: "Usuário Nível 2",
  headerStyle: {
    backgroundColor: "#fff"
  },
  headerTintColor:'#006400',
  headerTitleStyle: {
    fontWeight:'bold'
  },
}} />

<Stack.Screen name="DadosTres"
  component={DadosTres}
  options={{
    title: "Usuário Nível 3",
    headerStyle: {
      backgroundColor: "#fff"
    },
    headerTintColor:'#006400',
    headerTitleStyle: {
      fontWeight:'bold'
    },
  }} />
     
     
    
      
    </Stack.Navigator>
  </NavigationContainer>
  );
}


