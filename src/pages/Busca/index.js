import React from 'react';
import { StyleSheet, Text, View, TextInput, TouchableOpacity } from 'react-native';
import { useNavigation } from '@react-navigation/core';
import styles from '../Estilos/styles.js';

export default function Busca() {

    const [text, onChangeText] = React.useState(null);
    const [email, onChangeEmail] = React.useState(null);
    const navigation = useNavigation();

    function irHomeAdm() {
        navigation.navigate('HomeAdm')
    }

    return (
        <View style={styles.container}>

            <Text style={styles.titulos}>
                Buscar imobilizado
            </Text>

            <TextInput
                style={styles.input}
                placeholder="Digite um imobilizado"
                keyboardType="text"
                onChangeText={onChangeText}
                value={text}
            />


            <TouchableOpacity style={styles.button} onPress={irHomeAdm}>
                <Text style={styles.escbutton}>Buscar</Text>
            </TouchableOpacity>


        </View>
    );

}
