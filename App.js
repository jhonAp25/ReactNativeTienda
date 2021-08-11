import React from 'react'; 
import { Text, View , StyleSheet, TouchableOpacity} from 'react-native';
import { SafeAreaProvider, SafeAreaView } from 'react-native-safe-area-context';
import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { createStackNavigator } from '@react-navigation/stack';
import Inicio from './views/Inicio';
import Gastos from './views/Gastos';
import Perfil from './views/Perfil';
import TabCustom from './components/Tab'
import { Icon } from 'react-native-elements'

import Venta from './views/Venta';
import DetalleVenta from './views/DetalleVenta';
import VentaFinal from './views/VentaFinal';

const Stack = createStackNavigator();


const Tab = createBottomTabNavigator();

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
   <SafeAreaProvider>

 

    <NavigationContainer>
      
   
    <Tab.Navigator tabBar={(props) => <TabCustom {...props} />}>
        <Tab.Screen name="Ventas" component={Inicio} options={{header: ()=> null}}  />
        <Tab.Screen name="Gastos" component={Gastos} options={{header: ()=> null}}   />
        <Tab.Screen name="Gastdos" component={Gastos}options={{header: ()=> null}}   />
        <Tab.Screen name="Perfil" component={Perfil} options={{header: ()=> null}}   />
      </Tab.Navigator>
    </NavigationContainer>
    </SafeAreaProvider>
    </>
  );
}






