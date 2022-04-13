import Container from '@mui/material/Container';
import Button from '@mui/material/Button';
import { useParams } from 'react-router-dom';
import { useEffect, useState } from 'react';
import productList  from '../components/Utils/productos';

const JuegosDetails = () => {
    
    const { id } = useParams();
    const [data, setProduct] = useState({})

    useEffect( () => {
        filterProductById(productList, id)
    }, [id])

    const filterProductById = (array , id) => {
        return array.map( (data) => {
            if(data.id == id) {
                return setProduct(data)
            }
        })
    }
    
    return(
        <Container className="container_general">
            <div className="container_detail">
            <div className='container_detail_img'>
                <img  src={data.imagen} alt="spiderman"/>
            </div>
            <div className='container_detail_info'>
                <h3 className='info_title'>{data.titulo}</h3>
                <p className='info_subtitle'> Consola:</p>
                <p className='info_text'> {data.consola}</p>
                <p className='info_text'>Precio: ${data.precio}</p>
                <p className='info_subtitle'>DESCRIPCION</p>
                <p className='info_text_detail_text'>{data.description} </p>



                <Button className='detail__btn-buy'>COMPRAR</Button>

            </div>
            </div>
        </Container>

    )

}
  
export default JuegosDetails 