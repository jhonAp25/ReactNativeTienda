import { View ,Text,} from 'native-base'
import React, { useEffect, useState } from 'react'
import { ScrollView } from 'react-native';
import {  StyleSheet} from 'react-native';
import { TouchableOpacity } from 'react-native';
import axios from 'axios';


const ListadoGastos = ({ setTotal, gasto, getGastosHoy}) => {
    


   
    return (
        <>
            <ScrollView style={style.content}  >

                {gasto.map(g=>(
                    <TouchableOpacity style={style.item}  >
                    <Text style={{fontSize: '1.1rem', flex: 1, color: '#fff',}} >{g.id}</Text>
                    <Text style={{fontSize: '1.09rem',color: '#fff' , flex: 2,fontFamily : 'Roboto_100Thin'}}>{g.nombre}</Text>
                    <Text style={{fontSize: '1.1rem',color: '#F3F2C9' , fontWeight: '400' , flex: 3, textAlign :'right', fontFamily : 'Roboto_700Bold'}}>S/.{g.costo}</Text>
                    </TouchableOpacity>
                ))}
               


            
            </ScrollView>
        </>
    )
}

export default ListadoGastos


const style = StyleSheet.create({
    
   
  
    content:{
        maxHeight: '80%',
        flex: 1,
        margin: 'auto',
       
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