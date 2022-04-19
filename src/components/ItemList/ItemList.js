import React, { useEffect, useState } from 'react';
import { Spinner } from 'react-bootstrap';
import { Thumbs } from 'swiper';
import Cards from '../Card/Cards'
import {productList}  from '../Utils/productos';
import db from '../../firebase';
import { collection, getDocs} from 'firebase/firestore';



const ItemList = () => {
    

    const [products, setProducts] = useState([]);

    const getProducts = async () => {

      const itemsCollection = collection(db,'video juegos');
      const productSnapshot = await getDocs(itemsCollection);
      const productList = productSnapshot.docs.map((doc) => {

        let product = doc.data()
        product.id = doc.id
       
        return product
      }
    )
      return productList;
    }
  
    
   // const getProducts = new Promise((resolve, reject) => {
     // setTimeout(() => {
       // resolve(productList);
      //}, 2000);
    //});
  
   
    const getProductsFromDB = async () => {
      try {
        const result = await getProducts;
        setProducts(result);
      } catch (error) {
        console.log(error);
        alert('No podemos mostrar los productos en este momento');
      }
    };
  
  useEffect(() => {
    getProductsFromDB();
  }, []); 

  return (
    <div > 
      {
        
        products.length ? ( 
          <>
            {
              
              products.map((product) => {
               
               return (
                <div key={product.id}>
                  <Cards
                    data={product}
                   
                  />
                    
                </div>
                
              );
            })
          }
        </>
      ) : (
        
        
        <p className='loader'>Cargando productos...</p>
        
      )
        
      }
      </div>
    );
  };
  
  export default ItemList;
    


 