import styles from "./Pelis.module.css";


export function PelisCards  ({pelicula})  {

    
    const imageUrl = "https://image.tmdb.org/t/p/w300" + pelicula.poster_path;
    return   <li className={styles.peliCard}>
            <img 
             width={230}
             height={345}
             className={styles.peliImage}
             src={imageUrl} alt={pelicula.title}/>
            <div>{pelicula.title}</div>
            </li>;
}




  