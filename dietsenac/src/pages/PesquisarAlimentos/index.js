import React, { useState } from 'react';
import { StyleSheet, SafeAreaView, View, Text, TouchableOpacity, TextInput, KeyboardAvoidingView, Platform, FlatList, Alert } from 'react-native';

export default function PesquisarAlimentos({ navigation }) {
  const [pesquisa, setPesquisa] = useState('');
  const [alimentos, setAlimentos] = useState([
    { id: 1, nome: 'Iogurte', calorias: 100 },
    { id: 2, nome: 'Pão Integral', calorias: 150 },
    { id: 3, nome: 'Requeijão Diet', calorias: 50 },
    { id: 4, nome: 'Banana', calorias: 80 },
    { id: 5, nome: 'Frango Desfiado', calorias: 200 },
  ]);
  const [alimentosFiltrados, setAlimentosFiltrados] = useState(alimentos);
  const [caloriasTotais, setCaloriasTotais] = useState(0);

  function handlePesquisa(text) {
    setPesquisa(text);
    // Filtrar alimentos com base no texto de pesquisa
    const alimentosFiltrados = alimentos.filter(alimento =>
      alimento.nome.toLowerCase().includes(text.toLowerCase())
    );
    setAlimentosFiltrados(alimentosFiltrados);
  }

  function handleAlimentoSelecionado(item) {
    const calorias = item.calorias;
    const novaCaloriaTotal = caloriasTotais + calorias;
    setCaloriasTotais(novaCaloriaTotal);
    Alert.alert(`${item.nome} selecionado!`, `Calorias: ${calorias}`);
  }

  function handleConfirmarRefeicao() {
    // Redirecionar para a tela principal (TelaPrincipal) e passar as informações necessárias
    navigation.navigate('TelaPrincipal', { alimentosSelecionados: alimentosFiltrados, caloriasTotais });
  }

  function renderItem({ item }) {
    return (
      <TouchableOpacity style={styles.button} onPress={() => handleAlimentoSelecionado(item)}>
        <Text style={styles.buttonText}>{item.nome}</Text>
      </TouchableOpacity>
    );
  }

  return (
    <SafeAreaView style={styles.safeArea}>
      <KeyboardAvoidingView style={styles.container} behavior={Platform.OS === 'ios' ? 'padding' : undefined}>
        <TextInput
          style={styles.input}
          placeholder="PESQUISAR ALIMENTOS"
          value={pesquisa}
          onChangeText={handlePesquisa}
        />
        <View style={styles.alimentosContainer}>
          <Text style={styles.alimentoTitle}>Alimentos</Text>
          <FlatList
            data={alimentosFiltrados}
            renderItem={renderItem}
            keyExtractor={item => item.id.toString()}
          />
        </View>
        <View style={styles.confirmButtonContainer}>
          <TouchableOpacity style={styles.confirmButton} onPress={handleConfirmarRefeicao}>
            <Text style={styles.confirmButtonText}>Confirmar Refeição</Text>
          </TouchableOpacity>
        </View>
      </KeyboardAvoidingView>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  safeArea: {
    flex: 1,
    backgroundColor: '#027154',
    justifyContent: 'center',
    alignItems: 'center',
  },
  container: {
    flex: 1,
    width: '90%',
    alignItems: 'center',
    paddingBottom: 50,
    marginTop: '20%', // Adicionado para descer o conteúdo
  },
  input: {
    backgroundColor: '#ffffff',
    borderRadius: 10,
    padding: 10,
    margin: 10,
    width: '100%',
    fontSize: 20,
    fontWeight: 'bold',
  },
  alimentosContainer: {
    backgroundColor: '#ffffff',
    borderRadius: 10,
    padding: 10,
    margin: 10,
    width: '100%',
    marginTop: 20,
  },
  alimentoTitle: {
    color: '#027154',
    fontSize: 20,
    fontWeight: 'bold',
    textDecorationLine: 'underline',
    marginVertical: 10,
  },
  button: {
    backgroundColor: '#027154',
    borderRadius: 10,
    padding: 10,
    marginVertical: 5,
  },
  buttonText: {
    color: '#ffffff',
    fontSize: 20,
    fontWeight: 'bold',
    textAlign: 'left',
  },
  confirmButtonContainer: {
    marginTop: 20,
    width: '100%',
    alignItems: 'center',
  },
  confirmButton: {
    backgroundColor: '#ffff',
    borderRadius: 10,
    width: '70%',
    height: 60,
    justifyContent: 'center',
    alignItems: 'center',
    margin: 10,
  },
  confirmButtonText: {
    color: '#333333',
    fontSize: 22,
    fontWeight: 'bold',
  },
});
