import { View, Text, TextInput, Button, StyleSheet} from "react-native";
import {useState} from "react";

function CalculoIMCScreen(){
    const [peso, setPeso] = useState();
    const [altura, setAltura] = useState();
    const [resultado, setResultado] = useState('');
    

    const calcIMC = () =>{
        const psNum = parseFloat(peso);
        const altNum = parseFloat(altura);
        const imc = psNum / (altNum * altNum)
        let condicao = "";


        if (imc < 16) {
        condicao = "magreza grave";
        } else if (imc < 24.9) {
            condicao = "Peso normal";
        } else if (imc < 29.9) {
            condicao = "Sobrepeso";
        } else if (imc < 34.9) {
            condicao = "Obesidade grau 1";
        } else if (imc < 39.9) {
            condicao = "Obesidade grau 2";
        } else {
            condicao = "Obesidade grau 3";
        }

}
return (
    <View style={styles.todo}> 
        <View style={styles.titulo1}>
            <Text>Digite seu Peso</Text>
            <TextInput style={styles.textinput}
            value={peso}
            onChangeText={setPeso}
            keyboardType="numeric" 
            />

            <Text>Digite sua Altura</Text>
            <TextInput style={styles.textinput}
            value={altura}
            onChangeText={setAltura}
            keyboardType="numeric"
            />
            <Button title="Calcular" onPress={calcIMC} />
            <Text>Condição: {resultado}</Text>
        </View>
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
        backgroundColor: '#dddd',
        color: 'black',
        borderRadius: 10,
        paddingLeft: 10
    },
    resultado:{
        fontSize:50,
    },
    button:{
        fontSize: 50,
        margin: 20,
    },
    todo:{
        backgroundColor: "gray",
    }
})