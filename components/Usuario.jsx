import React,{useState} from 'react'
import {Text, View , StyleSheet , Image, TouchableOpacity} from 'react-native'
import * as ImagePicker from 'expo-image-picker';
import * as Sharing from 'expo-sharing';


const Usuario = () => {
    const [selectedImage , setSelectedImage] = useState(null);

    const openImagePicker=async()=>{
  
      //Permisos de GALERIA
      let perimsionResul = await ImagePicker.requestMediaLibraryPermissionsAsync();
      //Validacion de si acpeto los permisos
      if(perimsionResul.granted === false){
        alert('permisio denegado');
        return;
      }
  
      const pickerResult = await ImagePicker.launchImageLibraryAsync();
      //Validacion de cancelacion de seleccionde imagen
      if(pickerResult.cancelled === true){
        return;
      }
      setSelectedImage({localUri : pickerResult.uri});
    }
  
    const openShared = async()=>{
      
        if( await Sharing.isAvailableAsync()){
          alert("Compartir no esta compatible con tu plataforma");
          return;
        }
  
        Sharing.shareAsync(selectedImage.localUri)
        
    };
  




    return (
        <View style={style.container}>
     
            <Text  style={style.title}> Hola Apaza :v  </Text>

            <TouchableOpacity  onPress={openImagePicker} >
            <Image  source={{uri : selectedImage !== null ? selectedImage.localUri :  'https://picsum.photos/300/300'}} 
                    style={style.imageD} /> 
            </TouchableOpacity>

            {
            selectedImage 
            ? <TouchableOpacity
                    onPress={openShared}
                    style={style.button} >
                <Text style={style.buttonText}>Compartir</Text>
                </TouchableOpacity>
            : <View/>
            }
        
        </View>
    )
}

const style = StyleSheet.create({
    container : {flex : 1 , 
                justifyContent : 'center' ,
                alignItems : 'center' ,
                backgroundColor : '#F2F3F4'},
  
    title : {fontSize :40 ,
            color :'#283747',
            fontFamily : 'Roboto_300Light',
          },
    imageD : {height: '200px' ,
              width : '200px' ,  
              borderRadius : 100
            },
    button : { backgroundColor : '#012B2A', 
              padding : 5 , 
              borderRadius : 5 , 
              marginTop : 15 , 
              paddingLeft: 20 , 
              paddingRight : 20 , 
              paddingTop : 10 , 
              paddingBottom : 10},
    buttonText : {color : '#ffffff' }
  
  })
  
  

export default Usuario
