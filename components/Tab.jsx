import React from 'react'; 
import { Text, View , StyleSheet, TouchableOpacity} from 'react-native';
import { Icon } from 'react-native-elements'


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
            <View style={style.tabSelected }>
              <Icon name={label==='Ventas'
                        ? 'snowflake'
                        :label==='Gastos' 
                        ? 'dollar-sign' 
                        :label==='Perfil' 
                        ?'user' : 'home' }
              
              color={isFocused  ?'#F3F2C9' : '#CBCBCB'} type='font-awesome-5' style={{padding: 4}}  /> 
              {isFocused 
              ? <Text style={{ color: isFocused ? '#F3F2C9' : '#CBCBCB'  }}>
                    { label}
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
    shadow :{
      backgroundColor: '#FF4C29',
        
    
      elevation:5,
      width: 70 , 
      height: 70,
      borderRadius: 35,
      justifyContent: 'center',
      alignItems: 'center',
      top: -30,
      borderColor: '#F2F2F2',
      borderWidth: 5,
  
    },
    menuTabContainer:{  
      height: 80,
      flexDirection: 'row',
      justifyContent: 'space-around',
      backgroundColor: '#050F16',
      padding: 8,
      
     
    },
    tab:{
     
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
     
      
      
    }
  })