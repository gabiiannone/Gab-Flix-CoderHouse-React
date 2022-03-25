import Cards from '../Card/Cards'
import spiderman1 from '../../imagenes/spiderman1.png'


const ListProducts = () => {
    let dataProduct = {
        imagen:spiderman1, 
        titulo:"Spiderman",
        consola:"PS5",
        precio:8000,
        stock:20
    }


    return(
        <div className="container-cards">
            
            <Cards data={dataProduct}/>
          
        </div>
    ) 
} 

export default ListProducts;

