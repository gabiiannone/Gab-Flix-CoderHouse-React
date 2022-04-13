import React, { useEffect, useState } from 'react';
import { Spinner } from 'react-bootstrap';
import { Thumbs } from 'swiper';
import Cards from '../Card/Cards'
import {productList}  from '../Utils/productos';




const ItemList = () => {
    
    const [products, setProducts] = useState([]);
  
    
    const getProducts = new Promise((resolve, reject) => {
      setTimeout(() => {
        resolve(productList);
      }, 2000);
    });
  
   
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
    


 