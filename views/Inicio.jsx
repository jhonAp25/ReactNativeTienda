import React from 'react'
import { Text, View, Image ,StyleSheet} from 'react-native';
import { TouchableOpacity } from 'react-native';
import CardProfile from '../components/CardProfile';
import ListadoVentas from '../components/ListadoVentas';
import { SafeAreaView } from 'react-native';

import { Badge } from 'react-native-elements/dist/badge/Badge';
import { Icon } from 'native-base';
import { Ionicons, FontAwesome, MaterialIcons } from '@expo/vector-icons';



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
                <View style={{width: '80%'}}>
                    <Text style={{color :'#9BB9BA', marginBottom: 10,fontFamily: 'Roboto_400Regular'}} >Total de Ventas <View style={style.badge}>18</View> </Text>
                    <Text style={{fontWeight: 'bold' , fontSize : 25 , marginRight : 14 , color :'#fff' }}> S/ 500</Text>
                </View>

                <View style={{width : '20%' , justifyContent:'center', alignItems: 'center'}}>
                        <Image  source={require('../assets/Img/point-of-sale.png')}
                                resizeMode='contain'
                                style={{width: 35, height: 35 , tintColor: '#F3F2C9'}} />
                </View>
                    
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
    avatar:{
        height: '60px' ,
        width : '60px' ,
        borderRadius : 30,
        marginLeft: 10,
        marginRight: 10,
        flex: 1
    },
    usuario : {
        display : 'flex',
        flex: 5,
        fontFamily: 'Zilla Slab',
        marginLeft: 20,
    },
    
    title :{
        fontFamily: 'Roboto_400Regular',
        marginTop: '3%',
        display: 'flex',
        flexDirection : 'row',
        justifyContent : 'space-between'
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
    
    item:{
        marginBottom: 10,
        display: 'flex',
        fontFamily: 'Zilla Slab',
        flexDirection: 'row',
        backgroundColor: '#F4F4F4',
        justifyContent: 'space-between',
        borderRadius: 12,
        padding: 15
    },
    badge:{
  
        width:  28,
        height: 28,
        justifyContent: 'center',
        alignItems: 'center',
        borderRadius: 14,
        backgroundColor: '#050F16'
    }
    
})

