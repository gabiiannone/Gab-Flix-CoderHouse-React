import React,{useState, useContext} from 'react';
import {Button} from "react-bootstrap";
import JuegosDetails from '../../pages/JuegosDetails';





const ItemCount = ({initial, stock, onAdd}) => {
    
   
    const [count, setCount] = useState(initial);
    

    const addProduct = () =>{
        if (count<= stock) setCount(count + 1);
    };

    const remProduct = () =>{
        if (count > initial) setCount(count - 1);
    }

    
       
      

    return(
        <div className='container_contador'>
        <div className='contador'>
        
        <button
            className="botonCount"
            onClick={() => remProduct(-1)}
            disabled={count === initial ? true : null}
            > - 
        </button>

        <span className="botonTotal"> {count} </span>

        <button
             className="botonCount"
             onClick={() => addProduct(+1)}
             disabled={count === stock ? true : null}
        > + 
        </button>

        
        
        </div>

        <br></br>
        <button onClick={() =>onAdd(count)}  className="botonAgregar" >Agregar al Carrito </button>
        </div>
       
    );
}

export default ItemCount


