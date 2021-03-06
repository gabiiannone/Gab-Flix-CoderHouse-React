import styles from "../components/Peliculas/PeliDetails.module.css";
import { useParams } from 'react-router-dom';
import { useEffect, useState } from "react";
import { httpGet } from "../components/Utils/httpClient";
import { Spinner } from "../components/Peliculas/spinner";

export function MovieDetails() {
    const {peliculaId} = useParams(); 
    const [isLoading, setIsLoading] = useState(true); 

    const [pelicula, setPelis] = useState(null);

    useEffect(() => {
        setIsLoading(true);
       
        httpGet("/movie/" + peliculaId).then(data =>{
            setIsLoading(false);
            setPelis(data);

        })  
    }, [peliculaId]);

    if (isLoading) {
        return <Spinner />;
    }

    if (!pelicula) {
        return null;
    }

    

    const imageUrl = "https://image.tmdb.org/t/p/w300" + pelicula.poster_path;
    return (<div className={styles.detailsContainer} >
        <img className={`${styles.col} ${styles.movieImage}`} src={imageUrl} alt={pelicula.title}/>
        <div className={`${styles.col} ${styles.moviedetails}`} >
            <p className={styles.primerItem}><strong>Title: </strong>{pelicula.title}</p>
            <p>
               <strong>Genre: </strong> {pelicula.genres.map(genre => genre.name).join(" ,")}
            </p>
            <p><strong>Description: </strong>  {pelicula.overview}</p>
            <button className={`${styles.col} ${styles.moviedetails} ${styles.botonAgregar}`} >INICIAR</button>
        </div>

        </div>
    );
   
}