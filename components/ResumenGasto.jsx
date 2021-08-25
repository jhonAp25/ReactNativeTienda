import { Box } from 'native-base';
import React from 'react'
import { Text, View, Image ,StyleSheet} from 'react-native'

const ResumenGasto = ({total , gasto}) => {
    return (
        <>
            <View style={{width: '80%'}}>
                <Box flexDirection='row'  alignItems='baseline'  >
                    <Text style={{color :'#9BB9BA', marginBottom: 10,fontFamily: 'Roboto_400Regular'}} >Total de Gastos </Text>
                    <View style={style.badge1}>{gasto.length}</View>
                </Box> 
                <Text style={{fontWeight: 'bold' , fontSize : 25 , marginRight : 14 , color :'#fff' }}> S/{total}</Text>
            </View>

            <View style={{width : '20%' , justifyContent:'center', alignItems: 'center'}}>
                    <Image  source={require('../assets/Img/point-of-sale.png')}
                            resizeMode='contain'
                            style={{width: 35, height: 35 , tintColor: '#F3F2C9'}} />
            </View>
                
            
        </>
    )
}

export default ResumenGasto

const style = StyleSheet.create({
    
    cresumen:{
        flexDirection: 'row',
        margin : 'auto',    
        padding: '5%',
        backgroundColor: '#055052',
        marginTop: '4%',
        borderRadius : 10,
        width : '90%'
    },
    badge1:{
        fontSize: 15,
        color:'#9B9FA2',
        width:  28,
        height: 28,
        justifyContent: 'center',
        alignItems: 'center',
        borderRadius: 14,
        backgroundColor: '#050F16'
    }
})
