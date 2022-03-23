import React from "react"
import Button from '@mui/material/Button'
import './NavBar.css'
import CartWidget from '../CartWidget/CartWidget'


function NavBar() {
    return(
     <header className='mainHeader' >
        <div className='containerLogo'>
            <img className="imagenHeader" src="Logo1.png"  />
        </div>
        <ul className={'navbar'}>
            <li> <Button variant="contained">Registrarse</Button> </li>
            <li> <Button variant="contained">Iniciar Sesion</Button></li>
            <li> <Button variant="contained" >Peliculas</Button></li>
            <li> <Button variant="contained">Series</Button></li>
            <li> <Button variant="contained" >Video juegos</Button></li>
        </ul>
        <CartWidget/>
       
     </header>
    )


}
export default NavBar