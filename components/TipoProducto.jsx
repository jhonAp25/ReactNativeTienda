import React ,{useEffect, useState} from 'react'

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


const TipoProducto = ({ navigation}) => {

    const [tipoProd ,setTipoProd] =useState([])
    const [modelo, setModelo] = useState([])

    const [modalVisible, setModalVisible] = useState(false)
    const [prodSelect, setpProdSelect] = useState([])
    
    
  
    const handleSizeClick = (producto ) => {
        
      setModalVisible(!modalVisible)
      setpProdSelect(producto )
    }



 
    const getModelo =()=>{
            return   axios.get(`http://192.168.100.20:8080/tipoProducto/listaModelo/3`).then(({data})=> {setModelo(data) })
         }  

    useEffect(() => {

        axios.get('http://192.168.100.20:8080/tipoProducto/lista').then(({data})=> { setTipoProd(data) })
       
    
            console.log( getModelo())
     
        
    }, []);


    const [data, setData]= useState([
        { nombre : 'jhon' , imagenProducto : short ,  id : '1'},
        { nombre : 'jose' , imagenProducto : buzo ,   id : '2'},
        { nombre : 'Carlos',imagenProducto : casaca , id : '3'},
        { nombre : 'Alex',  imagenProducto : conjunto,id : '4'},
        { nombre : 'Jasson',imagenProducto : polo ,   id : '5'}
      ])


    const renderItem = ({ item }) => (
        <Link onPress={() => handleSizeClick(item)} >
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
        
        <DetalleProducto prodSelect={prodSelect} modalVisible={modalVisible} setModalVisible={setModalVisible}  />

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