import { View, Text, TextInput, Button, StyleSheet, Alert } from "react-native";
import React, {useState} from "react";

function LoginScreen({navigation}) {
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');

    // identificar login
    const idfLogin = () => {
        if(username === 'admin' && password === '123456') {
            navigation.navigate('Home');
        }else{
            Alert.alert('Erro identificado!','Login ou senha incorretos');
        }
    };

    return(
        <View style={styles.container}>
            <Text style={styles.titulo}>Login</Text>
            <TextInput
                style={styles.box}
                placeholder="Usuário"
                onChangeText={setUsername}
                value={username}
            />
            <TextInput 
                style={styles.box}
                placeholder="Senha"
                secureTextEntry
                onChangeText={setPassword}
                value={password}
                />
            <Button title="Entrar" onPress={idfLogin} />
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        padding: 16,
    },
    titulo: {
        fontSize: 28,
        marginBottom: 20,
        textAlign: 'center',
    },
    box: {
        height: 48,
        borderWidth: 2,
        borderColor: '#499',
        borderRadius: 10,
        marginBottom: 12,
        paddingHorizontal: 12,
        width: 550,
        alignSelf: 'center'
    },
})

export default LoginScreen