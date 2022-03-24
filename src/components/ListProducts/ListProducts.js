import Cards from '../Card/Cards'



const ListProducts = () => {
    let dataProduct = {
        imagen:"../imagenes/spiderman1.png", 
        titulo:"Spiderman",
        consola:"PS5",
        precio:8000
    }


    return(
        <div className="container-cards">
            
            <Cards data={dataProduct}/>
            <Cards src="../imagenes/spiderman1.png" titulo="Fifa 2022" consola="PS5" precio={17000}/>
            <Cards src="../imagenes/spiderman1.png" titulo="Gran turismo 7" consola="PS5" precio={10500} />
            <Cards src="../imagenes/spiderman1.png" titulo="GTA trilogy" consola="PS5" precio={7000}/> 
        </div>
    ) 
} 

export default ListProducts;

