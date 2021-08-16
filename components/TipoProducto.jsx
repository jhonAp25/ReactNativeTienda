import React ,{useState} from 'react'
import { Image } from 'react-native'
import { View, StyleSheet , FlatList} from 'react-native'
import short from '../assets/Img/short.png'
import buzo from '../assets/Img/buzodepor.png'
import casaca from '../assets/Img/casaca.png'
import conjunto from '../assets/Img/conjuto.png'
import polo from '../assets/Img/polodepor.png'
import { TouchableOpacity } from 'react-native'
import { Box, Center , Flex, Link, ScrollView, Text} from 'native-base'


const TipoProducto = ({ navigation}) => {


    const [data, setData]= useState([
        { name : 'jhon' , img : short ,  id : '1'},
        { name : 'jose' , img : buzo ,   id : '2'},
        { name : 'Carlos',img : casaca , id : '3'},
        { name : 'Alex',  img : conjunto,id : '4'},
        { name : 'Jasson',img : polo ,   id : '5'}
      ])


    const renderItem = ({ item  }) => (
        <Link onPress={()=> navigation.push('ventaFinal' , 'hola') }>
            <Flex direction='column' alignItems='center' justifyContent='space-around' bg="#10202D" style={style.item}  >
                <Image style={style.image} source = { {uri : item.img}}  />
                <Text fontFamily='roboto_400Regular' color='#F3F2C9' textTransform='capitalize' fontSize='sm' > {item.name} </Text>
            </Flex>
        </Link>
    );

   
    return (
        <ScrollView showsHorizontalScrollIndicator={false}
                    maxHeight='80%' 
                    style={style.content}  >

            <Text color='#838A8F' textTransform='uppercase' style={{fontWeight: 'bold' , fontSize : 15 ,marginTop: 20}}>Short </Text>
            <FlatList
                style={{flex : 1, maxHeight: 195}}
                showsHorizontalScrollIndicator={false}
                horizontal={true}
                data={data}
                renderItem={renderItem}
                keyExtractor={item => item.id}
            />
            
            <Text  color='#838A8F'textTransform='uppercase' style={{fontWeight: 'bold' , fontSize : 15,marginTop: 20 }}>Buzo </Text>
            <FlatList
                style={{flex : 1, maxHeight: 195}}
                showsHorizontalScrollIndicator={false}
                horizontal={true}
                data={data}
                renderItem={renderItem}
                keyExtractor={item => item.id}
            />
            <Text color='#838A8F' textTransform='uppercase' style={{fontWeight: 'bold' , fontSize : 15 ,marginTop: 20}}>Casaca </Text>
            <FlatList
                style={{flex : 1, maxHeight: 195}}
                showsHorizontalScrollIndicator={false}
                horizontal={true}
                data={data}
                renderItem={renderItem}
                keyExtractor={item => item.id}
            />

            <Text color='#838A8F' textTransform='uppercase' style={{fontWeight: 'bold' , fontSize : 15 ,marginTop: 20}}>Casaca </Text>
            <FlatList
                style={{flex : 1, maxHeight: 195}}
                showsHorizontalScrollIndicator={false}
                horizontal={true}
                data={data}
                renderItem={renderItem}
                keyExtractor={item => item.id}
            />
        </ScrollView>
    )
}

export default TipoProducto

const style = StyleSheet.create({
    content : {
        marginLeft: 30
        
    },
    image:{
        width: 100,
        height: 100
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
        }
        

})