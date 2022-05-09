import React, { useEffect, useState } from 'react';
import SeriesCards from '../Series/SeriesCard';
import db from '../../firebase';
import { collection, getDocs} from 'firebase/firestore';




const SerieList = () => {
    

    const [series, setSeries] = useState([]);

    const getProducts = async () => {

      const itemsCollection = collection(db,'series');
      const productSnapshot = await getDocs(itemsCollection);
      const serieList = productSnapshot.docs.map((doc) => {

        let product = doc.data()
        product.id = doc.id
       
        return product
      }
    )
      return serieList;
    }
  
    
    //const getProducts = new Promise((resolve, reject) => {
    // setTimeout(() => {
       // resolve(productList);
      //}, 2000);
    //});
  
   
    const getProductsFromDB = async () => {
      try {
        const result = await getProducts();
        setSeries(result);
      } catch (error) {
       
      }
    };
  
  useEffect(() => {
    getProductsFromDB();
  }, []); 

  return (
    <div > 
      {
        
        series.length ? ( 
          <>
            {
              
              series.map((product) => {
               
               return (
                <div key={product.id}>
                  <SeriesCards
                    data={product}
                   
                  />
                    
                </div>
                
              );
            })
          }
        </>
      ) : (
        
        
        <p className='loader'>Cargando series...</p>
        
      )
        
      }
      </div>
    );
  };
  
  export default SerieList;
    