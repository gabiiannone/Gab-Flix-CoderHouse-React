import React from "react"
import Button from '@mui/material/Button'
import {Link} from "react-router-dom";
import './NavBar.css'
import CartWidget from '../CartWidget/CartWidget'


function NavBar() {
    return(
     <header className='mainHeader' >
        <div className='containerLogo'>
            <img className="imagenHeader" src="Logo1.png"  />
        </div>
        <ul className='navbar'>
             <li> <Button variant="contained">
                         <Link to="/">Home</Link>
                 </Button> 
            </li>
            <li> <Button variant="contained">
                         <Link to="/registrarse">Registrarse</Link>
                </Button> 
            </li>
            <li> <Button variant="contained">
                         <Link to="/iniciar_sesion">Iniciar Sesion</Link> 
                 </Button>
            </li>
            <li> <Button variant="contained" >
                        <Link to="/peliculas">Peliculas</Link>
                </Button>
            </li>
            <li> <Button variant="contained">
                        <Link to="/series">Series</Link>
                </Button>
            </li>
            <li> <Button variant="contained" >
                        <Link to="/video_juegos">Video juegos</Link>
                </Button>
            </li>
        </ul>
        <Link to="/carrito"><CartWidget/></Link> 
       
     </header>
    )


}
export default NavBar