import React from 'react'
import { Text, View, StyleSheet } from 'react-native'

export const Navbar = () => {
    return (
        <View style={style.container}>
            <Text>Apaza sac</Text>
        </View>
    )
}


const style = StyleSheet.create({
    container : {flex : 1 , 
                justifyContent : 'center' ,
                alignItems : 'center' ,
                backgroundColor : '#012B2A'},
  
    title : {fontSize :40 ,
            color :'#283747'},

    imageD :{height: '200px' ,
            width : '200px' ,
            borderRadius : 100},

    button : { backgroundColor : '#012B2A',
                padding : 5 , 
                borderRadius : 5 , 
                marginTop : 15 , 
                paddingLeft: 20 , 
                paddingRight : 20 , paddingTop : 10 , paddingBottom : 10},
    buttonText : {color : '#ffffff' }
  
  })
  