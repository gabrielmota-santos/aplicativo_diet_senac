import React, { useState } from 'react';
import { useNavigation } from '@react-navigation/native';

import { 
  View, 
  Text, 
  Image, 
  StyleSheet, 
  SafeAreaView, 
  TouchableOpacity, 
  KeyboardAvoidingView,
} from 'react-native';

export default function Objetivo() {   
  const navigation = useNavigation();

  function handleNavigateToRegisterScreen() {
    navigation.navigate('TelaPrincipal');
  }
  
  return (
    <SafeAreaView style={styles.safeArea}>
      <KeyboardAvoidingView style={styles.container}>
        <View style={styles.containerForm}>
          <Text style={styles.titleInput}>QUAL SEU OBJETIVO?</Text>

          <TouchableOpacity onPress={handleNavigateToRegisterScreen}>
            <View style={styles.imageContainer}>
              <Image source={require('../../assets/ImagemDePerdaPeso.jpg')} style={styles.imagem1} />
              <Text style={[styles.textoImagem, styles.textoImagem1]}>Perder Peso  {'\n'}
               {'\n'}
              Iremos ajudar com informações do que precisa se alimentar para perder peso.</Text>
            </View>
          </TouchableOpacity>

          <TouchableOpacity onPress={handleNavigateToRegisterScreen}>
            <View style={styles.imageContainer}>
              <Image source={require('../../assets/ImagemGanhoDePeso.jpg')} style={styles.imagem2} />
              <Text style={[styles.textoImagem, styles.textoImagem2]}>Ganhar Peso {'\n'}
              {'\n'}
              Iremos ajudar com informações alimentares para ganhar peso.</Text>
            </View>
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
    justifyContent: 'center',
    alignItems: 'center',
  },
  containerForm: {
    alignItems: 'center',
    justifyContent: 'center',
    width: 400,
    height: 200,
    marginBottom: 50, // Adiciona margem inferior para descer o containerForm
  },
  titleInput: {
    backgroundColor: '#ffff',
    fontSize: 23,
    fontWeight: 'bold',
    textAlign: 'center',
    color: '#027154',
    borderRadius: 10,
    padding: 10,
    margin: 10,
    width: '85%',
    height: 50,
    marginBottom: 40, // Ajuste o valor para a margem desejada
  },
  imageContainer: {
    alignItems: 'center',
    marginBottom: 10,
  },
  imagem1: {
    width: 350,
    height: 250,
    borderRadius: 15,
    resizeMode: 'contain',
    marginVertical: 10,
  },
  imagem2: {
    width: 350,
    height: 250,
    borderRadius: 15,
    resizeMode: 'contain',
    marginVertical: 10,
  },
   textoImagem: {
    color: 'white',
    fontSize: 24,
    fontWeight: 'bold',
    textAlign: 'center',
    zIndex: 1,
  },
  textoImagem1: {
    position: 'absolute',
    top: 60, // Ajuste a posição vertical do texto na imagem 1
  },
  textoImagem2: {
    position: 'absolute',
    top: 60, // Ajuste a posição vertical do texto na imagem 2
  },
});
