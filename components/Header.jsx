import { Pressable, Text, View , Circle} from 'native-base'
import React, { useContext } from 'react'
import {AiOutlineShoppingCart} from "react-icons/ai"; 
import { PedidoContext } from '../context/PedidoContext';


const Header = ({name}) => {

    let{carrito}=useContext(PedidoContext)
    return (
        <>
            <View bg='#081620' height='70px' justifyContent='space-between' alignItems='center' borderBottomWidth='1px' borderColor='#000' flexDirection='row' paddingRight={8} paddingLeft={4}  >
                <Text textAlign='center'  fontSize='20px' color='#fff' fontFamily='roboto_400Regular' fontSize='20' >{name}</Text>
                {name==='Nueva Venta'
                ? <Pressable position='relative'  >
                    <AiOutlineShoppingCart size={24} color='#fff'  />  
                    {carrito.length===0
                    ? null
                    :<Circle  size={5} bg='#CF4040'position='absolute' padding={1} top={-10} right={-10} justifyContent='center' alignItems='center'  > <Text fontSize='0.8em' color='#fff' fontFamily='Roboto_100Thin' >{carrito.length}</Text> </Circle>
                }
                </Pressable> 
                
                : null  }
            </View>  
        </>
    )
}

export default Header
