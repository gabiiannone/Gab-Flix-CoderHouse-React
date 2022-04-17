import React,{useState} from 'react';
import {Button} from "react-bootstrap";
import ItemDetail from '../ItemDetail/ItemDetail';

const ItemCount = ({initial, stock, onAdd}) => {

    const [count, setCount] = useState(initial);
    

    const addProduct = () =>{
        if (count<= stock) setCount(count + 1);
    };

    const remProduct = () =>{
        if (count > initial) setCount(count - 1);
    }


       // setCount(count + num);

        //if(count < stock) {
         //  setCount(count + 1 )
        //}
       
       <ItemDetail/>

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

        <button className="botonAgregar"
             
             onClick={() => onAdd(count)}
             disabled={stock === 0 ? true : null}
             >
        Agregar 
        </button>

        
       
        </div>
       
    );
}

export default ItemCount


