import Container from '@mui/material/Container';
import { useParams } from 'react-router-dom';
import {useEffect, useState } from 'react';
import {doc, getDoc} from "firebase/firestore";
import db from "../firebase";
import styles from "../components/Series/SerieDetails.module.css";




const SeriesDetails = () => {
    
    
    
   
    const { id } = useParams();
    const [data, setSeries] = useState({});
    

    const getSeries = async() => {

        const docRef = doc(db, "series", id);
        const docSnap = await getDoc(docRef);
        
        if (docSnap.exists()) {
            let serie = docSnap.data()
           serie.id = docSnap.id;
            setSeries(serie)
        }else {
            
        }
    }
    useEffect( () => {
      
        getSeries()
       // filterProductById(productList, id)
    }, [id])

    
    return(
        <Container className="container_general">
            <div className="container_detail">
            <div className='container_detail_img'>
                <img  src={data.imagen} width={300} alt=""/>
            </div>
            <div className='container_detail_info'>
                <h3 className='info_title'>{data.titulo}</h3>
                <p className='info_subtitle'> Año: {data.año} </p>
                <p className='info_text'>Genero: {data.genero}</p>
                <p className='info_subtitle'>Temporadas: {data.temporadas}</p>
                <p className='info_subtitle'>Sinopsis e Info:</p>
                <p className='info_text_detail_text'>{data.description} </p>


                
                <button className={`${styles.col} ${styles.seriedetails} ${styles.botonAgregar}`} >INICIAR</button>
                
            </div>
            </div>
        </Container>
        
    )
    
}
export default SeriesDetails