import React, { useState } from 'react';
import {
    View,
    Text,
    StyleSheet,
    TouchableOpacity,
    Button
} from 'react-native';
import Modal from 'react-native-modal';
import { Ionicons } from '@expo/vector-icons';
import api from '../../../service/api';

export default function TaskList({dados}) {

    function dados() {
        api.get("/infos").then(response => {
            console.log(response.data);
        })
            .catch(e => {
                console.log(e);
            })
    };
    dados();
    
    const [visible, setVisible] = useState(false)
    
    return (
        <View style={styles.container}>

            <Modal isVisible={visible}>
                <View style={styles.modal}>
                    <Text style={styles.task}>Status: {dados.status}</Text>
                    <Text style={styles.task}>Localização: {dados.localization}</Text>
                    <Text style={styles.task}>Nivel: {dados.nivel}</Text>
                    
                    <Button  title='fechar'  onPress={() => {setVisible(false)}}  />
                </View>

            </Modal>


            <TouchableOpacity
            onPress={() => {setVisible(true)}}>
                <Ionicons name="md-checkmark-circle" size={30} color="#121212" />
            </TouchableOpacity>
            <View>
                <Text style={styles.task}> {dados.description}</Text>

            </View>

        </View>

    )
}

const styles = StyleSheet.create({

    container: {
        flex: 1,
        margin: 8,
        flexDirection: 'row',
        alignItems: 'center',
        backgroundColor: '#FFF',
        borderRadius: 5,
        padding: 10,
        elevation: 1.5,
        shadowColor: '#000',
        shadowOpacity: 0.2,
        shadowOffset: {
            width: 1,
            height: 3,
        }
    },

    task: {
        color: '#121212',
        fontSize: 17,
        paddingLeft: 8, // desgrudar do icon
        paddingRight: 20



    },

    modal: {
        backgroundColor: '#fff'
    }




});