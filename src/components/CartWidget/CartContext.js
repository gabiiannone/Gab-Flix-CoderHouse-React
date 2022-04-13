import React from "react";
import {createContext, useState, useContext} from "react";

export const CartContext = createContext([]);



export const CartProvider = ({ children }) => {
    const [items, setItems] = useState([{
        id: 1,
        title: "primer juego",
        qty: 5
    }])

    const isInCart = (id) => {

    }

    const addItem = (id, data, qty) => {
       
        setItems([...items, { ...data, qty: qty }]); 
    }
    return (
        <CartContext.Provider value={{ items, addItem }} >
            {children}
        </CartContext.Provider>
    )
}