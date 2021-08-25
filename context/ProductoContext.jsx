import React,{useContext , useEffect, useState} from 'react'
import axios from 'axios';

let ProductoContext = React.createContext();
let {Provider, Consumer} = ProductoContext;

const url = 'https://tienda-apaza-back-end.herokuapp.com/'


const ProductoProvider = ({children}) => {

 //********* */ STATES ************
 const [tipoProd ,setTipoProd] =useState([])
 const [ producto , setProducto] = useState([])
 const [modeloProd , setModelo]=useState([])


        const getListaProducto = async()=>{ await axios.get(url +'tipoProducto/lista' )
        .then(({data})=>{ 
          
            setTipoProd(data)
            console.log(data)
            })
        .catch((error) => {  
        })}

        const getListaPorModelo = async(id)=>{ await axios.get(url +`producto/ListaModelo/${id}` )
        .then(({data})=>{ 
          
            setProducto(data)
            setModelo(data[0].modelo)
           
           
            })
        .catch((error) => {  
        })}











    useEffect(() => {

        getListaProducto()
    
    }, []);
    
    return(
        <Provider value={{getListaProducto  ,tipoProd , producto, getListaPorModelo ,modeloProd}}>
            {children}
        </Provider>
    )
}

export {ProductoProvider, Consumer as ProductoConsumer , ProductoContext};  
