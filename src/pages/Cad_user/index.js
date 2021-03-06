import React from 'react';
import { StyleSheet, Text, View, TextInput, TouchableOpacity } from 'react-native';
import { useNavigation } from '@react-navigation/core';
import styles from '../Estilos/styles.js';

export default function Cad_user() {

    const [text, onChangeText] = React.useState(null);
    const [email, onChangeEmail] = React.useState(null);
    const navigation = useNavigation();

    function irHomeAdm() {
        navigation.navigate('HomeAdm')
    }

    return (
        <View style={styles.container}>

            <Text style={styles.titulos}>
                Cadastro de usuário.
            </Text>

            <TextInput
                style={styles.input}
                placeholder="Nome completo"
                keyboardType="text"
                onChangeText={onChangeText}
                value={text}
            />

            <TextInput
                style={styles.input}
                placeholder="E-mail"
                keyboardType="email-address"
                onChangeText={onChangeEmail}
                value={email}
            />

            <TextInput
                style={styles.input}
                placeholder="Cargo"
                keyboardType="email-address"
                onChangeText={onChangeEmail}
                value={email}
            />

            <TouchableOpacity style={styles.button} onPress={irHomeAdm}>
                <Text style={styles.escbutton}>Cadastrar</Text>
            </TouchableOpacity>


        </View>
    );

}