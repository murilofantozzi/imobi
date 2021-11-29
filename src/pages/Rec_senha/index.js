import React from 'react';
import { StyleSheet, Text, View, TextInput, TouchableOpacity } from 'react-native';
import { useNavigation } from '@react-navigation/core';
import styles from '../Estilos/styles.js';


export default function Login() {

    const [text, onChangeText] = React.useState(null);
    const [password, onChangePassword] = React.useState(null);
    const navigation = useNavigation();

    function irHomeAdm() {
        navigation.navigate('HomeAdm')
    }

    return (
        <View style={styles.container}>

            <Text style={styles.titulos}>
                Recuperar senha
            </Text>

            <TextInput
                style={styles.input}
                placeholder="E-mail"
                keyboardType="email-address"
                onChangeText={onChangeText}
                value={text}
            />

            <TouchableOpacity style={styles.button} onPress={irHomeAdm}>
                <Text style={styles.escbutton}>Enviar senha</Text>
            </TouchableOpacity>


        </View>
    );

}