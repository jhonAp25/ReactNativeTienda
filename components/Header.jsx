import { Text, View } from 'native-base'
import React from 'react'

const Header = ({name}) => {
    return (
        <>
            <View bg='#081620' height='70px' justifyContent='center' borderBottomWidth='1px' borderColor='#000'  >
                <Text textAlign='center'  fontSize='20px' color='#fff' fontFamily='roboto_400Regular' fontSize='20' >{name}</Text>
            </View>  
        </>
    )
}

export default Header
