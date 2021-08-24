import React,{useContext , useState} from 'react'

import axios from 'axios';


let GastoContext = React.createContext();
let {Provider, Consumer} = GastoContext;

const url = 'https://tienda-apaza-back-end.herokuapp.com/'

const GastoProvider = ({children}) => {
    
    //********* */ STATES ************
    const [ gasto , setGastos] = useState([])
    const [total , setTotal]=useState(0)

  
  

    const getGastosHoy = async()=>{ await axios.get(url +'gastos/listaAlDia' )
            .then(({data})=>{ 
                setTotal(data.reduce((prev, next) => prev + next.costo, 0))
                setGastos(data)
               console.log(data)
               
                })
            .catch((error) => { 
              
              
            })}

    const postNewGasto =(data)=>axios.post(url +'gastos',{
            costo : data.costo,
            nombre: data.nombre,
            
           } )
            .then(({data})=>{ 
             
               console.log(data)
               
            })
            .catch((error) => { 
              
              
            })
        
   // const nuevoUsu = async()=>{ await axios.post(url +'/nuevo').then((response)=>{ setUsuario(response.data); }) }




    return(
        <Provider value={{getGastosHoy  ,gasto ,total , setTotal, postNewGasto}}>
            {children}
        </Provider>
    )
}



export  {GastoProvider, Consumer as GastoConsumer , GastoContext};  


