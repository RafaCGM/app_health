import { View, Text, TextInput, StyleSheet, TouchableOpacity, ImageBackground } from "react-native";
import { useState } from "react";


// Importação da imagem de fundo aqui viu
import bemEstarImg from '../../assets/bem_estar.png';
import UserInfo from "./UserInfo";

function CalculoIMCScreen({ navigation }) {
    const [peso, setPeso] = useState('');
    const [altura, setAltura] = useState('');
    const [genero, setGenero] = useState(null); // null, 'F', 'M'
    const [resultado, setResultado] = useState('');

    const handleGenero = (g) => setGenero(g);

    const handleCalcular = () => {
        if (!peso || !altura) {
            setResultado("Preencha peso e altura corretamente.");
            return;
        }
        const psNum = parseFloat(peso);
        const altNum = parseFloat(altura) / 100;
        if (!psNum || !altNum) {
            setResultado("Valores inválidos.");
            return;
        }
        const imc = psNum / (altNum * altNum);

        let classificacao = "";
        if (imc < 16)
            classificacao = "Magreza Grave";
        else if (imc >= 16 && imc <= 16.9)
            classificacao = "Magreza Moderada";
        else if (imc >= 17 && imc <= 18.5)
            classificacao = "Magreza Leve";
        else if (imc >= 18.6 && imc <= 24.9)
            classificacao = "Peso Ideal";
        else if (imc >= 25 && imc <= 29.9)
            classificacao = "Sobrepeso";
        else if (imc >= 30 && imc <= 34.9)
            classificacao = "Obesidade Grau 1";
        else if (imc >= 35 && imc <= 39.9)
            classificacao = "Obesidade Grau 2";
        else if (imc > 40)
            classificacao = "Obesidade Grau 3";

        setResultado(`Seu IMC é ${imc.toFixed(2)}\n${classificacao}`);
    };

    return (
        
        <ImageBackground source={bemEstarImg} style={styles.background} resizeMode="cover">
            <UserInfo />
            <TouchableOpacity style={styles.voltar} onPress={() => navigation.goBack()}>
                <Text style={styles.voltarText}>Voltar</Text>
            </TouchableOpacity>
            <View style={styles.container}>
                <Text style={styles.titulo1}>Cálculo do IMC</Text>
                <Text style={styles.digite1}>Digite seu Peso</Text>
                <TextInput
                    style={styles.textinput}
                    value={peso}
                    onChangeText={(text) => setPeso(text.replace(/\D/g, ""))}
                    keyboardType="number-pad"
                />

                <Text style={styles.digite1}>Digite sua Altura</Text>
                <TextInput
                    style={styles.textinput}
                    value={altura}
                    onChangeText={(text) => setAltura(text.replace(/\D/g, ""))}
                    keyboardType="number-pad"
                />

                <View style={styles.genContainer}>
                    <TouchableOpacity
                        style={[
                            styles.genButton,
                            genero === 'F' && styles.genButtonSelected
                        ]}
                        onPress={() => handleGenero('F')}
                    >
                        <Text style={[
                            styles.genText,
                            genero === 'F' && styles.genTextSelected
                        ]}>Feminino</Text>
                    </TouchableOpacity>
                    <TouchableOpacity
                        style={[
                            styles.genButton,
                            genero === 'M' && styles.genButtonSelected
                        ]}
                        onPress={() => handleGenero('M')}
                    >
                        <Text style={[
                            styles.genText,
                            genero === 'M' && styles.genTextSelected
                        ]}>Masculino</Text>
                    </TouchableOpacity>
                </View>

                <TouchableOpacity onPress={handleCalcular} style={styles.touch}>
                    <Text style={styles.touchText}>Calcular</Text>
                </TouchableOpacity>

                {resultado !== '' && (
                    <View style={styles.resultadoBox}>
                        <Text style={styles.resultadoText}>{resultado}</Text>
                    </View>
                )}
            </View>
        </ImageBackground>
    );
}

export default CalculoIMCScreen

//Só perfumaria kkkkkkkkkk
const styles = StyleSheet.create({
    background: {
        flex: 1,
        width: '100%',
        height: '100%',
        justifyContent: 'center',
        alignItems: 'center'
    },
    container: {
        backgroundColor: 'rgba(15, 15, 15, 0.85)',
        alignItems: 'center',
        justifyContent: 'center',
        padding: 20,
        borderRadius: 16,
        width: '90%',
        alignSelf: 'center'
    },
    titulo1: {
        fontSize: 32,
        fontWeight: 'bold',
        textAlign: 'center',
        color: '#fff',
        marginBottom: 24
    },
    textinput: {
        fontSize: 30,
        backgroundColor: '#fff',
        color: 'black',
        borderRadius: 10,
        paddingLeft: 10,
        width: 200,
        marginBottom: 16,
        marginTop: 4
    },
    genContainer: {
        flexDirection: "row",
        alignItems: "center",
        marginBottom: 16,
        gap: 16
    },
    genButton: {
        paddingVertical: 10,
        paddingHorizontal: 24,
        borderRadius: 8,
        backgroundColor: "#eee",
        borderWidth: 1,
        borderColor: "#aaa",
        marginHorizontal: 8
    },
    genButtonSelected: {
        backgroundColor: "#2AD131",
        borderColor: "#2AD131"
    },
    genText: {
        fontSize: 18,
        color: "#333"
    },
    genTextSelected: {
        color: "#FFF",
        fontWeight: "bold"
    },
    touch: {
        backgroundColor: "#2AD131",
        width: "80%",
        height: 54,
        justifyContent: "center",
        alignItems: "center",
        borderRadius: 8,
        marginTop: 16
    },
    touchText: {
        fontFamily: "Poppins",
        color: "#FFF",
        fontSize: 18
    },
    resultadoBox: {
        marginTop: 24,
        backgroundColor: "#fff",
        borderRadius: 10,
        padding: 20,
        alignItems: "center",
        width: "90%"
    },
    resultadoText: {
        fontSize: 22,
        color: "#000",
        textAlign: "center"
    },
    digite1: {
        color: '#fff',
        fontSize: 18,
        marginBottom: 4,
        alignSelf: 'center'
    },

    voltar: {
        position: 'absolute',
        top: 40, 
        left: 20,
        backgroundColor: 'rgba(0, 0, 0, 0.85)',
        paddingVertical: 8,
        paddingHorizontal: 10,
        borderRadius: 2
    },
    voltarText: {
        color: '#fff',
        fontSize: 16,
        fontWeight: 'bold'
    }
});
       