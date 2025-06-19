import { View, Text, StyleSheet, TouchableOpacity, ImageBackground } from "react-native";
import bemEstarImg from '../../assets/bem_estar.png';

function DesktopScreen({ navigation }) {
    return (
        <ImageBackground source={bemEstarImg} style={styles.background} resizeMode="cover">
            <View style={styles.container}>
                <Text style={styles.titulo}>Escolha uma opção</Text>
                <View style={styles.boxContainer}>
                    <TouchableOpacity style={styles.box} onPress={() => navigation.navigate('CalculoIMC')}>
                        <Text style={styles.boxText}>IMC</Text>
                    </TouchableOpacity>
                    <TouchableOpacity style={styles.box} onPress={() => navigation.navigate('gastoCalorico')}>
                        <Text style={styles.boxText}>Clique aqui</Text>
                    </TouchableOpacity>
                </View>
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
        borderRadius: 5,
        width: '90%',
        alignSelf: 'center'
    },
    titulo: {
        fontSize: 28,
        fontWeight: 'bold',
        color: '#fff',
        marginBottom: 32,
        textAlign: 'center'
    },
    boxContainer: {
        flexDirection: 'row',
        justifyContent: 'center',
        gap: 24
    },
    box: {
        backgroundColor: "#2AD131",
        borderRadius: 12,
        paddingVertical: 36,
        paddingHorizontal: 32,
        marginHorizontal: 12,
        alignItems: 'center',
        justifyContent: 'center',
        elevation: 4
    },
    boxText: {
        color: "#FFF",
        fontSize: 22,
        fontWeight: "bold"
    }
});

export default DesktopScreen;