import React from 'react'
import { Text, View, Image ,StyleSheet} from 'react-native';
import { TouchableOpacity } from 'react-native';
import CardProfile from '../components/CardProfile';
import ListadoVentas from '../components/ListadoVentas';
import { SafeAreaView } from 'react-native';

import { Badge } from 'react-native-elements/dist/badge/Badge';
import { Icon } from 'native-base';
import { Ionicons, FontAwesome, MaterialIcons } from '@expo/vector-icons';
import { AiFillFilePdf } from "react-icons/ai";
import ResumenVenta from '../components/ResumenVenta';



   //<TouchableOpacity style={style.btnNuevaVenta} >  <Text style={{color: '#fff' ,  fontSize : 15, letterSpacing: 2 }}>Nueva Venta</Text> </TouchableOpacity>
const Inicio = ({navigation}) => {

   
        return (

            <SafeAreaView style={{ backgroundColor: '#081620' }}>
                <CardProfile  />
            <View style={style.content}>
            
            
                <View style={style.title} >
                    <Text style={{ fontSize : 20 , color: '#fff' , fontFamily: 'Roboto_700Bold', marginLeft: '4%' }}> Ventas</Text>
                    
                </View>
                <View style={style.resumen} >
                    <ResumenVenta/>
                </View>


                <View style={{flex: 1  ,width: '90%' , margin: 'auto' }} >
                    <ListadoVentas navigation={navigation}  />
            
                </View>
            
            </View>
        
        
            </SafeAreaView>
    )
}

export default Inicio


const style = StyleSheet.create({
    
    content:{
        borderTopRightRadius: 50,
        borderTopLeftRadius: 50,
        padding: 14,
        backgroundColor: '#10212D',
        fontFamily: 'Roboto_400Regular',
        height: '100vh'
    },
    resumen:{
        flexDirection: 'row',
        margin : 'auto',    
        padding: '5%',
        backgroundColor: '#055052',
        marginTop: '4%',
        borderRadius : 10,
        width : '90%'
    },
  
  
    
    title :{
        fontFamily: 'Roboto_400Regular',
        marginTop: '3%',
        display: 'flex',
        flexDirection : 'row',
        justifyContent : 'space-between'
    },
    
   
    
})

