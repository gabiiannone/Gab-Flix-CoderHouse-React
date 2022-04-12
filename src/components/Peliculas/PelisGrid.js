import { useEffect, useState } from 'react';
import { httpGet } from '../Utils/httpClient';
import styles from "./Pelis.module.css";
import { PelisCards } from './PelisCards';


export function PelisGrid() {
  
  const [peliculas, setPelis] = useState([]);

  

  useEffect(() => {
    httpGet("/discover/movie").then(data => {
     setPelis(data.results);
    });
  }, []);  
  return (
    <div>
      <h1 class="titulos" >PELICULAS</h1>
    <ul className={styles.peliGrid}>
      {peliculas.map((pelicula) => 
      
      <PelisCards key={pelicula.id} pelicula={pelicula}/>  )}
    </ul>
    </div>  
  );
}
