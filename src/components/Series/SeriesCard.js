import React,  {useState, useEffect } from 'react'

import styles from "./Series.module.css";   
import {Link} from "react-router-dom";

export default function SeriesCards({data}) {

const {imagen,titulo,description,genero,año,id} = data
        //nombre //funcion   //se puede pasar string, num
 /*const onAdd = (count) => {
            alert(`Has agregado ${count}, ${titulo}`);
        }*/
    return(
       
        <div className={styles.serieGrid}>
        <div className={styles.serieCard}>
        <Link 
        
        to={"/series/" + data.id}>
        <img 
         width={230}
         height={345}
         className={styles.serieImage}
         src={data.imagen} alt={data.titulo}/>
         
         
        <p className={styles.titulo}>{data.titulo}</p>
       
        

        </Link>
         
        </div>
        </div>
       
    )
}