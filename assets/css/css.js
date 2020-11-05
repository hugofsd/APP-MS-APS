import { StyleSheet } from 'react-native';

const css = StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: '#fff',
      alignItems: 'center',
      justifyContent: 'center',
    },

    container2: {
      flex: 1,
      
      backgroundColor: '#fff',
      alignItems: 'center',
      justifyContent: 'center',
    },

    darkbg:{
      backgroundColor: "#006400"

    },

    login__msg:(text='none')=>({
      fontWeight:"bold",
      fontSize: 22,
      color:"red",
      marginTop:5,
      marginBottom:15,
      display: text
    }),

    login__form: {

      width: "80%"
    },

    login__input:{
      backgroundColor: "#fff",
      fontSize: 19,
      padding: 7,
      marginBottom:15

    },

    login__button: {
      padding:12,
      backgroundColor: "#FFD700",
      borderRadius: 5,
      alignSelf: "center",
     
    },

    login__buttonText:{
      fontWeight:"bold",
      fontSize: 22,
    },

    login__logomarca: {
      marginBottom: 25
    },

    button__login:{
      marginRight: 30,
    },

    title__home:{
      fontWeight:'bold'
    },

    container__dados:{
      flex:1, 
      backgroundColor: "#006400",
      

    },

   
  






  });

  export {css};
  