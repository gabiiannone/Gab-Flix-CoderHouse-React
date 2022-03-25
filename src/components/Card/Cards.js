import React,  {useState, useEffect } from 'react'
import './Cards.css'
import ItemCount from '../ItemCount/ItemCount'          

export default function Cards({data}) {

const {imagen,titulo, consola, precio,stock} = data
        //nombre //funcion   //se puede pasar string, num

    return(
        
        <div className="cards-items">
            <img src={imagen} width="200px"  />
            <h2>{titulo}</h2>
            <p>Consola: {consola}</p>
            <p>Precio: $ {precio}</p>
            <ItemCount stock={stock}/>
         </div>       
    
        
        
    )
}