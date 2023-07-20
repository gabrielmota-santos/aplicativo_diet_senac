import {createNativeStackNavigator} from '@react-navigation/native-stack'

import SplashScreen from '../pages/SplashScreen'
import Login from '../pages/Login'
import Cadastro from '../pages/Cadastro'
import DadosPessoais from '../pages/DadosPessoais'
import Objetivo from '../pages/Objetivo'
import TelaPrincipal from '../pages/TelaPrincipal'
import PesquisarAlimentos from '../pages/PesquisarAlimentos'

const Stack = createNativeStackNavigator();

export default function Routes(){
    return(
        <Stack.Navigator>
            <Stack.Screen
            name="SplashScreen"
            component={SplashScreen}
            options={{ headerShown: false }}
            />

            <Stack.Screen
            name="Login"
            component={Login}
            options={{ headerShown: false }}
            
            />

            <Stack.Screen
            name="Cadastro"
            component={Cadastro}
            options={{ headerShown: false }}
            />

            <Stack.Screen
            name="DadosPessoais"
            component={DadosPessoais}
            options={{ headerShown: false }}
            />

            <Stack.Screen
            name="Objetivo"
            component={Objetivo}
            options={{ headerShown: false }}
            />

            <Stack.Screen
            name="TelaPrincipal"
            component={TelaPrincipal}
            options={{ headerShown: false }}
            />

            <Stack.Screen
            name="PesquisarAlimentos"
            component={PesquisarAlimentos}
            options={{ headerShown: false }}
            />

        </Stack.Navigator>
    )
}
