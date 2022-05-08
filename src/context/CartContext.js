import React from "react";
import {createContext, useState, useEffect, useContext} from "react";

const CartContext = createContext();




const CartProvider = ({children}) => {


    const [cartProducts, setCartProducts] = useState([]);
    console.log("cart list:",cartProducts)


    function agregarAlCarrito(data){

        if ( isInCart(data.id) ) {

            const prod = cartProducts.find((p) => p.id === data.id);
            const { cantidad } = prod;
            prod.cantidad = data.cantidad + cantidad;

            const newCart = [ ...cartProducts ];

            setCartProducts(newCart);


        }else {

            setCartProducts([...cartProducts, data])

        }

        
    }

    function emptyCart(){

        setCartProducts([]);

    }

    const isInCart = (id) => {

       return cartProducts.some(data => data.id === id)
       
    }

    const deleteOne = (id) => {
        setCartProducts(cartProducts.filter(p => p.id !== id));


    }

    const sumaTotal = () => {

        return cartProducts.reduce((acum, data) => acum = acum + (data.precio * data.cantidad), 0)
    }

    const cantidad = () => {

      return cartProducts.reduce((acum, data) => acum += data.cantidad, 0)

    }

    return <CartContext.Provider value={{
        cartProducts,
        agregarAlCarrito,
        emptyCart,
        isInCart,
        deleteOne,
        sumaTotal,
        cantidad
    }} >
           {children}
        </CartContext.Provider>
     }

 
    export {CartContext};
    export default CartProvider;



     

    
  /*  const addProductToCart = (product) => {
        console.log("Agregar producto al carrito", product)

    }
    const data = {
        cartProducts,
        addProductToCart 
        

    }
   

    
    return (
        <CartContext.Provider
            value={data} 
        >
           {children}
        </CartContext.Provider>
    )
}

export { CartContext };
export default CartProvider;*/



