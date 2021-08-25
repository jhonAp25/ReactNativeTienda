import React,{useContext, useEffect, useState} from 'react'
import { View , Text, Button, Modal } from 'native-base';
import ResumenGasto from '../components/ResumenGasto';
import {  Image ,StyleSheet} from 'react-native';
import CardProfile from '../components/CardProfile';
import ListadoGastos from '../components/ListadoGastos';
import { SafeAreaView } from 'react-native';
import { GastoContext } from '../context/GastoContext';
import NuevoGasto from '../components/NuevoGasto';


const Gastos = () => {

  let {total, gasto , setTotal, getGastosHoy, postNewGasto} = useContext(GastoContext)

  const [modalVisible, setModalVisible] = useState(false)


  useEffect(() => {
    getGastosHoy()
  }, [])

 
    return (

      <SafeAreaView style={{ backgroundColor: '#081620' }}>
      <CardProfile  />
        <View style={style.content}>
        <Text style={{ fontSize : 20 , color: '#fff' , fontFamily: 'Roboto_700Bold', marginLeft: '4%' , marginTop:13}}> Gastos</Text>
  
        
          <View style={style.resumen} >
              <ResumenGasto  total={total} gasto={gasto} />
          </View>


          <View style={{flex: 1  ,width: '90%' , margin: 'auto' }} >
          <Text style={{color: '#879096' , fontSize: '1.2rem', fontFamily : 'Roboto_400Regular' , marginTop:15}}>Listado de Gastos </Text>

              <ListadoGastos setTotal={setTotal} gasto={gasto}  getGastosHoy={getGastosHoy}  />
      
          </View>

          <View style={{flex: 1  ,width: '90%' , margin: 'auto' ,marginTop: '12px'}} >
             <Button variant="outline" borderColor="#FF4C29" _text={{ color: "#FF4C29", }} onPress={() => setModalVisible(!modalVisible)} > 
               Nuevo Gasto
             </Button>

             <NuevoGasto  modalVisible={modalVisible} setModalVisible={setModalVisible} postNewGasto={postNewGasto} />
      
          </View>
  
        </View>


      </SafeAreaView>
    )   
}

export default Gastos


const style = StyleSheet.create({
  resumen:{
    flexDirection: 'row',
    margin : 'auto',    
    padding: '5%',
    backgroundColor: '#641A1E',
    marginTop: '4%',
    borderRadius : 10,
    width : '90%'
    }, 

    content:{
      borderTopRightRadius: 50,
      borderTopLeftRadius: 50,
      padding: 14,
      backgroundColor: '#10212D',
      fontFamily: 'Roboto_400Regular',
      height: '100vh'
    },



    title :{
      fontFamily: 'Roboto_400Regular',
      marginTop: '3%',
      display: 'flex',
      flexDirection : 'row',
      justifyContent : 'space-between'
    },


})