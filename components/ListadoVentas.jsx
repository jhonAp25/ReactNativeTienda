import React from 'react'
import { ScrollView } from 'react-native';
import { Text, View, Image ,StyleSheet} from 'react-native';
import { TouchableOpacity } from 'react-native';

const ListadoVentas = ({navigation}) => {
    return (
        <>
           
          
            

           
            <ScrollView style={style.content}  >
                <Text style={{color: '#879096' , fontSize: '1.2rem', fontFamily : 'Roboto_400Regular' }}>Listado de Ventas </Text>
                <TouchableOpacity style={style.item} onPress={()=>navigation.push('detalleVenta')} >
                    <Text style={{fontSize: '1.1rem', flex: 1, color: '#fff',}} >1</Text>
                    <Text style={{fontSize: '1.09rem',color: '#fff' , flex: 2,fontFamily : 'Roboto_100Thin'}}>Nueva Venta</Text>
                    <Text style={{fontSize: '1.1rem',color: '#F3F2C9' , fontWeight: '400' , flex: 3, textAlign :'right', fontFamily : 'Roboto_700Bold'}}>S/. 45</Text>
                </TouchableOpacity>


                <TouchableOpacity style={style.item} >
                    <Text style={{fontSize: '1.1rem', flex: 1,color: '#fff',}} >2</Text>
                    <Text style={{fontSize: '1.1rem',color: '#fff' , flex: 2,fontFamily : 'Roboto_100Thin'}}>Nueva Venta</Text>
                    <Text style={{fontSize: '1.1rem',color: '#F3F2C9' , flex: 3, textAlign :'right', fontFamily : 'Roboto_700Bold'}}>S/. 45</Text>
                </TouchableOpacity>

            
                <TouchableOpacity style={style.item} >
                    <Text style={{fontSize: '1.1rem', flex: 1,color: '#fff',}} >2</Text>
                    <Text style={{fontSize: '1.1rem',color: '#fff' , flex: 2, fontFamily : 'Roboto_100Thin',}}>Nueva Venta</Text>
                    <Text style={{fontSize: '1.1rem',color: '#F3F2C9' ,  flex: 3, textAlign :'right', fontFamily : 'Roboto_700Bold',}}>S/. 45</Text>
                </TouchableOpacity>
            
            </ScrollView>

        </>
    )
}

export default ListadoVentas


const style = StyleSheet.create({
    
   
  
    content:{
        flex: 1,
        margin: 'auto',
        marginTop: '5%',
        width : '100%',
        
    },
  
    item:{
        marginTop: 10,
        display: 'flex',
        color: '#fff',
        flexDirection: 'row',
       
        justifyContent: 'flex-end',
        borderRadius: 12,
        padding: 15
    }
    
})