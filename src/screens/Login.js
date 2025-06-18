//Tirei o alert viu
import { View, Text, TextInput, StyleSheet, TouchableOpacity, ImageBackground } from "react-native";
import React, { useState } from "react";
import bemEstarImg from '../../assets/bem_estar.png';

function LoginScreen({ navigation }) {
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');
    const [erro, setErro] = useState('');

    const idfLogin = () => {
        if (username === 'admin' && password === '123') {
            //o erro é limpo caso o login seja bem-sucedido e 
            //direciona para a tela Desktop
            setErro('');
            navigation.replace('Desktop');
        } else {
            setErro('Login ou senha incorretos');
        }
    };

    return (
        <ImageBackground source={bemEstarImg} style={styles.background} resizeMode="cover">
            <View style={styles.container}>
                <Text style={styles.titulo}>Login</Text>
                <TextInput
                    style={styles.box}
                    placeholder="Usuário"
                    placeholderTextColor="#555"
                    onChangeText={setUsername}
                    value={username}
                    underlineColorAndroid={'transparent'}
                />
                <TextInput
                    style={styles.box}
                    placeholder="Senha"
                    placeholderTextColor="#555"
                    secureTextEntry
                    onChangeText={setPassword}
                    value={password}
                    underlineColorAndroid={'transparent'}
                />
                {erro !== '' && (
                    <Text style={styles.erro}>{erro}</Text>
                )}
                <TouchableOpacity style={styles.button} onPress={idfLogin}>
                    <Text style={styles.buttonText}>Entrar</Text>
                </TouchableOpacity>
            </View>
        </ImageBackground>
    );
}

//Só perfumaria kkkkkkkkkkk chat ajudou
const styles = StyleSheet.create({
    background: {
        flex: 1,
        width: '100%',
        height: '100%',
        justifyContent: 'center',
        alignItems: 'center'
    },
    container: {
        backgroundColor: 'rgba(31, 146, 146, 0.85)',
        alignItems: 'center',
        justifyContent: 'center',
        padding: 24,
        borderRadius: 16,
        width: '90%',
        alignSelf: 'center'
    },
    titulo: {
        fontSize: 32,
        fontWeight: 'bold',
        textAlign: 'center',
        color: '#000000',
        marginBottom: 24
    },
    box: {
        height: 48,
        borderWidth: 0,
        borderColor: '#499',
        borderRadius: 10,
        marginBottom: 16,
        paddingHorizontal: 12,
        width: 250,
        backgroundColor: '#fff',
        fontSize: 18,
        color: '#222'
    },
    button: {
        backgroundColor: "#2AD131",
        width: "80%",
        height: 50,
        justifyContent: "center",
        alignItems: "center",
        borderRadius: 8,
        marginTop: 16
    },
    buttonText: {
        color: "#FFF",
        fontSize: 20,
        fontWeight: "bold"
    },
    erro: {
        color: "#c00",
        fontSize: 16,
        marginBottom: 8,
        textAlign: 'center'
    }
});

export default LoginScreen;