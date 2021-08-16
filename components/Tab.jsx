import { Circle, Link } from 'native-base';
import React from 'react'; 
import { Text, View , StyleSheet, TouchableOpacity} from 'react-native';
import { Icon } from 'native-base'
import { Ionicons, FontAwesome , MaterialIcons, AntDesign } from '@expo/vector-icons';


export default function TabCustom({ state, descriptors, navigation }) {
    return (
      <View style={style.menuTabContainer}>
        {/************** MAP de los Stacks ***********************/}
        {state.routes.map((route, index) => {

          
          

          
          const { options } = descriptors[route.key];
          const label =
            options.tabBarLabel !== undefined
              ? options.tabBarLabel
              : options.title !== undefined
              ? options.title
              : route.name;
  
          const isFocused = state.index === index;
  
          const onPress = () => {
            const event = navigation.emit({
              type: 'tabPress',
              target: route.key,
            });
  
            if (!isFocused && !event.defaultPrevented) {
              navigation.navigate(route.name);
            }
          };
  
          const onLongPress = () => {
            navigation.emit({
              type: 'tabLongPress',
              target: route.key,
            });
          };
          if(label==='Venta'){
            return(
              <Link
              bottom='80%'
              accessibilityRole="button"
                accessibilityState={isFocused ? { selected: true } : {}}
                accessibilityLabel={options.tabBarAccessibilityLabel}
                testID={options.tabBarTestID}
                onPress ={onPress}
                onLongPress={onLongPress}>
                <Circle 
                 bg='#FF4C29'  width='70px' height='70px' borderWidth='6px' borderRadius='35px' borderColor='#10212D'>
                  <Icon name='add' as={Ionicons} color='#fff' />
                </Circle>
              </Link>
            )
            
          }
  
          return (
            <TouchableOpacity
              accessibilityRole="button"
              accessibilityState={isFocused ? { selected: true } : {}}
              accessibilityLabel={options.tabBarAccessibilityLabel}
              testID={options.tabBarTestID}
              onPress={onPress}
              onLongPress={onLongPress}
              style={style.tab}
            > 
            <View style={ isFocused? style.tabSelected : '' }>
              <Icon name={label==='Inicio'
                        ? isFocused ? 'archive'   :  'archive-outline'
                        :label==='Gastos' 
                        ? isFocused ? 'cash'   :  'cash-outline'
                        :label==='Perfil' 
                        ? isFocused ? 'person' : 'person-outline' : 'd'}
              
              color={isFocused  ?'#F3F2C9' : '#CBCBCB'} as={Ionicons} style={{padding: 0}}   size={7} /> 
              {isFocused 
              ? <Text style={{ color: isFocused ? '#F3F2C9' : '#CBCBCB'  ,marginLeft: 10 ,  fontFamily : 'Roboto_300Light'}}>
                    {label}
                </Text> 
              : null}
            </View>
              
             
            </TouchableOpacity>
          );
        })}
      </View>
    );
  }
  
  
  const style = StyleSheet.create({

    menuTabContainer:{  
      height: 80,
      flexDirection: 'row',
      justifyContent: 'space-around',
      backgroundColor: '#050F16',
      padding: 8,
      fontFamily : 'Roboto_300Light',
      
     
    },
    tab:{
     fontFamily : 'Roboto_300Light',
      justifyContent : 'center',
      alignItems: 'center',
     
      
      width: 'min-content',
      
     
      
    },
    tabSelected:{
      flexDirection: 'row',
      justifyContent:'space-between',
      alignItems: 'center',
      backgroundColor: '#081620',
      padding: 7,
      borderRadius: 10,
      paddingLeft: 12,
      paddingRight: 12 ,
      shadowColor: "#000",
      shadowOffset: {
        width: 0,
        height: 3,
      },
      shadowOpacity: 0.10,
      shadowRadius: 3.65, 
      elevation: 3,
      
     
      
      
    }
  })