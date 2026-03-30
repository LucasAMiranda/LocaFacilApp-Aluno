import React from "react";
import { StyleSheet, Text, View } from "react-native";

// Este componente recebe informações (props) de fora
// e as exibe de forma organizada 

interface VeiculoProps{
    nome: string;
    preco: string | number
}

export function CartaoVeiculo(props: VeiculoProps) {
   
    return (
        // Aplicamos o estilo 'card' ao container principal
        <View style={styles.card}>
            {/* Aplicamos o estilo 'nome' ao texto do nome */}
            <Text style={styles.nome}>{props.nome}</Text>
            
            {/* Aplicamos o estilo 'preco' ao texto do preço */}
            <Text style={styles.preco}>R$ {props.preco}</Text>
        </View>
    );
}

const styles = StyleSheet.create({
    card: {
        backgroundColor: "#fff",
        borderRadius: 12,
        padding: 16,
        marginBottom: 12,
        borderLeftWidth: 4,
        borderLeftColor: "#F5A623",
        // Sombra para Android
        elevation: 3,
        // Sombra para iOS (opcional, mas recomendado para consistência)
        shadowColor: "#000",
        shadowOffset: { width: 0, height: 2 },
        shadowOpacity: 0.1,
        shadowRadius: 4,
    },

    nome: {
        fontSize: 18,
        fontWeight: "bold",
        color: "#1A1A2E"
    },

    preco: {
        fontSize: 14,
        color: "#F5A623",
        marginTop: 4
    },
});