import React, { useContext } from 'react'; 
import {NativeBaseProvider, extendTheme, View, Circle, Text} from 'native-base';
import { SafeAreaProvider } from 'react-native-safe-area-context';
import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { createStackNavigator } from '@react-navigation/stack';
import Inicio from './views/Inicio';
import Gastos from './views/Gastos';
import Header from './components/Header'
import Perfil from './views/Perfil';
import TabCustom from './components/Tab'


import Venta from './views/Venta';
import DetalleVenta from './views/DetalleVenta';
import VentaFinal from './views/VentaFinal';
import { Icon } from 'react-native-elements/dist/icons/Icon';
import { StyleSheet } from 'react-native';
import { useFonts } from '@expo-google-fonts/roboto';
import { Roboto_400Regular , Roboto_700Bold, Roboto_100Thin, Roboto_300Light }  from '@expo-google-fonts/roboto';
import {GastoProvider} from './context/GastoContext'
import { PedidoContext, PedidoProvider } from './context/PedidoContext';



const Stack = createStackNavigator();
const Tab = createBottomTabNavigator();

const newColorTheme = {
  brand: {
    900: '#8287af',
    800: '#7c83db',
    700: '#b3bef6',
  },
};
const theme = extendTheme({ colors: newColorTheme });



const ScreenInicio=()=>{
 
  return(  
    <Stack.Navigator>
      <Stack.Screen name='inicio' component={Inicio}  options={{header: () => null}}  />
      <Stack.Screen name='ventaFinal' component={VentaFinal} options={{header: () => null}}  />
      <Stack.Screen name='detalleVenta' component={DetalleVenta} />
    </Stack.Navigator>
  )
}

const ScreenVenta=()=>{
 
  return(  
    <Stack.Navigator>
      <Stack.Screen name='Venta' component={Venta}  options={{header: () => null}}  />
     
      <Stack.Screen name='detalleVenta' component={DetalleVenta} />
    </Stack.Navigator>
  )
}


export default function App() {





 
  let [fontsLoaded] = useFonts({Roboto_400Regular , Roboto_700Bold, Roboto_100Thin , Roboto_300Light});

  if (!fontsLoaded) {
      return <NativeBaseProvider  theme={theme}> </NativeBaseProvider>
  }else{

  return (
  <GastoProvider>
  <PedidoProvider>

  <NativeBaseProvider  theme={theme}>
    <SafeAreaProvider>
      <NavigationContainer>
        <Tab.Navigator tabBarOptions={style.container} tabBar={props => <TabCustom {...props} />} >
            <Tab.Screen name="Inicio"  component={ScreenInicio} options={{header: ()=> null}}  />
            <Tab.Screen name="Gastos"  component={Gastos} options={{header: ()=> null}}    />
            <Tab.Screen name="Perfil"  component={Perfil} options={{header: ()=> <Header name='Perfil' />  }}   />
            <Tab.Screen name="Venta" component={ScreenVenta} options={{
                                                                header: ()=> <Header name='Nueva Venta'    />
                                                                }}   />
            
          </Tab.Navigator>
        </NavigationContainer>
    </SafeAreaProvider>
  </NativeBaseProvider>
  </PedidoProvider>
  </GastoProvider>
  );}
}

const style = StyleSheet.create({
  container:{
      position: 'relative',
      zIndex: 999999
  }
}) 






