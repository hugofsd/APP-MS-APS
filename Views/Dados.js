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

export default function Dados() {

    const [ task, setTask] = useState([

        {key:1, task:"Mapa Geográfico (LV1)"},

        {key:2, task:"Levantamento anual (LV1)"},

        {key:3, task:"Propriedades monitoradas (LV2)"},

        {key:4, task:"Agrotóxicos encontrados (LV2)"},

        {key:5, task:"Busca e apreensão(LV3)"},

        {key:6, task:"Dados de proprietários (LV3)"},

        {key:7, task:"Planejamento de monitoramento (LV3)"},


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