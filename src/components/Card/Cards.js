import React,  {useState, useEffect } from 'react'
import './Cards.css'


export default function Cards({data}) {

   const {imagen,titulo, consola, precio} = data
        //nombre //funcion   //se puede pasar string, num
   const [count, setCount] = useState(1)

   useEffect( () => {


})

   console.log("estado incial de mi contador: ",count)

   const addCantidad = () =>{
       setCount(count + 1)
   }

   const remove = () =>{
    setCount(count - 1)

   }

   const addCompra = () =>{
    prompt("Agregaste al carrito: " ,{count}, "de" ,{titulo} );
}



  
    return(
        
        <div class="cards-items">
            <img src={imagen}  />
            <h2>{titulo}</h2>
            <p>Consola: {consola}</p>
            <p>Precio: $ {precio}</p>
            <button onClick={remove}>Remover: </button>
            <button onClick={addCantidad}>Cantidad: {count}</button>
            
            <button onClick={addCompra}>Comprar</button> 


        </div>


        
    )

}