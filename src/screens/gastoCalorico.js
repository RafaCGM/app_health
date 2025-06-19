import { View, Text, StyleSheet, ImageBackground, TouchableOpacity } from "react-native";
import calmaIsacImg from '../../assets/calma_isac.jpg';

export default function GastoCaloricoScreen({ navigation }) {
    return (
        <ImageBackground source={calmaIsacImg} style={styles.background} resizeMode="cover">
            <TouchableOpacity style={styles.voltar} onPress={() => navigation.goBack()}>
                <Text style={styles.voltarText}>Voltar</Text>
            </TouchableOpacity>
            <View style={styles.container}>
                <Text style={styles.titulo}>KKKKKKKKKKKKKKKKKKKKKKKK</Text>
            </View>
        </ImageBackground>
    );
}

const styles = StyleSheet.create({
    background: {
        flex: 1,
        width: '100%',
        height: '100%',
        justifyContent: 'center',
        alignItems: 'center'
    },
    container: {
        backgroundColor: 'rgba(18, 19, 19, 0.85)',
        alignItems: 'center',
        justifyContent: 'center',
        padding: 24,
        borderRadius: 8,
        width: '90%',
        alignSelf: 'center'
    },
    voltar: {
        position: 'absolute',
        top: 40, 
        left: 20,
        backgroundColor: 'rgba(18, 19, 19, 0.85)',
        paddingVertical: 8,
        paddingHorizontal: 10,
        borderRadius: 2,
    },
    voltarText: {
        color: '#fff',
        fontSize: 16,
        fontWeight: 'bold'
    },
    titulo: {
        fontSize: 32,
        fontWeight: 'bold',
        textAlign: 'center',
        color: '#fff',
        marginBottom: 24
    }
});