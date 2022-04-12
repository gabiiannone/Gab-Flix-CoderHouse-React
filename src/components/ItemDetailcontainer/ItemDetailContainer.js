import { useState, useEffect } from 'react';
import ItemDetail from "../ItemDetail/ItemDetail";
import mockProducto from "../../components/Utils/productMock";

const ItemDetailContainer = () => {
    const [dataProduct, setDataProduct] = useState({})

    const getProduct = () => {

        return new Promise((resolve,reject) => {
            return resolve(mockProducto)
        })
    }

    useEffect(  () => {
        getProduct().then( (producto) => {
            setDataProduct(producto)
         
        }). finally( () => {
          
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