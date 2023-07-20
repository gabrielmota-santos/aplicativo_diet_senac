import React, { useState, useEffect } from 'react';
import { useNavigation } from '@react-navigation/native';
import { View, Text, StyleSheet, SafeAreaView, Image, TouchableOpacity } from 'react-native';

export default function TelaPrincipal() {
  const navigation = useNavigation();
  const [caloriasRestantes, setCaloriasRestantes] = useState(0);
  const meta = 2000; // Valor da meta de calorias

  function handleNavigateToPesquisarAlimentos() {
    navigation.navigate('PesquisarAlimentos');
  }

  useEffect(() => {
    calcularCaloriasRestantes();
  }, []);

  function calcularCaloriasRestantes() {
    // Realize o cálculo das calorias aqui, por exemplo:
    const meta = 2000; // Valor da meta de calorias
    const caloriasConsumidas = 1500; // Valor das calorias já consumidas
    const restantes = meta - caloriasConsumidas;

    setCaloriasRestantes(restantes);
  }

  return (
    <SafeAreaView style={styles.safeArea}>
      <View style={styles.container}>
        <Text style={styles.textoSublinhado}>CALORIAS RESTANTES</Text>
        <View style={styles.numeroCalorias}>
          <Text style={styles.caloriasTexto}>
          <Text style={styles.metaVariavel}>{meta}</Text>
            <Text style={[styles.valorCalorias, styles.overlayValue]}>                            {caloriasRestantes}</Text>
            {'\n'}{'\n'}
            <Text style={styles.metaTexto}>Meta</Text>        <Text style={styles.alimentosTexto}>Alimentos</Text>        <Text style={styles.restantesTexto}>Restantes</Text>
          </Text>
        </View>

        <View style={styles.containerRefeicoes}>
          <Text style={styles.cafeManha}>CAFÉ DA MANHÃ</Text>
          <View style={styles.imagensContainer}>
            <TouchableOpacity onPress={handleNavigateToPesquisarAlimentos} style={styles.button}>
              <Image
                source={require('../../assets/ImagemIogurte.jpg')}
                style={styles.imagem}
              />
              <Text style={styles.textoImagem}>Sugestão com Iogurte</Text>
            </TouchableOpacity>
            <TouchableOpacity onPress={handleNavigateToPesquisarAlimentos} style={styles.button}>
              <Image
                source={require('../../assets/ImagemOmelete.jpg')}
                style={styles.imagem}
              />
              <Text style={styles.textoImagem}>Sugestão com Omelete</Text>
            </TouchableOpacity>
            <TouchableOpacity onPress={handleNavigateToPesquisarAlimentos} style={styles.button}>
              <Image
                source={require('../../assets/ImagemAdicionar.png')}
                style={styles.imagem}
              />
            </TouchableOpacity>
          </View>

          <Text style={styles.almoco}>ALMOÇO</Text>
          <View style={styles.imagensContainer}>
            <TouchableOpacity onPress={handleNavigateToPesquisarAlimentos} style={styles.button}>
              <Image
                source={require('../../assets/ImagemFrango.jpg')}
                style={styles.imagem}
              />
              <Text style={styles.textoImagem}>Sugestão com Filé de Frango</Text>
            </TouchableOpacity>
            <TouchableOpacity onPress={handleNavigateToPesquisarAlimentos} style={styles.button}>
              <Image
                source={require('../../assets/ImagemPeixe.jpg')}
                style={styles.imagem}
              />
              <Text style={styles.textoImagem}>Sugestão com Peixe</Text>
            </TouchableOpacity>
            <TouchableOpacity onPress={handleNavigateToPesquisarAlimentos} style={styles.button}>
              <Image
                source={require('../../assets/ImagemAdicionar.png')}
                style={styles.imagem}
              />
            </TouchableOpacity>
          </View>

          <Text style={styles.janta}>JANTA</Text>
          <View style={styles.imagensContainer}>
            <TouchableOpacity onPress={handleNavigateToPesquisarAlimentos} style={styles.button}>
              <Image
                source={require('../../assets/ImagemMacarrao.jpg')}
                style={styles.imagem}
              />
              <Text style={styles.textoImagem}>Sugestão com Macarrão</Text>
            </TouchableOpacity>
            <TouchableOpacity onPress={handleNavigateToPesquisarAlimentos} style={styles.button}>
              <Image
                source={require('../../assets/ImagemAlcatra.jpg')}
                style={styles.imagem}
              />
              <Text style={styles.textoImagem}>Sugestão com Alcatra</Text>
            </TouchableOpacity>
            <TouchableOpacity onPress={handleNavigateToPesquisarAlimentos} style={styles.button}>
              <Image
                source={require('../../assets/ImagemAdicionar.png')}
                style={styles.imagem}
              />
            </TouchableOpacity>
          </View>
        </View>
      </View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  safeArea: {
    flex: 1,
    backgroundColor: '#027154',
  },
  container: {
    alignItems: 'center',
    width: 400,
    height: 200,
    marginTop: 80,
  },
  textoSublinhado: {
    fontSize: 24,
    fontWeight: 'bold',
    color: '#FFFFFF',
    textDecorationLine: 'underline',
    marginLeft: 10, // Ajuste o valor para posicionar o texto
    marginBottom: 8,
  },
  numeroCalorias: {
    backgroundColor: '#FFFF',
    fontSize: 20,
    fontWeight: 'bold',
    color: '#027154',
    borderRadius: 10,
    padding: 10,
    margin: 10,
    width: '90%', // Ajuste para ocupar toda a largura disponível
    height: 93,
    alignSelf: 'center', // Centraliza verticalmente
  },
  caloriasTexto: {
    fontSize: 17,
    fontWeight: 'bold',
    color: '#027154',
    textAlign: 'center', // Centraliza o texto
  },
  overlayValue: {
    position: 'absolute',
    top: -30, // Ajuste o valor conforme necessário
    right: 10, // Ajuste o valor para mover para a direita
    left: 0,
    width: '100%',
    textAlign: 'right',
    fontSize: 24,
    fontWeight: 'bold',
    color: '#027154',
  },
   metaVariavel: {
    position: 'absolute',
    top: -30, // Ajuste o valor conforme necessário
    right: 10, // Ajuste o valor para mover para a direita
    left: 0,
    width: '100%',
    textAlign: 'right',
    fontSize: 24,
    fontWeight: 'bold',
    color: '#027154',
  },
  metaTexto: {
    marginLeft: 10,
  },
  alimentosTexto: {
    marginRight: 10,
  },
  restantesTexto: {
    marginRight: 10,
  },
  valorCalorias: {
    fontSize: 30,
    fontWeight: 'bold',
    color: '#027154',
    textAlign: 'center',
  },
  containerRefeicoes: {
    backgroundColor: 'white',
    borderRadius: 10,
    padding: 10,
    marginTop: 20, // Ajuste o valor conforme necessário
    width: '90%',
    alignItems: 'center',
  },
  cafeManha: {
    color: '#027154',
    fontSize: 20,
    fontWeight: 'bold',
    textDecorationLine: 'underline',
    marginVertical: 5,
  },
  imagensContainer: {
    flexDirection: 'row',
    justifyContent: 'center',
    marginTop: 10,
  },
  imagem: {
    width: 100,
    height: 100,
    marginHorizontal: 5,
    borderRadius: 10,
    backgroundColor: 'white',
    position: 'relative',
    opacity: 2.0, // Valor de opacidade ajustado para 0.8 (80% opaco)
  },
  textoImagem: {
    position: 'absolute',
    left: 0,
    right: 0,
    bottom: 25,
    paddingVertical: 8,
    paddingHorizontal: 10,
    color: 'white',
    fontSize: 16,
    fontWeight: 'bold',
    textAlign: 'center',
    textShadowColor: 'rgba(0, 0, 0, 0.5)', // Cor da sombra
    textShadowOffset: { width: 1, height: 1 }, // Deslocamento da sombra
    textShadowRadius: 6, // Raio da sombra
  },
  almoco: {
    color: '#027154',
    fontSize: 20,
    fontWeight: 'bold',
    textDecorationLine: 'underline',
    marginVertical: 5,
  },
  janta: {
    color: '#027154',
    fontSize: 20,
    fontWeight: 'bold',
    textDecorationLine: 'underline',
    marginVertical: 5,
  },
  button: {
    alignItems: 'center',
    justifyContent: 'center',
  },
});
