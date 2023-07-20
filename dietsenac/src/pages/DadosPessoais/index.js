import React, { useState } from 'react';
import { useNavigation, useRoute } from '@react-navigation/native';
import { View, Text, Image, StyleSheet, SafeAreaView, TextInput, TouchableOpacity, KeyboardAvoidingView, Alert } from 'react-native';

export default function DadosPessoais() {
  const navigation = useNavigation();
  const route = useRoute();

  const [idade, setIdade] = useState('');
  const [genero, setGenero] = useState('');
  const [altura, setAltura] = useState('');
  const [pesoAtual, setPesoAtual] = useState('');

  const handleNavigateToObjetivoScreen = () => {
    if (!idade || !genero || !altura || !pesoAtual) {
      Alert.alert('Erro', 'Por favor, preencha todos os campos');
      return;
    }

    const cadastro = {
      nome: route.params.nome,
      email: route.params.email,
      senha: route.params.senha,
      idade,
      genero,
      altura,
      pesoAtual,
    };

    // Aqui você pode fazer o que desejar com as informações do cadastro
    console.log(cadastro);

    navigation.navigate('Objetivo');
  };

  return (
    <SafeAreaView style={styles.safeArea}>
      <KeyboardAvoidingView style={styles.container}>
        <View style={styles.header}>
          <View style={styles.imageContainer}>
            <Image
              style={styles.logo}
              source={require('../../assets/LogoDietSenac.png')}
              animation="bounceIn"
              useNativeDriver={true}
            />
          </View>
        </View>

        <View style={styles.containerForm}>
          <Text style={styles.titleInput}>INFORMAÇÕES PESSOAIS</Text>

          <TextInput
            placeholder="Idade"
            placeholderTextColor="#333333"
            style={styles.input}
            keyboardType="numeric"
            value={idade}
            onChangeText={text => setIdade(text)}
          />

          <TextInput
            placeholder="Gênero"
            placeholderTextColor="#333333"
            style={styles.input}
            value={genero}
            onChangeText={text => setGenero(text)}
          />

          <TextInput
            placeholder="Altura"
            placeholderTextColor="#333333"
            style={styles.input}
            keyboardType="numeric"
            value={altura}
            onChangeText={text => setAltura(text)}
          />

          <TextInput
            placeholder="Peso Atual"
            placeholderTextColor="#333333"
            style={styles.input}
            keyboardType="numeric"
            value={pesoAtual}
            onChangeText={text => setPesoAtual(text)}
          />

          <TouchableOpacity style={styles.button} onPress={handleNavigateToObjetivoScreen}>
            <Text style={styles.buttonText}>Registrar-se</Text>
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
  },
  container: {
    flex: 1,
    flexDirection: 'column',
    justifyContent: 'flex-start',
    alignItems: 'center',
  },
  header: {
    position: 'absolute',
    top: 0,
    left: 0,
    right: 0,
  },
  imageContainer: {
    alignItems: 'center',
    width: 415,
    height: 377,
  },
  logo: {
    width: 400,
    height: 200,
    alignSelf: 'center',
    marginTop: 20,
    marginBottom: 200,
    marginLeft: -20,
  },
  containerForm: {
    alignItems: 'center',
    justifyContent: 'center',
    marginTop: 200,
    width: 357,
  },
  titleInput: {
    backgroundColor: '#ffff',
    fontSize: 20,
    fontWeight: 'bold',
    textAlign: 'center',
    color: '#027154',
    borderRadius: 10,
    padding: 10,
    margin: 10,
    width: '85%',
    marginTop: 10,
    marginBottom: 22,
  },
  input: {
    borderWidth: 1,
    borderColor: 'gray',
    backgroundColor: '#FFFFFF',
    fontSize: 20,
    borderRadius: 10,
    width: '100%',
    height: 60,
    margin: 5,
    padding: 10,
    marginBottom: 10,
    fontWeight: 'bold',
  },
  button: {
    backgroundColor: '#ffff',
    borderRadius: 10,
    width: '50%',
    height: 60,
    justifyContent: 'center',
    alignItems: 'center',
    margin: 10,
  },
  buttonText: {
    color: '#333333',
    fontSize: 20,
    fontWeight: 'bold',
  },
});
