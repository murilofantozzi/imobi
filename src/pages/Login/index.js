import React from 'react';
import { StyleSheet, Text, View, TextInput, TouchableOpacity } from 'react-native';
import { useNavigation } from '@react-navigation/core';


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
                <Text>Entrar</Text>
            </TouchableOpacity>

            <Text style={styles.subtitulo}>
                Esqueceu a senha?
            </Text>
        </View>
    );

}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#fff',
        alignItems: 'center',
        justifyContent: 'center',
    },
    titulos: {
        fontSize: 30,
        color: '#1E90FF',
        marginBottom: 50,
    },

    subtitulo: {
        fontSize: 20,
        color: '#1E90FF',
        marginBottom: 50,
    },

    input: {
        width: 250,
        height: 40,
        margin: 12,
        borderWidth: 1,
        padding: 10,
        borderColor: '#1E90FF',
        borderRadius: 10,
        marginBottom: 20,
    },

    button: {
        alignItems: "center",
        backgroundColor: "#1E90FF",
        padding: 10,
        borderRadius: 10,
        width: 250,
        marginTop: 10,
        marginBottom: 20,

    },
});