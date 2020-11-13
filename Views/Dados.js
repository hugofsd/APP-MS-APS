import React from 'react';
import {
    Text,
    View,
    SafeAreaView,
    TouchableOpacity,
    FlatList
} from 'react-native';
import { css } from '../assets/css/css';
import { useState } from 'react';
import TaskList from '../src/components/TaskList/Lista';
import api from '../service/api';


export default function Dados() {

    function dados() {
        api.get("/infos").then(response => {
            console.log(response.data);
        })
            .catch(e => {
                console.log(e);
            })
    };
    dados();

    

    const [ task, setTask] = useState([

        {key:1, title:"Mapa Geográfico", local:'SP', discu:'A', status:'ok', lvl:'1'  },

        {key:2, title:"Levantamento anual", local:'RJ', discu:'B', status:'ok', lvl:'1'},

        {key:3, title:"Propriedades monitoradas", local:'RJ', discu:'C', status:'Atenção', lvl:'2' },

        {key:4, title:"Agrotóxicos encontrados", local:'MG', discu:'D', status:'Atenção', lvl:'2'  },

        {key:5, title:"Busca e apreensão", local:'MG', discu:'E', status:'Importante', lvl:'3'},

        {key:6, title:"Dados de proprietários",  local:'SP', discu:'G', status:'Importante', lvl:'3'},

        {key:7, title:"Planejamento de monitoramento", local:'SP', discu:'H', status:'Importante', lvl:'3' },


    ]);

    return(
        <SafeAreaView style={css.container__dados}>

           {/* aqui vai a lista  */}

           <FlatList
           marginHorizontal={10}
           showsHorizontalScrollIndicator={true}
           data={task}
           keyExtractor={(item) => String(item.key) }
           renderItem={ ({ item }) => <TaskList data={item}/> }

           />

        </SafeAreaView>
    ) 

}