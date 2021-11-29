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

    function irRec_senha() {
        navigation.navigate('Rec_senha')
    }

    return (
        <View style={styles.container}>

            <Text style={styles.titulos}>
                Bem vindo.
            </Text>

            <TextInput
                style={styles.input}
                placeholder="E-mail"
                keyboardType="email-address"
                onChangeText={onChangeText}
                value={text}
            />

            <TextInput
                style={styles.input}
                placeholder="Senha"
                keyboardType="password"
                onChangeText={onChangePassword}
                value={password}
                secureTextEntry={true}
            />

            <TouchableOpacity style={styles.button} onPress={irHomeAdm}>
                <Text style={styles.escbutton}>Entrar</Text>
            </TouchableOpacity>

            <TouchableOpacity style={styles.subtitulo} onPress={irRec_senha}>
                <Text style={styles.subtitulo}>Recuperar senha</Text>
            </TouchableOpacity>
        </View>
    );

}

