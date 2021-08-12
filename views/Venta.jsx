import React from 'react'
import { View ,Text , StyleSheet} from 'react-native'
import TipoProducto from '../components/TipoProducto'



const Venta = ({navigation}) => {
    return (
        <View style={style.content}>
            
            <TipoProducto navigation={navigation} />
        </View>
    )
}


export default Venta

const style = StyleSheet.create({
    content:{
        backgroundColor: '#081620',
       
        padding: 10
    }
})