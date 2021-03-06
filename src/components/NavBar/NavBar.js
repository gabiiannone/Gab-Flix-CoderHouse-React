import React from "react"
import Button from '@mui/material/Button'
import {Link} from "react-router-dom";
import './NavBar.css'
import CartWidget from '../CartWidget/CartWidget'
import cartImg from '../../imagenes/carritodecompras.png'
import { useContext } from "react";
import { CartContext } from "../../context/CartContext";


function NavBar() {

    const { cantidad, cartProducts} = useContext(CartContext);
  
    return(

       
     <header className='mainHeader' >
        <div className='containerLogo'>
            <img className="imagenHeader" src="Logo1.png"  />
        </div>
        <ul className='navbar'>
             <li> <Button variant="contained">
                         <Link className="link" to="/">Home</Link>
                 </Button> 
            </li>
            <li> <Button variant="contained">
                         <Link className="link"to="/registrarse">Registrarse</Link>
                </Button> 
            </li>
            <li> <Button variant="contained">
                         <Link className="link" to="/iniciar_sesion">Iniciar Sesion</Link> 
                 </Button>
            </li>
            <li> <Button variant="contained" >
                        <Link className="link" to="/peliculas">Peliculas</Link>
                </Button>
            </li>
            <li> <Button variant="contained">
                        <Link className="link" to="/series">Series</Link>
                </Button>
            </li>
            <li> <Button variant="contained" >
                        <Link className="link" to="/video_juegos">Video juegos</Link>
                </Button>
            </li>
        </ul>
        <Link to="/carrito"> 
        <img src={cartImg}/>
        <span className='itemTotal'>  {cartProducts.length > 0 && cantidad()}</span>
      
       
        </Link> 
       
     </header>
    )


}
export default NavBar