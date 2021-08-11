import React ,{useState} from 'react'
import { Image } from 'react-native'
import { View, Text, StyleSheet , FlatList} from 'react-native'
import short from '../assets/Img/short.png'
import buzo from '../assets/Img/buzodepor.png'
import casaca from '../assets/Img/casaca.png'
import conjunto from '../assets/Img/conjuto.png'
import polo from '../assets/Img/polodepor.png'
import { TouchableOpacity } from 'react-native'


const TipoProducto = ({navigation}) => {


    const [data, setData]= useState([
        { name : 'jhon' , img : short ,  id : '1'},
        { name : 'jose' , img : buzo ,   id : '2'},
        { name : 'Carlos',img : casaca , id : '3'},
        { name : 'Alex',  img : conjunto,id : '4'},
        { name : 'Jasson',img : polo ,   id : '5'}
      ])


    const renderItem = ({ item }) => (
        <TouchableOpacity style={style.item} onPress={()=>navigation.push('ventaFinal')}  >
            <Image style={style.image} source = { {uri : item.img}}  />
            <Text style={style.nombre}> {item.name} </Text>
        </TouchableOpacity>
    );

   
    return (
        <View style={style.content} >
            <Text  style={{fontWeight: 'bold' , fontSize : 20 , marginLeft : 14}}>Tipo de Producto </Text>
            <FlatList
                style={{flex : 1}}
                numColumns={2}
                data={data}
                renderItem={renderItem}
                keyExtractor={item => item.id}
            />
            
        </View>
    )
}

export default TipoProducto

const style = StyleSheet.create({
    content : {
        display : 'flex',
        
        justifyContent: 'center',
        
        height: '100vh'
    },
    image:{
        width: 160,
        height: 160
    },
    item:{
        flex:1,
        justifyContent : 'center',
        alignItems: 'center',
        position: 'relative',
        marginHorizontal: 6,
        marginTop: 15,
        borderRadius: 10,
        shadowColor: "#000",
        shadowOffset: {
            width: 0,
            height: 3,
        },
        shadowOpacity: 0.43,
        shadowRadius: 9.51,

        elevation: 15,

        },
    nombre:{
        position: 'absolute',
        backgroundColor: '#244a8a',
        width : '100%',
        padding: 10,
        textAlign: 'center',
        color: '#fff',
        border: '4px solid #fff ',
        textTransform: 'uppercase'
        }
        

})