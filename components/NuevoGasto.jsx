import { View ,Modal , Button, Text, Input, Box, FormControl } from 'native-base'
import React, { useContext, useState } from 'react'
import {HiDatabase, HiHashtag } from "react-icons/hi";
import { useFormik } from 'formik';

const NuevoGasto = ({modalVisible,setModalVisible, postNewGasto }) => {

  

    const {values, isSubmitting , setFieldValue, handleSubmit} = useFormik({
        initialValues:{
            costo: 0,
            nombre : '',
        },
        onSubmit: values=>{
            console.log(values)
            setModalVisible(!modalVisible);
            postNewGasto(values)
        }
    })

    const changeGasto=(e)=>{
        
    }


    return (
        <Modal isOpen={modalVisible} onClose={setModalVisible} size='full' animationType="slide"    >
        <Modal.Content  bg='#10212D'  padding='8'  marginBottom='auto' marginTop='auto' height='60%' position='relative' borderRadius='15' >
         
        <Modal.Header color='#fff'  >Nuevo Gasto</Modal.Header>
          <Modal.Body bg='#081620' padding='10' borderRadius='10' >
          <FormControl>
            <Box w="100%" mb='15'>
                    <Text mb='2'  >Nombre del producto</Text>
                    <Input  
                        value={values.nombre}
                        onChangeText={text=>setFieldValue('nombre', text)}
                        InputLeftElement={<HiHashtag size={25} color='#2A363E' style={{marginLeft: '10'}} />}
                        _focus="#000"
                      
                        borderColor='#2A363E'
                        placeholder="Escriba su producto..." // mx={4}
                        color='#2A363E'  
                    />
                </Box>

                <Box w="100%">
                <Text  mb='2' >Costo del producto</Text>
                
                    <Input
                        value={values.costo}
                        onChangeText={text=>setFieldValue('costo', text)}
                        type='number'
                        InputLeftElement={  <HiDatabase size={25} color='#2A363E'  style={{marginLeft: '10'}} />}
                       
                        borderColor='#2A363E'
                        _focus="#081620"
                        placeholder="Escriba su Costo..." // mx={4}
                        color='#2A363E'
                    
                    />
                </Box>
             
          </FormControl>
           
          </Modal.Body>
          <Modal.Footer >
            
                <Button   bg='#FF4C29'width='100%' onPress={() => { handleSubmit()}}  >
                    <Text fontSize='md' fontFamily='Roboto_400Regular' color='#fff' > Costear </Text>
                </Button>
            
            
          </Modal.Footer>
        </Modal.Content>
      </Modal>
    )
}

export default NuevoGasto
