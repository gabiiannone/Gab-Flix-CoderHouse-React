import React,  {useState, useEffect } from 'react'
import './Cards.css'
import ItemCount from '../ItemCount/ItemCount'          
export default function Cards({data}) {

const {imagen,titulo, consola, precio,stock,id} = data
        //nombre //funcion   //se puede pasar string, num
const onAdd = (count) => {
    alert(`Has agregado ${count}, ${titulo}`);
}
    return(
        
        <div className="cards-items">
            <img src={imagen} width="200px"/>
            <h2>{titulo}</h2>
            <p>Consola: {consola}</p>
            <p>Precio: $ {precio}</p>
           
            <ItemCount stock={stock} onAdd={onAdd} initial={1}/>
           
         </div>       
    
        
        
    )
}