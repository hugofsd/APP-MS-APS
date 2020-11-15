import { StatusBar } from 'expo-status-bar';
import React, { useState,useEffect  } from 'react';
import { Button, StyleSheet, Text, View, Alert } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';


//telas
import {Home, Login, Dados} from './Views'



const Stack = createStackNavigator();

export default function App() {

  return(
    <NavigationContainer>
    <Stack.Navigator>

    <Stack.Screen name="Login"  component={Login} />

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
    
    <Stack.Screen name="Dados"
     component={Dados} 
    options={{
      title: "Dados Autorizados",
      headerStyle: {
        backgroundColor: "#fff"
      },
      headerTintColor:'#006400',
      headerTitleStyle: {
        fontWeight:'bold'
      },
    }}
   />
     
     
    
      
    </Stack.Navigator>
  </NavigationContainer>
  );
}


