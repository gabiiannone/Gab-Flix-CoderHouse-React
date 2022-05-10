import React from 'react';
import "./Portada.css";
import portadaVideo from "./Media/portadavideo.mp4";

const Portada = () => {

  return (
   
    <div className='portada_container' >
        
      
        <h1  class="titulos" >BIENVENIDO</h1> 
        <video className='video' src={portadaVideo} autoPlay loop muted />
        <h2> SOMOS GAB-FLIX</h2>
        <p>LAS PELICULAS Y SERIES MAS NUEVAS ESTAN AQUÍ | TODOS LOS JUEGOS DE PlayStation 5 | </p>
    </div>
  )  
}

export default Portada