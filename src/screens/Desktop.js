import { View, Text, StyleSheet, TouchableOpacity, ImageBackground } from "react-native";
import bemEstarImg from '../../assets/bem_estar.png';
import UserInfo from "./UserInfo";

function DesktopScreen({ navigation }) {
    return (
        <ImageBackground source={bemEstarImg} style={styles.background} resizeMode="cover">
            <UserInfo />
            <View style={styles.container}>
                <Text style={styles.titulo}>Escolha uma opção</Text>
                <View style={styles.boxContainer}>
                    <View style={styles.parLinhas}>
                        <TouchableOpacity style={styles.box} onPress={() => navigation.navigate('CalculoIMC')}>
                            <Text style={styles.boxText}>IMC</Text>
                        </TouchableOpacity>
                        <TouchableOpacity style={styles.box} onPress={() => navigation.navigate('GastoCalorico')}>
                            <Text style={styles.boxText}>Gasto Calórico</Text>
                        </TouchableOpacity>
                    </View>
                    <View style={styles.parLinhas}>
                        <TouchableOpacity style={styles.box} onPress={() => navigation.navigate('GuiaNutricional')}>
                            <Text style={styles.boxText}>Guia Nutricional</Text>
                        </TouchableOpacity>
                        <TouchableOpacity style={styles.box} onPress={() => navigation.navigate('Meditacao')}>
                            <Text style={styles.boxText}>Meditação</Text>
                        </TouchableOpacity>
                    </View>
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
        justifyContent: 'center',
        alignItems: 'center',
    },
    parLinhas: {
        flexDirection: 'row',
        justifyContent: 'center',
        marginBottom: 24,
    },
    box: {
        backgroundColor: '#000000',
        borderRadius: 5,
        paddingVertical: 25,
        paddingHorizontal: 20,
        marginHorizontal: 12,
        alignItems: 'center',
        justifyContent: 'center'
        
    },
    boxText: {
        color: "#FFF",
        fontSize: 22,
        fontWeight: "bold"
    }
});

export default DesktopScreen;