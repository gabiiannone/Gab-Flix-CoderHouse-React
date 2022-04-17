import cartImg from '../../imagenes/carritodecompras.png'
import React, {useContext} from 'react'
import { CartContext } from '../../context/CartContext';


const CartWidget = () => {
   
    const cartContext = useContext(CartContext);
    const {cart} = cartContext;
    
    return(
      <div className='carrito'>
         
         <img src={cartImg}/>
           
        <span className='itemTotal'>0</span>

      </div>

    );  
};

export default CartWidget