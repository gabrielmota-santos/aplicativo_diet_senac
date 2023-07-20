import React, { useState } from 'react';
import { useNavigation } from '@react-navigation/native';

import {
  View,
  Text,
  Image,
  StyleSheet,
  SafeAreaView,
  TextInput,
  TouchableOpacity,
  KeyboardAvoidingView,
  Alert,
} from 'react-native';

export default function Cadastro() {
  const navigation = useNavigation();

  const [nome, setNome] = useState('');
  const [email, setEmail] = useState('');
  const [senha, setSenha] = useState('');

  function handleNavigateToRegisterScreen() {
    if (!nome || !email || !senha) {
      Alert.alert('Erro', 'Por favor, preencha todos os campos');
      return;
    }

    // Passa os dados de cadastro como parâmetros para a tela de Dados Pessoais
    navigation.navigate('DadosPessoais', {
      nome,
      email,
      senha,
    });
  }

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
          <Text style={styles.titleInput}>CADASTRE-SE</Text>

          <TextInput
            placeholder="Nome"
            placeholderTextColor="#333333"
            style={styles.input}
            keyboardType="email-address"
            value={nome}
            onChangeText={(text) => setNome(text)}
          />

          <TextInput
            placeholder="E-mail"
            placeholderTextColor="#333333"
            style={styles.input}
            value={email}
            onChangeText={(text) => setEmail(text)}
          />

          <TextInput
            placeholder="Senha"
            placeholderTextColor="#333333"
            style={styles.input}
            secureTextEntry={true}
            value={senha}
            onChangeText={(text) => setSenha(text)}
          />

          <TouchableOpacity style={styles.button} onPress={handleNavigateToRegisterScreen}>
            <Text style={styles.buttonText}>Continuar</Text>
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
    marginTop: 155,
    width: 357,
  },
  titleInput: {
    backgroundColor: '#ffff',
    fontSize: 24,
    fontWeight: 'bold',
    textAlign: 'center',
    color: '#027154',
    borderRadius: 10,
    padding: 10,
    margin: 10,
    width: '75%',
    marginTop: 50,
    marginBottom: 22,
  },
  input: {
    borderWidth: 1,
    borderColor: 'gray',
    backgroundColor: '#FFFFFF',
    fontSize: 20,
    borderRadius: 10,
    width: '101%',
    height: 60,
    margin: 5,
    padding: 10,
    marginBottom: 10,
    fontWeight: 'bold'
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
    fontSize: 22,
    fontWeight: 'bold',
  },
});
