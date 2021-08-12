import React from 'react'; 
import {NativeBaseProvider, extendTheme} from 'native-base';
import { SafeAreaProvider } from 'react-native-safe-area-context';
import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { createStackNavigator } from '@react-navigation/stack';
import Inicio from './views/Inicio';
import Gastos from './views/Gastos';
import Perfil from './views/Perfil';
import TabCustom from './components/Tab'


import Venta from './views/Venta';
import DetalleVenta from './views/DetalleVenta';
import VentaFinal from './views/VentaFinal';

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
      <Stack.Screen name='venta' component={Venta} options={{header: () => null}}  />
      <Stack.Screen name='ventaFinal' component={VentaFinal} options={{header: () => null}}  />
      <Stack.Screen name='detalleVenta' component={DetalleVenta} />
    </Stack.Navigator>
  )
           
          

}


export default function App() {
 

  return (
    <>

  <NativeBaseProvider  theme={theme}>
    <SafeAreaProvider>
      <NavigationContainer>
        <Tab.Navigator tabBar={(props) => <TabCustom {...props} />}>
            <Tab.Screen name="Ventas"  component={Venta}  />
            <Tab.Screen name="Gastos"  component={Gastos} options={{header: ()=> null}}   />
            <Tab.Screen name="venta" component={Venta} options={{header: ()=> null}}   />
            <Tab.Screen name="Perfil"  component={Perfil} options={{header: ()=> null}}   />
          </Tab.Navigator>
        </NavigationContainer>
    </SafeAreaProvider>
  </NativeBaseProvider>
    </>
  );
}






