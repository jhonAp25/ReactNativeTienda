import React from 'react'
import { View ,Text , StyleSheet} from 'react-native'
import TipoProducto from '../components/TipoProducto'
import { ProductoProvider } from '../context/ProductoContext'



const Venta = ({navigation}) => {
    return (
        <ProductoProvider>

      
        <View style={style.content}>
            
            <TipoProducto navigation={navigation}  hola='hola' />
        </View>
        </ProductoProvider>
    )
}


export default Venta

const style = StyleSheet.create({
    content:{
        backgroundColor: '#081620',
        height: '100vh',
        padding: 10
    }
})