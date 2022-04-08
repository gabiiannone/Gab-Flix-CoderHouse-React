import { useState, useEffect } from 'react';
import ItemDetail from "../ItemDetail/ItemDetail";
import productos from '../Utils/productos';

const ItemDetailContainer = () => {
    const [dataProduct, setDataProduct] = useState({})

    const getProduct = () => {

        return new Promise((resolve,reject) => {
            return resolve(productos)
        })
    }

    useEffect(  () => {
        getProduct().then( (productos) => {
            setDataProduct(productos)
            console.log("Llamada al mock: ",productos)
        }). finally( () => {
            console.log("Termino la llamada")
        })
    }, [])

    const onAdd = (count,titulo) => {
        alert(`Has agregado ${count}, ${titulo}`);
    }

    return (
        <>
        
       <ItemDetail data={dataProduct}/>
        </>

    )

}

export default ItemDetailContainer