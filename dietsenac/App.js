

import React from 'react';
import { StatusBar } from 'react-native';

import { NavigationContainer } from '@react-navigation/native';
import Routes from './src/routes';
import Login from './src/pages/Login/index';


export default function App() {
  return (
    <NavigationContainer>
      <StatusBar backgroundColor="#027154" barStyle="light-content" />
      <Routes />
    </NavigationContainer>
  );
}
