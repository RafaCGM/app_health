import { View, Text, TextInput, StyleSheet, TouchableOpacity, ImageBackground } from "react-native";

function GastoCaloricoScreen({ navigation }){
    const [peso, setPeso] = useState('');
    const [genero, setGenero] = useState(null); // null, 'F', 'M'
    const [resultado, setResultado] = useState('');
    

    return(
        <View style={style.container}>
            
        </View>
    )
}

const style = StyleSheet.create({
    container: {
        backgroundColor: 'rgba(15, 15, 15, 0.85)',
        alignItems: 'center',
        justifyContent: 'center',
        padding: 20,
        borderRadius: 16,
        width: '90%',
        alignSelf: 'center'
    },
})

export default GastoCaloricoScreen;