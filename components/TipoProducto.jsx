import React ,{useEffect, useState,useContext} from 'react'

import { StyleSheet , FlatList} from 'react-native'
import short from '../assets/Img/short.png'
import buzo from '../assets/Img/buzodepor.png'
import casaca from '../assets/Img/casaca.png'
import conjunto from '../assets/Img/conjuto.png'
import polo from '../assets/Img/polodepor.png'
import { TouchableOpacity } from 'react-native'
import {Image ,View, Flex, Link, ScrollView, Text, Button} from 'native-base'
import axios from 'axios'
import DetalleProducto from './DetalleProducto'
import { ProductoContext } from '../context/ProductoContext'


const TipoProducto = () => {

    let {tipoProd,  getListaPorModelo, modeloProd , producto} = useContext(ProductoContext)


    
    const [modelo, setModelo] = useState([])

    const [modalVisible, setModalVisible] = useState(false)
   // const [prodSelect, setProdSelect] = useState([])
    
    
  
    const handleSizeClick = (id) => {
        
      setModalVisible(!modalVisible)
     // setProdSelect(producto )
      getListaPorModelo(id)
      
    }





  


    const renderItem = ({ item }) => (
        <Link onPress={() => handleSizeClick(item.id)} >
            <Flex direction='column' alignItems='center' justifyContent='space-around' bg="#10202D" style={style.item}  >
                <Image style={style.image} source = {{uri : item.imagenProducto}}   />
                <Text fontFamily='roboto_400Regular' color='#F3F2C9' textTransform='capitalize' fontSize='sm' > {item.nombre} </Text>
            </Flex>
        </Link>
    );

   
    return (
        <>
       

        <ScrollView 
                    maxHeight='100%' 
                    style={style.content} >
        {tipoProd.map(t=>(
            <View 
             >
            <Text color='#838A8F' textTransform='uppercase' style={{fontWeight: 'bold' , fontSize : 15 ,marginTop: 30}}>{t.nombre} </Text>
                    <FlatList
                        style={{flex : 1, maxHeight: 195}}
                        showsHorizontalScrollIndicator={false}
                        horizontal={true}
                       
                        data={t.modelo}
                        renderItem={renderItem}
                        keyExtractor={item => item.id}
                    />
            </View>
        ))}
    
           
          
        </ScrollView>


        {/********************** M O D A L ******************************** */}
        
        <DetalleProducto modelo={modeloProd} modalVisible={modalVisible} setModalVisible={setModalVisible}  />   

        </>
    )
}

export default TipoProducto

const style = StyleSheet.create({
    content : {
        marginLeft: 30
        
    },
    image:{
        width: 100,
        height: 100,
        resizeMode: 'contain'
    },
    item:{
        width: 150,
        height: 150,
      
        position: 'relative',
        marginHorizontal: 6,
        marginTop: 10,
        borderRadius: 10,
        shadowColor: "#000",
        shadowOffset: {
            width: 0,
            height: 3,
        },
        shadowOpacity: 0.43,
        shadowRadius: 9.51,

      

        },
    nombre:{
        position: 'absolute',
        backgroundColor: '#244a8a',
        width : '100%',
        padding: 10,
        textAlign: 'center',
        color: '#fff',
       
        textTransform: 'uppercase'
        },
        titleModal:{
            color : '#879096',
          
        },
    
        

})