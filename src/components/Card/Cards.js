import './Cards.css'


export default function Cards(props) {
   const {imagen,titulo, consola, precio} = props
    console.log("Titulo: ",titulo)
    console.log("Consola: ", consola)
    console.log("Precio: ", precio)
    return(
        
        <div class="cards-items">
            <img src={imagen}  />
            <h2>{titulo}</h2>
            <p>Consola: {consola}</p>
            <p>Precio: $ {precio}</p>
            <button>Comprar</button>


        </div>


        
    )

}