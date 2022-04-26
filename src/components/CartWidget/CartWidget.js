import cartImg from '../../imagenes/carritodecompras.png'
import React, {useContext} from 'react'
import { CartContext } from '../../context/CartContext';
import 'boxicons';
import "./CartWidget.css";

const CartWidget = () => {
   
    const cartContext = useContext(CartContext);
    const {cart} = cartContext;
    
    return(
      <div className='carrito.show'>
        <div className='carritos.show'>
           <div className='carrito_close'>
           <h2>Su carrito</h2>
           
              <box-icon name="x"></box-icon>
             
            </div>
            
            <div className='carrito_center'>

                <div className='carrito_item'>
                <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQCyYPnOabDAeXGojINyrCx6O--7tFiJm_RMz8BpeDsHjfhfSKBTQKMZhZWLciXuWoGqBE&usqp=CAU"/>  
                  <div>
                    <h3>Titulo</h3>
                    <p className='price'>Precio: $</p>
                  </div>  

                  <div> 
                    <box-icon name='up-arrow' type="solid" color="rgb(94, 94, 173)"></box-icon>
                    <p className='cantidad'>1</p>
                    <box-icon name='down-arrow' type="solid" color="rgb(94, 94, 173)"></box-icon>
                  </div>
                  <div className='remove__item'>
                    <box-icon name='trash'color="rgb(94, 94, 173)"  
                             >

                    </box-icon>
                  </div>

                </div>
            </div>
            <div className='carrito__footer'>
               <h3>Total: $</h3>  
               <button className='btn'> finalizar compra y pagar</button>
             </div>
        </div>
      </div>
    );  
};

export default CartWidget