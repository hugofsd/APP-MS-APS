import React from 'react';
import {
    SafeAreaView,
    FlatList
} from 'react-native';
import { css } from '../assets/css/css';
import { useState } from 'react';
import TaskList from '../src/components/TaskList/Lista';


export default function Dados() {


const [task, setTesk] = useState([

    {key: 1, status: "Leve", localization: "Maracaju-Mato Grosso do Sul", description: "Uso de Aclonifem suspeito.", nivel: "1"},
    {key: 2, status: "Leve", localization: "Dianópolis-Tocantis", description: "Uso exagerado de Carbaril.", nivel: "1"},
    {key: 3, status: "Leve", localization: "Alagoinhas-Bahia", description: "Uso de forma inapropridade de IPBC", nivel: "1"},

]);
    
        
        return (
            <SafeAreaView style={css.container__dados}>
                <FlatList
                        marginHorizontal={10}
                        showsHorizontalScrollIndicator={true}
                        data={task}
                        keyExtractor={(item) => String(item.key)}
                        renderItem={({ item }) => <TaskList data={item} />}
                />
            </SafeAreaView>
        );


}