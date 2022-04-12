import React,  {useState, useEffect } from 'react'
import './Cards.css'
import ItemCount from '../ItemCount/ItemCount'     
import {Link} from "react-router-dom";

export default function Cards({data}) {

const {imagen,titulo, consola, precio,description,stock,id} = data
        //nombre //funcion   //se puede pasar string, num
 /*const onAdd = (count) => {
            alert(`Has agregado ${count}, ${titulo}`);
        }*/
    return(
        
        <div className="cards-items">
             <Link to={"/video_juegos/" + data.id}>
            <img src={imagen} width="200px"/>
            <h2>{titulo}</h2>
            <p>Consola: {consola}</p>
            <p>Precio: $ {precio}</p>
           
            </Link>
           
         </div>       
    
        
        
    )
}