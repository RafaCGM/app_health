import { View, Text, StyleSheet, TouchableOpacity, ImageBackground } from "react-native";
import bemEstarImg from '../../assets/bem_estar.png';
import UserInfo from "./UserInfo";

function GuiaNutricionalScreen({ navigation }) {
    return (
        <>
            <UserInfo />
            <ImageBackground source={bemEstarImg} style={styles.background} resizeMode="cover">
                <TouchableOpacity style={styles.voltar} onPress={() => navigation.goBack()}>
                    <Text style={styles.voltarText}>Voltar</Text>
                </TouchableOpacity>
                <View style={styles.container}>
                    <Text style={styles.titulo}>Em desenvolvimento</Text>
                </View>
            </ImageBackground>
        </>
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
        backgroundColor: 'rgba(0, 0, 0, 0.85)',
        alignItems: 'center',
        justifyContent: 'center',
        padding: 32,
        borderRadius: 8,
        width: '85%',
        alignSelf: 'center'
    },
    titulo: {
        fontSize: 28,
        fontWeight: 'bold',
        color: '#fff',
        textAlign: 'center'
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

export default GuiaNutricionalScreen;