import React, { useContext } from "react";
import { View, Text, StyleSheet } from "react-native";
import { AuthContext } from "./AuthContext"; 

export default function UserInfo() {
    const { user } = useContext(AuthContext);

    if (!user) return null;

    return (
        <View style={styles.container}>
            <Text style={styles.text}>Usuário: {user}</Text>
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        position: 'absolute',
        top: 40,
        right: 20,
        backgroundColor: 'rgba(18, 19, 19, 0.85)',
        paddingVertical: 8,
        paddingHorizontal: 12,
        borderRadius: 2,
        zIndex: 10
    },
    text: {
        color: '#fff',
        fontSize: 16,
        fontWeight: 'bold'
    }
});