import React from 'react';
import {
    SafeAreaView,
    FlatList
} from 'react-native';
import { css } from '../assets/css/css';
import { useState } from 'react';
import TaskListTwo from '../src/components/TaskListTwo/ListaTwo';



export default function DadosDois() {



const [task, setTesk] = useState([

    {key: 1, status: "Moderado", localization: "Ouro Preto-Minas Gerais", description: "Uso do Vigga que está infiltrando no lençol freático.", nivel: "2"},
    {key: 2, status: "Leve", localization: "Maracaju-Mato Grosso do Sul", description: "Uso de Aclonifem suspeito.", nivel: "1"},
    {key: 3, status: "Leve", localization: "Dianópolis-Tocantis", description: "Uso exagerado de Carbaril.", nivel: "1"},
    {key: 4, status: "Moderado", localization: "Feijó-Acre", description: "Uso de Fipronil atingindo Rio Juruá.", nivel: "2"},
    {key: 5, status: "Moderado", localization: "Suzano-São Paulo", description: "Uso de Clorpirifós afetando Rio Guaió.", nivel: "2"},
    {key: 6, status: "Leve", localization: "Alagoinhas-Bahia", description: "Uso de forma inapropridade de IPBC", nivel: "1"},


]);
    
        
        return (
            <SafeAreaView style={css.container__dados}>
                <FlatList
                        marginHorizontal={10}
                        showsHorizontalScrollIndicator={true}
                        data={task}
                        keyExtractor={(item) => String(item.key)}
                        renderItem={({ item }) => <TaskListTwo data={item} />}
                />
            </SafeAreaView>
        );


}