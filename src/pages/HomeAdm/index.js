import React, { useRef } from 'react';
import { StyleSheet, Text, View, TouchableOpacity } from 'react-native';
import Icon from 'react-native-vector-icons/Feather';
import { useNavigation } from '@react-navigation/core';

export default function HomeAdm() {

    const navigation = useNavigation();

    function irCad_user() {
        navigation.navigate('Cad_user')
    }

    function irCad_imob() {
        navigation.navigate('Cad_imob')
    }

    function irRelatorio() {
        navigation.navigate('Relatorio')
    }



    return (
        <View style={styles.container}>
            <View style={styles.header}>
                <Text style={styles.titulos}>Fulano</Text>
            </View >

            <View style={styles.body}>
                <TouchableOpacity style={styles.button} onPress={irCad_user}>
                    <Icon name="user" size={100} color="#1E90FF" />
                    <Text style={styles.subtitulos}>Cadastro de usuário</Text>
                </TouchableOpacity>


                <TouchableOpacity style={styles.button} onPress={irCad_imob}>
                    <Icon name="desktop" size={90} color="#1E90FF" />
                    <Text style={styles.subtitulos}>Cadastro de imobilizado</Text>
                </TouchableOpacity>


                <TouchableOpacity style={styles.button}>
                    <Icon name="search" size={100} color="#1E90FF" />
                    <Text style={styles.subtitulos}>Busca de imobilizado</Text>
                </TouchableOpacity>


                <TouchableOpacity style={styles.button} onPress={irRelatorio}>
                    <Icon name="bar-chart" size={100} color="#1E90FF" />
                    <Text style={styles.subtitulos}>Relatórios</Text>
                </TouchableOpacity>

            </View >
        </View >
    );

}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#fff',
        alignItems: 'center',
    },

    header: {
        width: '100%',
        height: 70,
        backgroundColor: '#1E90FF',
        justifyContent: 'center',
        marginBottom: 50,

    },

    titulos: {
        fontSize: 30,
        color: '#fff',
    },

    subtitulos: {
        color: '#1E90FF',
    },

    body: {
        marginLeft: 25,
        flexDirection: 'row',
        flexWrap: 'wrap',

    },

    button: {
        borderWidth: 2,
        width: 150,
        height: 150,
        borderColor: "#1E90FF",
        borderRadius: 10,
        margin: 10,
        alignItems: 'center',
        justifyContent: 'center',



    },


});
