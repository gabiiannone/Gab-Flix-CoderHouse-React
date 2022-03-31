import React,{useState} from 'react'


const ItemCount = ({initial, stock, onAdd}) => {

    const [count, setCount] = useState(initial);
    

    const addProduct = (num) =>{
        setCount(count + num);

       // if(count < stock) {
          //  setCount(count + 1 )
       // }
       
    }

    return(
        <div className='contador'>
        <>
        <button
            className="botonCount"
            onClick={() => addProduct(-1)}
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
        <>
        <br></br>

        <button
             className="botonAgregar"
             onClick={() => onAdd(count)}
             disabled={stock === 0 ? true : null}
        > 
        Agregar 
        </button>
        
        </>
        

        </>
        </div>
    )

}

export default ItemCount


