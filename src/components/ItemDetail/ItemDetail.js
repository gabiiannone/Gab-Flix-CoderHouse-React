import Button from '@mui/material/Button';
import { useEffect, useState } from 'react';
import  Container  from '@mui/material/Container';



const ItemDetail = ({data}) => {
   
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
                <p className='info_text_detail_text'>Crash Bandicoot 4: It's About Time es un videojuego de plataformas, diseñado por Toys for Bob y publicado por Activision. El videojuego es la octava entrega de la serie Crash Bandicoot, secuela de Crash Bandicoot N. Sane Trilogy y que toma lugar después de los eventos de Crash Bandicoot 3: Warped.​​​ </p>

                <Button className='detail__btn-buy'>COMPRAR</Button>


            </div>
            </div>
        </Container>

    )

}

export default ItemDetail



