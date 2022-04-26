import { useEffect, useState } from 'react';
import { httpGet } from '../Utils/httpClient';
import styles from "./Pelis.module.css";
import { PelisCards } from './PelisCards';
import InfiniteScroll from 'react-infinite-scroll-component';

import { Spinner } from './spinner';


export function PelisGrid() {
  
  const [peliculas, setPelis] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  //const [page, setPage] = useState[1];
  //const [hasMore, setHasMore] = useState(true);


  /*useEffect(() => {
    setIsLoading(true);
    const searchUrl = search
      ? "/search/movie?query=" + search + "&page=" + page
      : "/discover/movie?page=" + page;
    httpGet(searchUrl).then((data) => {
      setPelis((prevMovies) => prevMovies.concat(data.results));
      setHasMore(data.page < data.total_pages);
      setIsLoading(false);
    });*/
   useEffect(() => {
   httpGet("/discover/movie").then(data => {
     setPelis(data.results);
     setIsLoading(false);
    });
  }, []); 

    
 

  if (isLoading) {
    return <Spinner/>
  }




  return (
   // <InfiniteScroll 
    //dataLength={peliculas.length} 
    //hasMore={true} 
   // next={() => setPage((prevPage) => prevPage + 1 )}> 
    <div>
     
    <ul className={styles.peliGrid}>
      {peliculas.map((pelicula) => 
      
      <PelisCards key={pelicula.id} pelicula={pelicula}/>  )}
    </ul>
    </div>  
    //</InfiniteScroll>
  );
}
