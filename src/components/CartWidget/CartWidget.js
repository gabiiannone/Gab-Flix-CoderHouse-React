import React, {useContext} from 'react'

import { CartContext } from '../../context/CartContext';
import 'boxicons';
import "./CartWidget.css";
import Card from "../../imagenes/Logo1.png";

const CartWidget = () => {
   
  const { cartProducts, deleteOne, emptyCart, sumaTotal } =  useContext(CartContext);


    
    return(
     

      <div >
        <div >
           <div className='carritos'>
           <h2>Su carrito</h2>
           
           <box-icon name="x" ></box-icon>
             
            </div>
            
            <div className='carrito_center'>
              {cartProducts.map( (cartProduct) => {
                return(
                  <div className='carrito_item' key={cartProduct.id}>
                  <img src={cartProduct.imagen} alt=""/>  
                    <div>
                      <h3 >{cartProduct.titulo}</h3>
                      <p className='price'> ${cartProduct.precio}</p>
                    </div>  
  
                    <div> 
                      <box-icon name='up-arrow' type="solid" color="rgb(94, 94, 173)"></box-icon>
                      <p className='cantidad'>{cartProduct.count}</p>
                      <box-icon name='down-arrow' type="solid" color="rgb(94, 94, 173)"></box-icon>
                    </div>
                    <div >
                      <button className='remove__item'
                      onClick={() => deleteOne(cartProduct.id)}
                      >
                        Eliminar
                      </button>
                    </div>
                   
                  </div>
               

                )
              } )}

                </div>

              { 
                (cartProducts.length >= 1)

                &&

            <div className='carrito__footer'>
               <h4>Total: {sumaTotal()}</h4>  
               <button className='btn' onClick={emptyCart}> Vaciar Carrito</button>
               <button className='btn'> Finalizar compra y pagar</button>
             </div>
             }  
        </div>
      </div>
    );  
};



export default CartWidget 











