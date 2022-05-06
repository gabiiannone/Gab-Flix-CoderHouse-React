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
            value={data} 
        >
           {children}
        </CartContext.Provider>
    )
}

export { CartContext };
export default CartProvider;;



 //const CartProvider = ({children}) => {

   // const [cartProducts, setCartProducts] = useState(() => {
     //   try{
       //     const productosEnlocalStorage = localStorage.getItem("cartProducts");
         //   return productosEnlocalStorage ? JSON.parse(productosEnlocalStorage) : [];
        //} catch (error) {
         //   return[];
        //}

    //});

   // useEffect(() => {
     //   localStorage.setItem("cartProducts", JSON.stringify(cartProducts));
    //}, [cartProducts]);

    //const addProductToCart = (data) => {
    
      //  const inCart = cartProducts.find(
        //    (productInCart) => productInCart.id === data.id

        //);
        /*if(inCart){
            setCartProducts(
                cartProducts.map((productInCart) => {
                    if(productInCart.id === data.id) {
                        return {...inCart, amount: inCart.amount + 1} 
                    }else return productInCart;
                })
            );

        }else{
            setCartProducts([...cartProducts, {...data, amount: 1}]);
        }
    
        const deleteItemToCart = (data) => {
            const inCart = cartProducts.find(
                (productInCart) => productInCart.id === data.id
            ); 
            if(inCart.amount === 1){
                setCartProducts(
                    cartProducts.filter(productInCart => productInCart.id !== data.id)
                );

            }else{
                setCartProducts((productInCart) => {
                    if(productInCart.id === data.id) {
                        return {...inCart, amount: inCart.amount - 1}
                    } else return productInCart
                })
            }
        }
        return (
            <CartContext.Provider
                value={{data,cartProducts, addProductToCart, deleteItemToCart}} 
            >
               {children}
            </CartContext.Provider>
        )


    };
    
    };



  //  const addProductToCart = (product) => {
    //    console.log("Agregar producto al carrito", product)
      //  setCartProducts(cartProducts => [...cartProducts, product ])

    //}
    //const data = {
      //  cartProducts,
        //addProductToCart 

  //  }
   

    
  //  return (
    //    <CartContext.Provider
      //      value={{ 
        //            data
          //         }} 
       // >
         //  {children}
        //</CartContext.Provider>
    //)
//}

//export { CartContext };
export default CartProvider;*/