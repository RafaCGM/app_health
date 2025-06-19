import { View, Text, StyleSheet, ImageBackground } from "react-native";
import calmaIsacImg from '../../assets/calma_isac.jpg';

export default function GastoCaloricoScreen() {
    return (
        <ImageBackground source={calmaIsacImg} style={styles.background} resizeMode="cover">
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
    titulo: {
        fontSize: 32,
        fontWeight: 'bold',
        textAlign: 'center',
        color: '#fff',
        marginBottom: 24
    }
});