import { Box, Pressable, Text } from 'native-base';
import React, { useState } from 'react'
import { AiOutlinePlus , AiOutlineMinus} from "react-icons/ai";


const CantidadProducto = ({cant, setCant}) => {

  
    const [maxCant, setMaxCant]=useState(10)

    const aumentar=()=>{
        cant===maxCant 
        ? null //Implementar un alert para avisar el limite del stock
        :  setCant(cant + parseInt(1))
       
    }

    const decrementar=()=>{
       cant === 0 ? null : setCant(cant - parseInt(1))
 
    }

    return (
        <>
       

        <Box flexDirection='row' bg='#050F16' width='min-content' >
            <Pressable borderColor='#fff' borderWidth='2' borderRadius='7'padding='2' onPress={decrementar} >
                 <AiOutlineMinus   color='#fff'/>
            </Pressable>
            <Box padding='2' >
              <Text color='#fff' >{cant}</Text> 
            </Box>
            <Pressable  borderColor='#fff' borderWidth='2' borderRadius='7'padding='2'onPress={aumentar} >
                 <AiOutlinePlus color='#fff'/>
            </Pressable>

        </Box>
           
            

        </>
    )
}

export default CantidadProducto
