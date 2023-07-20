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

export default function Login({ route }) {
  const navigation = useNavigation();
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  function handleNavigateToCadastro() {
    navigation.navigate('Cadastro');
  }

  function handleLogin() {
    const user = {
      email: 'emailteste@exemplo.com',
      password: 'senha123',
    };

    if (email === user.email && password === user.password) {
      navigation.navigate('TelaPrincipal');
    } else {
      Alert.alert('Erro', 'E-mail ou senha inválidos.');
    }
  }

  // Verifica se há parâmetros de navegação contendo os dados de cadastro
  if (route.params?.email && route.params?.senha) {
    // Define os valores iniciais dos campos de e-mail e senha com os dados de cadastro
    setEmail(route.params.email);
    setPassword(route.params.senha);
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
          <Text style={styles.titleInput}>INICIAR SESSÃO</Text>

          <TextInput
            placeholder="E-mail"
            placeholderTextColor="#333333"
            style={styles.input}
            keyboardType="email-address"
            value={email}
            onChangeText={setEmail}
          />

          <TextInput
            placeholder="Senha"
            placeholderTextColor="#333333"
            style={styles.input}
            secureTextEntry={true}
            value={password}
            onChangeText={setPassword}
          />

          <TouchableOpacity style={styles.button} onPress={handleLogin}>
            <Text style={styles.buttonText}>Entrar</Text>
          </TouchableOpacity>

          <TouchableOpacity style={styles.buttonRegister} onPress={handleNavigateToCadastro}>
            <Text style={styles.RegisterText}>Não tem uma conta? Registre-se já!</Text>
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
    width: 415,
    height: 200,
    alignSelf: 'center',
    marginTop: 20,
    marginBottom: 200,
    marginLeft: -30,
  },
  containerForm: {
    alignItems: 'center',
    justifyContent: 'center',
    marginTop: 250,
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
    fontSize: 22,
    fontWeight: 'bold',
  },
  RegisterText: {
    color: '#fff',
    fontSize: 18,
    fontWeight: 'bold',
    marginTop: 150,
  },
});
