import { useState, useEffect } from 'react';
import ItemDetail from "../ItemDetail/ItemDetail";
import productList from "../Utils/productos";

const ItemDetailContainer = () => {
    const [dataProduct, setDataProduct] = useState({})

    const getProduct = () => {

        return new Promise((resolve,reject) => {
            return resolve(productList)
        })
    }

    useEffect(  () => {
        getProduct().then( (productList) => {
            setDataProduct(productList)
            console.log("Llamada al mock: ",productList)
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