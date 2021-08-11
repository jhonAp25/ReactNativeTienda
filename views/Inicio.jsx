import React from 'react'
import { Text, View, Image ,StyleSheet} from 'react-native';
import { TouchableOpacity } from 'react-native';
import Header from '../components/Header';
import ListadoVentas from '../components/ListadoVentas';
import { SafeAreaView } from 'react-native';
import { Icon } from 'react-native-elements/dist/icons/Icon';
import { Badge } from 'react-native-elements/dist/badge/Badge';




   //<TouchableOpacity style={style.btnNuevaVenta} >  <Text style={{color: '#fff' ,  fontSize : 15, letterSpacing: 2 }}>Nueva Venta</Text> </TouchableOpacity>
const Inicio = ({navigation}) => {
    return (

        <SafeAreaView style={{ backgroundColor: '#081620' }}>
             <Header  />
        <View style={style.content}>
           
         
            <View style={style.title} >
                <Text style={{fontWeight: 'bold' , fontSize : 20 , marginLeft : 14 , color: '#fff'}}> Ventas</Text>
                
            </View>
          <View style={style.resumen} >
              <View style={{width: '80%'}}>
                <Text style={{color :'#9BB9BA', marginBottom: 10}} >Total de Ventas <View style={style.badge}>18</View> </Text>
                <Text style={{fontWeight: 'bold' , fontSize : 25 , marginRight : 14 , color :'#fff' }}> S/ 500</Text>
              </View>

              <View style={{width : '20%' , justifyContent:'center', alignItems: 'center'}}>
                <Icon name='home' color='#F3F2C9' size={40} />
              </View>
                
           </View>


            <View style={{flex: 1 }} >
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
        backgroundColor : '#10212D' ,
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
    icono : {
        display : 'flex',
        flex: 1,
    },
    title :{
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
    btnNuevaVenta:{
        fontFamily: 'Zilla Slab',
        display: 'flex',
        flexDirection: 'row',
        flex: 1,
        padding: 15,
        borderRadius: 10,
        backgroundColor: '#356BF5',
        justifyContent: 'center'
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

