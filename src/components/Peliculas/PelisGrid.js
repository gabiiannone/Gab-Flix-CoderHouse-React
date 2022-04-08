import peliculas from '../Utils/pelis.json';
import styles from "./Pelis.module.css";
import { PelisCards } from './PelisCards';


export function PelisGrid() {
  
    
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
