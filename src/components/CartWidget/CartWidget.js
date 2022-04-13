import cartImg from '../../imagenes/carritodecompras.png'
import { CartContext } from './CartContext'
import React, {useContext} from 'react'

const CartWidget = () => {
    const { items, addItem} = useContext(CartContext);
    console.log(items);
    return(

        <div className="carrito"> 
          {
              items.map((data) => (
                <div key={data.id}>
                  <h1>{data.title}</h1>
              
                </div>
              ))
          }

        </div>
       
    )
}

export default CartWidget