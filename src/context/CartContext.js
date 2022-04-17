import React from "react";
import {createContext, useState, useContext} from "react";

export const CartContext = createContext(null);



const CartProvider = (props) => {

    const [cart, setCart] = useState([])
    const [total, setTotal] = useState([0])

    const addToCart = (data, count) => {

       

        if(cart.some(el => el.id === data.id)){

            let index = cart.findIndex (el => el.id === data.id );
            let product = cart[index];
            product.data = product.count + count;

            const newCart = [...cart];
            newCart.splice( index, 1, product ); 
            setCart([...newCart ]); 

        }else{

            let product = {...data, count};
            setCart([...cart, product ]); 
        }

        
    }

    const deleteCartById = (id) =>{
        let index = newCart.findIndex(el => el.id === id);
        const newCart = [...cart];
      
        newCart.splice( index, 1 ); 
        setCart([...newCart]);
    }

    const deleteCart = () => {

        setCart([]);
    }


    
    return (
        <CartContext.Provider
            value={{ 
                    cart, 
                    setCart,
                    addToCart,
                   }} 
        >
           {props.children}
        </CartContext.Provider>
    )
}

export default CartProvider;