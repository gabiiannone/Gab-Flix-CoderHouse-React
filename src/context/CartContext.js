import React from "react";
import {createContext, useState, useContext} from "react";

const CartContext = createContext();



const CartProvider = ({children}) => {

    const [cartProducts, setCartProducts] = useState([]);

    const addProductToCart = (product) => {
        console.log("Agregar producto al carrito", product)

    }
    const data = {
        cartProducts,
        addProductToCart 

    }
   

    
    return (
        <CartContext.Provider
            value={{ 
                    data
                   }} 
        >
           {children}
        </CartContext.Provider>
    )
}

export { CartContext };
export default CartProvider;