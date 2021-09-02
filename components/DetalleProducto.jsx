import React, { useContext, useEffect, useState } from 'react'
import {Modal ,FormControl, Text, Button, Box, Image, Center, Circle, Select, Radio} from 'native-base'
import { StyleSheet } from 'react-native'
import CantidadProducto from './CantidadProducto'
import { ProductoContext } from '../context/ProductoContext'
import {  Field, useFormik , Form } from 'formik'
import { PedidoContext } from '../context/PedidoContext'


const DetalleProducto = ({modalVisible,setModalVisible, modelo,   }) => {

    let{precioMax,color, talla,stock,  getListaPorModeloAndTalla, getListaPorModeloAndColor}=useContext(ProductoContext)
    let{addCarrito}=useContext(PedidoContext)

    /********************** S T A T E ************************ */
    const[cant, setCant]=useState(1)
    const[precioTotal, setPrecioTotal]=useState(precioMax)
    const[productoSelect, setProductoSelct]=useState([{
      }])


    

   

    const selectColor =(id)=>{     
        getListaPorModeloAndColor(modelo.id, id)     
    }

    const selectTalla =(id)=>{ 
        getListaPorModeloAndTalla(modelo.id,id)
    }
    const llenadoProd=()=>{
        setProductoSelct([...productoSelect,{
            cantidad: cant,
         //   pedido: { id: 0},
            producto: {id: 1 },
            subTotal: precioTotal
          }])


     setModalVisible(!modalVisible)
    }


    const selectProducto=()=>{
      llenadoProd()

        addCarrito({
            cantidad: cant,
         //   pedido: { id: 0},
            producto: {id: 1 },
            subTotal: precioTotal
          })

     
    }
    



    useEffect(() => {
       
        setPrecioTotal(precioMax * cant)
    }, [cant])

    return (
            <Modal isOpen={modalVisible} onClose={setModalVisible} size='full' animationType="slide"    >
            <Modal.Content  style={style.contentModal} bg='#10212D'  padding='7'  marginBottom='0' marginTop='auto' height='80%' position='relative' zIndex='-99999999999' >
            
            <Box  style={style.titleModal}> <Text color='#879096' fontSize='xl' fontFamily='Roboto_400Regular' > Producto  {modelo.nombre} </Text>  </Box>
            <Modal.Body backgroundColor='#081620'  padding='10'  >
                <FormControl>
                <Center marginBottom='6'>
                    {modelo.length===0
                    ? <Text fontSize='4xl'  fontFamily='Roboto_400Regular'  > Producto Agotado </Text> 
                    : <Image style={style.image} source = {{uri : modelo.imagenProducto}} alt='ropa-modelo' />}
                </Center>


                <Text fontSize='md' fontFamily='Roboto_300Light' color='#8A9095' >{modelo.nombre}</Text>
                <Box flexDirection='row' justifyContent='space-between' marginTop='2'>
                    <Text fontSize='2xl'  fontFamily='Roboto_700Bold'color='#fff'>{modelo.nombre}</Text>
                    <CantidadProducto cant={cant} setCant={setCant} stock={stock} />
                </Box>

                
                

                <Box width='100%' marginTop='2'  flexDirection='row' alignItems='center' marginTop='4' >
                    <Box  flex='4'  width='30%' justifyContent='flex-start' flexDirection='row'>
                        <Radio.Group
                        
                            flexDirection='row'
                            onChange={(value)=>selectColor(value)}
                        >
                        {color.map(c=>(
                            <>
                                <Circle  value={c.id}  my={1} bg={c.codigo} color={c.codigo} padding={2}    marginRight={5} >
                                    <Radio value={c.id} name={c.nombre}  colorScheme={c.codigo} size='sm' ></Radio>
                                </Circle>
                            </>

                        ))}

                        </Radio.Group>
                       
                        
                    </Box>

                    <Box  flex='1'   >
                        <Select width='100%' 
                                color='#fff' 
                                marginTop='1'
                                placeholder="Talla" 
                                
                                onValueChange={(itemValue)=>selectTalla(itemValue)}
                                 >
                            {talla.map(t=>(
                                <Select.Item bgColor='Scrollbar' label={t.descripcion} value={`${t.id}`} />
                            ))}
                           
                                
                        </Select>
                    </Box>     
                </Box>


                <Box  width='100%'>
                    <Box marginTop='3'>
                        <Text fontSize='md' fontFamily='Roboto_300Light' color='#8A9095'>Precio Total</Text>
                        <Text  fontSize='3xl' fontFamily='Roboto_700Bold' color='#0DC683'  >S/{precioTotal > 0 ? precioTotal :precioMax }</Text>
                    </Box>
                   
                </Box>
               
                </FormControl>
            </Modal.Body>
            <Modal.Footer >
                
                    <Button   bg='#FF4C29'width='100%' onPress={() => selectProducto()}  >
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
