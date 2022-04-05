import peliculas from '../Utils/pelis.json';
import styles from "./Pelis.module.css";
import { PelisCard } from './PelisCards';


export function PelisGrid() {
  
    
  return (
    
    <ul className={styles.peliGrid}>
      {peliculas.map((pelicula) => 
      
      <PelisCard key={pelicula.id} pelicula={pelicula}/>  )}
    </ul>

  );
}
