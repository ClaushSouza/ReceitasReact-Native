import React from 'react';
import { StyleSheet, View, Text, TouchableOpacity } from 'react-native';

export default function Home({ navigation }) {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>Bem-vindo ao Receitas</Text>
      <TouchableOpacity style={styles.optionButton} onPress={() => navigation.navigate('Entrada')}>
        <Text style={styles.buttonText}>Entrada</Text>
      </TouchableOpacity>
      <TouchableOpacity style={styles.optionButton} onPress={() => navigation.navigate('PratoPrincipal')}>
        <Text style={styles.buttonText}>Prato Principal</Text>
      </TouchableOpacity>
      <TouchableOpacity style={styles.optionButton} onPress={() => navigation.navigate('Sobremesa')}>
        <Text style={styles.buttonText}>Sobremesa</Text>
      </TouchableOpacity>
      <TouchableOpacity style={styles.optionButton} onPress={() => navigation.navigate('Vegano')}>
        <Text style={styles.buttonText}>Vegano</Text>
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: '#fff',
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 30,
  },
  optionButton: {
    backgroundColor: '#add8e6',
    padding: 15,
    borderRadius: 10,
    width: '100%',
    marginBottom: 10,
  },
  buttonText: {
    fontSize: 18,
    fontWeight: 'bold',
    textAlign: 'center',
  },
});
