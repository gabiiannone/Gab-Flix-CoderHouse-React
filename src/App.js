
import "./App.css";
import React from "react";

import { BrowserRouter, Routes, Route} from "react-router-dom";
import NavBar from "./components/NavBar/NavBar";
import "./logo.svg";
import ItemListContainer from "./components/ItemListContainer/ItemListcontainer";

import Login from "./pages/Login/Login";

import NotFoundPage from "./pages/NotFoundPage";
import { MovieDetails } from "./pages/MovieDetails";
import JuegosDetails from "./pages/JuegosDetails";

import CartWidget from "./components/CartWidget/CartWidget";
import CartProvider, { CartContext } from "./context/CartContext";
import { PeliPrincipal } from "./components/Peliculas/PeliPrincipal";


import Footer from "./components/footer/footer";



function App() {
  return (
    
    
    <CartProvider>
      <BrowserRouter>
          <div   className="App">
          
          <NavBar />
          
          <Routes>
        
          <Route path="/" element={  <h1  class="titulos" >BIENVENIDOS</h1> }  />
          <Route path="/registrarse" element={ <h1  class="titulos" >REGISTRARSE</h1> }  />
          <Route path="/iniciar_sesion" element={  <Login/> }  />
          
          <Route path="/peliculas" element={ <PeliPrincipal/> } />
          <Route exact path="/peliculas/:peliculaId" element={ <MovieDetails/> }  />
          
          <Route path="series" element={ <h1 class="titulos"  >SERIES</h1> }  />
          
          <Route path="/video_juegos" element={ <ItemListContainer /> }  />
          <Route path="/video_juegos/:id" element={<JuegosDetails/> }  />
          <Route path="/carrito" element={ <CartWidget/> }  />
        
          <Route path="*" element={ <NotFoundPage /> }  />
        
          </Routes>
          <Footer/>   
            </div>
        
      
        </BrowserRouter>
       </CartProvider>
        
     
   
  );
}

export default App;
