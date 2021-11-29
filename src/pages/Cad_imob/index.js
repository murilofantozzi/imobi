import React from 'react';
import { StyleSheet, Text, View, TextInput, TouchableOpacity, KeyboardAvoidingView, ScrollView } from 'react-native';
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

        <KeyboardAvoidingView
            behavior={Platform.OS === "ios" ? "padding" : "height"}
            style={styles.container}
            keyboardVerticalOffset={20}
        /*Rolar a tela conforme o formulario*/
        >
            <ScrollView style={{ width: "100%" }}>
                <View style={styles.container}>

                    <Text style={styles.titulos}>
                        Cadastro de imobilizado.
                    </Text>

                    <TextInput
                        style={styles.input}
                        placeholder="Descrição"
                        keyboardType="text"
                        onChangeText={onChangeText}
                        value={text}
                    />

                    <TextInput
                        style={styles.input}
                        placeholder="Numero imobilizado"
                        keyboardType="text"
                        onChangeText={onChangeText}
                        value={text}
                    />

                    <TextInput
                        style={styles.input}
                        placeholder="Valor estimado"
                        keyboardType="text"
                        onChangeText={onChangeText}
                        value={text}
                    />

                    <TextInput
                        style={styles.input}
                        placeholder="Status"
                        keyboardType="text"
                        onChangeText={onChangeText}
                        value={text}
                    />

                    <TextInput
                        style={styles.input}
                        placeholder="Atribuido à"
                        keyboardType="text"
                        onChangeText={onChangeText}
                        value={text}
                    />

                    <TextInput
                        style={styles.input}
                        placeholder="Teste"
                        keyboardType="text"
                        onChangeText={onChangeText}
                        value={text}
                    />


                    <TouchableOpacity style={styles.button} onPress={irHomeAdm}>
                        <Text style={styles.escbutton}>Cadastrar</Text>
                    </TouchableOpacity>


                </View>
            </ScrollView>
        </KeyboardAvoidingView>
    );

}
