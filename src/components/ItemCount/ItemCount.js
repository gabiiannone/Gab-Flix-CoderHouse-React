import React,{useState} from 'react'
const ItemCount = ({stock}) => {
    const [count, setCount] = useState(1)
    

    const onAdd = () =>{
        if(count < stock) {
            setCount(count + 1 )
        }
       
    }
    return(
        <>
        <button className="botonCount"> - </button>
        <p className="botonTotal"> {count} </p>
        <button className="botonCount" onClick={onAdd}> + </button>
        <>
        <br></br>
        <button className="botonAgregar"> Agregar </button>
        
        </>
        

        </>

    )

}

export default ItemCount