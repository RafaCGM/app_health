import { View, Text, TextInput, Button, StyleSheet, Switch, TouchableOpacity, Alert} from "react-native";
import {useState} from "react";

function CalculoIMCScreen(){
    const [peso, setPeso] = useState('');
    const [altura, setAltura] = useState('');
    const [genero, setGenero] = useState(false);
    const toggleSwitch = () => setGenero(previousState => !previousState);
    const handleCalcular = () => {
        const psNum = parseFloat(peso);
        const altNum = parseFloat(altura) / 100;
        const imc = psNum / (altNum * altNum)

    if (genero) {
    if (imc < 16)
        return Alert.alert(
        "Magreza Grave", `Seu IMC é de ${imc.toFixed(2)}`);
    if (imc >= 16 && imc <= 16.9)
        return Alert.alert(
        "Magreda Moderada", `Seu IMC é de ${imc.toFixed(2)}`);
    if (imc >= 17 && imc <= 18.5)
        return Alert.alert(
    "Magreda Leve", `Seu IMC é de ${imc.toFixed(2)}`);
    if (imc >= 18.6 && imc <= 24.9)
        return Alert.alert(
    "Peso Ideal", `Seu IMC é de ${imc.toFixed(2)}`);
    if (imc >= 25 && imc <= 29.9)
        return Alert.alert(
    "Sobrepeso", `Seu IMC é de ${imc.toFixed(2)}`);
    if (imc >= 30 && imc <= 34.9)
        return Alert.alert(
    "Obesidade Grau 1", `Seu IMC é de ${imc.toFixed(2)}`);
    if (imc >= 35 && imc <= 39.9)
        return Alert.alert(
    "Obesidade Grau 2", `Seu IMC é de ${imc.toFixed(2)}`);
    if (imc > 40)
        return Alert.alert(
    "Obesidade Grau 3", `Seu IMC é de ${imc.toFixed(2)}`);
        }else{
                if (imc < 16)
        return Alert.alert(
        "Magreza Grave", `Seu IMC é de ${imc.toFixed(2)}`);
    if (imc >= 16 && imc <= 16.9)
        return Alert.alert(
        "Magreda Moderada", `Seu IMC é de ${imc.toFixed(2)}`);
    if (imc >= 17 && imc <= 18.5)
        return Alert.alert(
    "Magreda Leve", `Seu IMC é de ${imc.toFixed(2)}`);
    if (imc >= 18.6 && imc <= 24.9)
        return Alert.alert(
    "Peso Ideal", `Seu IMC é de ${imc.toFixed(2)}`);
    if (imc >= 25 && imc <= 29.9)
        return Alert.alert(
    "Sobrepeso", `Seu IMC é de ${imc.toFixed(2)}`);
    if (imc >= 30 && imc <= 34.9)
        return Alert.alert(
    "Obesidade Grau 1", `Seu IMC é de ${imc.toFixed(2)}`);
    if (imc >= 35 && imc <= 39.9)
        return Alert.alert(
    "Obesidade Grau 2", `Seu IMC é de ${imc.toFixed(2)}`);
    if (imc > 40)
        return Alert.alert(
    "Obesidade Grau 3", `Seu IMC é de ${imc.toFixed(2)}`);
        }
    };

return (
    <View style={styles.todo}> 
        <View style={styles.titulo1}>

            <Text>Digite seu Peso</Text>
            <TextInput style={styles.textinput}
            value={peso}
            onChangeText={(text) => setPeso(text.replace(/\D/g, ""))}
            keyboardType="number-pad" 
            />

            <Text>Digite sua Altura</Text>
            <TextInput style={styles.textinput}
            value={altura}
            onChangeText={(text) => setAltura(text.replace(/\D/g, ""))}
            keyboardType="number-pad" 
            />
            
        <View style={styles.gen}>
        <Text >Feminino</Text>
        <Switch
            trackColor={{false: '#767577', true: '#81b0ff'}}
            thumbColor={genero ? '#f5dd4b' : '#f4f3f4'}
            ios_backgroundColor="#3e3e3e"
            onValueChange={toggleSwitch}
            value={genero}
            />
        <Text>Masculino</Text>
        </View>

            <TouchableOpacity onPress={handleCalcular} 
            style={styles.touch}>
                <Text style={styles.touchText}>Calcular </Text>
            </TouchableOpacity>


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
    },
    gen:{
        flexDirection: "row"
    },
    touch:{
        backgroundColor:"#2AD131",
        width: "80%",
        height: 54,
        justifyContent: "center",
        alignItems: "center",
        borderRadius: 8,
        marginTop: 16
    },
    touchText:{
        fontFamily: "Poppins",
        color: "#FFF",
        fontSize: 12
    }
})