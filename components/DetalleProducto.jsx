import React, { useEffect, useState } from 'react'
import {Modal ,View, Text, Button, Box, Image, Center, Circle} from 'native-base'
import { StyleSheet } from 'react-native'
import CantidadProducto from './CantidadProducto'


const DetalleProducto = ({modalVisible,setModalVisible, prodSelect }) => {

    const[cant, setCant]=useState(1)
    const[precio, setPrecio]=useState(50)
    const[precioTotal, setPrecioTotal]=useState(50)

    useEffect(() => {
        setPrecioTotal(precio * cant)
    }, [cant])

    return (
            <Modal isOpen={modalVisible} onClose={setModalVisible} size='full' animationType="slide"    >
            <Modal.Content  style={style.contentModal} bg='#10212D'  padding='8'  marginBottom='0' marginTop='auto' height='80%' position='relative' zIndex='-99999999999' >
            
            <Box  style={style.titleModal}> <Text color='#879096' fontSize='xl' fontFamily='Roboto_400Regular' > Producto  {prodSelect.nombre} </Text>  </Box>
            <Modal.Body bg='#081620' padding='10' >
                <Center marginBottom='6'>
                    <Image style={style.image} source = {{uri : prodSelect.imagenProducto}} />
                </Center>


                <Text fontSize='md' fontFamily='Roboto_300Light' color='#8A9095' >{prodSelect.nombre}</Text>
                <Box flexDirection='row' justifyContent='space-between' marginTop='2'>
                    <Text fontSize='2xl'  fontFamily='Roboto_700Bold'color='#fff'>{prodSelect.nombre}</Text>
                    <CantidadProducto cant={cant} setCant={setCant} />
                </Box>

                
                

                <Box width='100%' marginTop='2'>
                    <Box maxWidth='70%' width='30%' justifyContent='space-between' flexDirection='row'>
                        <Circle bg='#000' width='7' height='7'></Circle>
                        <Circle bg='#fff'width='7' height='7'></Circle>
                        <Circle bg='#AD131C'width='7' height='7'></Circle>
                    </Box>
                </Box>


                <Box width='100%' marginTop='5'>
                    <Text fontSize='md' fontFamily='Roboto_300Light' color='#8A9095'>Precio Total</Text>
                    <Text  fontSize='3xl' fontFamily='Roboto_700Bold' color='#0DC683'>S/{precioTotal}</Text>
                </Box>

            </Modal.Body>
            <Modal.Footer >
                
                    <Button   bg='#FF4C29'width='100%' onPress={() => setModalVisible(!modalVisible)}  >
                        <Text fontSize='md' fontFamily='Roboto_400Regular' color='#fff'> Carrito </Text>
                    </Button>
                
                
            </Modal.Footer>
            </Modal.Content>
        </Modal>
    )
}

export default DetalleProducto

const style = StyleSheet.create({
    contentModal:{
        borderTopRightRadius: 30,
        borderTopLeftRadius: 30,
       
    },
    modalBody:{
        padding: 10
    },
    titleModal:{
        color: '#fff'
    },
    image:{
        width: 150,
        height: 150,
        resizeMode: 'contain'
    },
        
})
