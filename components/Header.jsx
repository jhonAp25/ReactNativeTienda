import React from 'react'
import { Text, View, Image ,StyleSheet , TouchableOpacity} from 'react-native';
import { Icon, registerCustomIconType } from 'react-native-elements'


const Header = () => {
    return (
        <View style={style.content}>
        <View>
            <Image  style={style.avatar}  source={{uri : 'https://picsum.photos/300/300'}} />
        </View>

        <View style={style.usuario}>
            <Text style={{color: '#F3F2C9', fontWeight: 'semibold' , fontSize: '1.5rem'}} >Hola Jhon Apaza</Text>
            <Text style={{color: '#fff' ,fontSize: '1rem', fontWeight:'300' }} >Bienvenido de nuevo</Text>
        </View>

        <View  style={style.icono}>
            <Icon name='logout' color='#F3F2C9' size={30} />
        </View>

    </View>
    )
}


export default Header



const style = StyleSheet.create({
    
    content:{
        margin : 'auto',
        width: '95%',
        borderRadius: 17,
        fontFamily: 'Zilla Slab',
        display: 'flex',
        flexDirection: "row",
        justifyContent: 'space-between',
        alignItems: 'center',
        padding: 15,
        
    },
    avatar:{
        height: '60px' ,
        width : '60px' ,
        borderRadius : 30,
        marginLeft: 10,
        marginRight: 10,
        flex: 1
    },
    usuario : {
        display : 'flex',
        flex: 5,
        padding: 10,
      
        marginLeft: 20,
    },
    icono : {
        display : 'flex',
        flex: 1,
    },
    title :{
        marginTop: '3%',
        display: 'flex',
        flexDirection : 'row',
        justifyContent : 'space-between'
    },
    btn:{
        marginTop: '5%',
        width : '100%'
    },
    btnNuevaVenta:{
        fontFamily: 'Zilla Slab',
        display: 'flex',
        flexDirection: 'row',
        flex: 1,
        padding: 15,
        borderRadius: 10,
        backgroundColor: '#356BF5',
        justifyContent: 'center'
    },
    item:{
        marginBottom: 10,
        display: 'flex',
        fontFamily: 'Zilla Slab',
        flexDirection: 'row',
        backgroundColor: '#F4F4F4',
        justifyContent: 'space-between',
        borderRadius: 12,
        padding: 15
    }
    
})