import Container from '@mui/material/Container';
import { Navigate, useNavigate } from 'react-router-dom';
import Button from '@mui/material/Button';
import { useParams } from 'react-router-dom';
import {useContext, useEffect, useState } from 'react';
import {productList}  from '../components/Utils/productos';
import ItemCount from '../components/ItemCount/ItemCount';
import {doc, getDoc} from "firebase/firestore";
import db from "../firebase";
import { CartContext } from '../context/CartContext';


const JuegosDetails = () => {
    
    const cartContext = useContext(CartContext);
    const {cart, addToCart} = cartContext; 
   
    const onAdd = (count) => {
       addToCart(data, count)
    }    
    const { id } = useParams();
    const [data, setProduct] = useState({});
    const navigate = useNavigate();

    const getProduct = async() => {

        const docRef = doc(db, "video juegos", id);
        const docSnap = await getDoc(docRef);
        
        if (docSnap.exists()) {
            let product = docSnap.data()
            product.id = docSnap.id;
            setProduct(product)
        }else {
            navigate("/ERROR"); 
        }
    }
    useEffect( () => {
        getProduct()
       // filterProductById(productList, id)
    }, [id])

    //const filterProductById = (array , id) => {
       // return array.map( (data) => {
           // if(data.id == id) {
             //   return setProduct(data)
            //}
       // })
    //}
    
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

                <ItemCount />

                

            </div>
            </div>
        </Container>

    )

}
  
export default JuegosDetails 