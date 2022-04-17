import Button from '@mui/material/Button';
import { useContext, useEffect, useState } from 'react';
import  Container  from '@mui/material/Container';
import ItemCount from '../ItemCount/ItemCount';
import { CartContext } from '../../context/CartContext';



const ItemDetail = ({data}) => {
    
   const cartContext = useContext(CartContext);
   const {cart, addToCart} = cartContext; 
   
   const onAdd = (count) => {
       addToCart(data, count)
   }  


    return(

        <Container className="container_general">
            <div className="container_detail">
            <div className='container_detail_img'>
                <img  src={data.imagen} alt=""/>
            </div>
            <div className='container_detail_info'>
                <h3 className='info_title'>{data.titulo}</h3>
                <p className='info_subtitle'> Consola:</p>
                <p className='info_text'> {data.consola}</p>
                <p className='info_text'>Precio: ${data.precio}</p>
                <p className='info_subtitle'>DESCRIPCION</p>
                <p className='info_text_detail_text'>{data.description} </p>


                <ItemCount stock={data.stock} onAdd={onAdd} initial={1}/>


            </div>
            </div>
        </Container>

    )

}

export default ItemDetail



