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
import Teste from './Teste'
import { Component } from 'react';


export default function Dados() {

    {// constructor(props) {
    //     super(props);
    //     this.state = {
    //         infos: []
    //     };
    //     this.dados = this.dados.bind(this);
    // }
    // dados = () => {
    //     api.get("/infos").then(response => {
    //         this.setState({ infos: response.data })
    //         // console.log(response.data);
    //         // console.log(infos);
    //     })
    //         .catch(e => {
    //             console.log(e);
    //         })
    // };
    // dados();
}

const [task, setTesk] = useState([

    {key: 1, status: "Grave", localization: "Corupá-Santa Catarina", description: "Uso de Thiram agredindo Rio Itajaí-açu.", nivel: "3"},
    {key: 2, status: "Moderado", localization: "Ouro Preto-Minas Gerais", description: "Uso do Vigga que está infiltrando no lençol freático.", nivel: "2"},
    {key: 3, status: "Leve", localization: "Maracaju-Mato Grosso do Sul", description: "Uso de Aclonifem suspeito.", nivel: "1"},
    {key: 4, status: "Leve", localization: "Dianópolis-Tocantis", description: "Uso exagerado de Carbaril.", nivel: "1"},
    {key: 5, status: "Moderado", localization: "Feijó-Acre", description: "Uso de Fipronil atingindo Rio Juruá.", nivel: "2"},
    {key: 6, status: "Grave", localization: "Anápolis-Goiás", description: "Uso de Tricolfon.", nivel: "3"},
    {key: 7, status: "Grave", localization: "Trindade-Goiás", description: "Uso de Carbofuran.", nivel: "3"},
    {key: 8, status: "Moderado", localization: "Suzano-São Paulo", description: "Uso de Clorpirifós afetando Rio Guaió.", nivel: "2"},
    {key: 9, status: "Leve", localization: "Alagoinhas-Bahia", description: "Uso de forma inapropridade de IPBC", nivel: "1"},
    {key: 10, status: "Grave", localization: "Carlos Barbosa-Rio Grande do Sul", description: "Uso de Fosmete afetando lençol freático.", nivel: "3"},

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