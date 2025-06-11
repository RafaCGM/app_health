import { View, Text, TextInput, Button, StyleSheet, Alert } from "react-native";
import {useState} from "react";

function CalculoIMCScreen(){
    const [peso, setPeso] = useState(0)
    const [altura, setAltura] = useState(0)

    const imc = () =>{
        imc = peso / (altura * altura);
        let condicao = "";
    }



    return (
        <View style={styles.titulo1}>
            <Text>Digite Sua altura</Text>
            <TextInput style={styles.textinput}
            value={peso}
            onChangeText={(ps) => setPeso(ps)} />

        </View>
    );

}


export default CalculoIMCScreen

const styles = StyleSheet.create({
    container:{
        flex:1,
        backgroundColor: '#ccc',
        alignItems: 'center',
        justifyContent: 'center'
    },
    titulo1:{
        fontSize: 40,
        fontWeight: 'bold',
        textAlign: 'center',
        color: '#0000AA',
        paddingBottom: 40
    },
    label:{
        fontSize: 20,
        fontWeight: 'bold',
        color: '#0000CC'
    },
    textinput:{
        fontSize: 25,
        backgroundColor: '#5555AA',
        color: 'white',
        borderRadius: 10,
        paddingLeft: 10
    },
    resultado:{
        fontSize:50,
    },
    button:{
        fontSize: 50,
        margin: 20,

    }
})