import React, { useState, useEffect } from 'react';
import { View, Text, Image, FlatList, TouchableOpacity, StyleSheet } from 'react-native';
import axios from 'axios';

const Card = ({ item }) => {
    return (
        <TouchableOpacity>
            <View style={styles.card}>
                <Image source={{ uri: item.imagem }} style={styles.cardImage} />
                <Text style={styles.cardTitle}>{item.nome}</Text>
                <Text style={styles.cardText}>Ingredientes: {item.ingredientes}</Text>
                <Text style={styles.cardText}>Modo de preparo: {item.modo_preparo}</Text>
                <Text style={styles.cardText}>Facilidade: {item.facilidade}</Text>
                <Text style={styles.cardText}>Tempo de preparo: {item.tempo_preparo} minutos</Text>
                <Text style={styles.cardText}>Autor: {item.autor}</Text>
                <Text style={styles.cardText}>Rendimento: {item.rendimento}</Text>
            </View>
        </TouchableOpacity>
    );
};

const Sobremesa = () => {
    const [entradas, setEntradas] = useState([]);

    useEffect(() => {
        axios.get('https://api-receitas-production.up.railway.app/receitas/Sobremesa')
            .then((response) => {
                setEntradas(response.data);
            })
            .catch((error) => {
                console.log(error);
            });
    }, []);

    return (
        <View>
            <FlatList
                data={entradas.slice(0, 5)}
                renderItem={({ item }) => <Card item={item} />}
                keyExtractor={(item) => item.id.toString()}
            />
        </View>
    );
};

const styles = StyleSheet.create({
    card: {
        backgroundColor: '#fff',
        borderRadius: 30,
        elevation: 3,
        shadowOffset: { width: 1, height: 1 },
        shadowColor: '#333',
        shadowOpacity: 0.3,
        shadowRadius: 2,
        marginHorizontal: 4,
        marginVertical: 6,
    },
    cardImage: {
        width: '100%',
        height: 150,
        borderTopLeftRadius: 10,
        borderTopRightRadius: 10,
    },
    cardTitle: {
        fontSize: 18,
        fontWeight: 'bold',
        margin: 10,
    },
    cardText: {
        fontSize: 14,
        marginHorizontal: 10,
        marginBottom: 10,
    },
});


export default Sobremesa;
