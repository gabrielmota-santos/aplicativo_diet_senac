// SplashScreen é um componente que exibe a tela inicial com a animação da logo do        aplicativo.
// Após o término da animação, o componente navega para a tela de login.
// @return {JSX.Element} Retorna a estrutura de elementos que compõem a SplashScreen.


import React from 'react';
import { View, StyleSheet, Image, TouchableOpacity } from 'react-native';
import * as Animatable from 'react-native-animatable'
import { useNavigation } from '@react-navigation/native'

export default function SplashScreen() {
  const navigation = useNavigation();

 return (
    <View style={styles.container}>
      <View>
        <Animatable.Image
        animation="flipInY"
        style={{width: 484, height:395}}
        source={require('../../assets/LogoDietSenac.png')}
         
// A função onAnimationEnd é chamada quando a animação da imagem termina.
// Ela executa a navegação para a tela de login usando a função navigate do objeto navigation.

        onAnimationEnd={() => navigation.navigate('Login')}
        />
    </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container:{
    flex: 1,
    backgroundColor: '#027154',
    alignItems: 'center',
    justifyContent: 'center',
  }
})
