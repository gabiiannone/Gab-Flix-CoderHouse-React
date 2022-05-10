
import "./App.css";
import React from "react";

import { BrowserRouter, Routes, Route} from "react-router-dom";
import NavBar from "./components/NavBar/NavBar";
import "./logo.svg";


import Login from "./pages/Login/Login";

import NotFoundPage from "./pages/NotFoundPage";

import { PeliPrincipal } from "./components/Peliculas/PeliPrincipal";
import { MovieDetails } from "./pages/MovieDetails";

import ItemListContainer from "./components/ItemListContainer/ItemListcontainer";
import JuegosDetails from "./pages/JuegosDetails";
import CartWidget from "./components/CartWidget/CartWidget";
import CartProvider, { CartContext } from "./context/CartContext";



import Footer from "./components/footer/footer";

import SeriePrincipal from "./components/Series/SeriePrincipal";
import SeriesDetails from "./pages/SeriesDetails";

import Portada from "./components/Portada/Portada";

import Slider from "./components/Slider/Slider";



function App() {
  return (
    
    

      <BrowserRouter>
      
      <CartProvider>
          <div   className="App">
          
          <NavBar />
          
          <Routes>
        
          <Route path="/" element={ <Portada/>  }  />
         
          <Route path="/registrarse" element={ <h1  class="titulos" >REGISTRARSE</h1> }  />
          <Route path="/iniciar_sesion" element={  <Login/> }  />
          
          <Route path="/peliculas" element={ <PeliPrincipal/> } />
          <Route exact path="/peliculas/:peliculaId" element={ <MovieDetails/> }  />
          
          <Route path="/series" element={ <SeriePrincipal/> }  />
          <Route path="/series/:id" element={<SeriesDetails/> }  />
          
          <Route path="/video_juegos" element={ <ItemListContainer /> }  />
          <Route path="/video_juegos/:id" element={<JuegosDetails/> }  />
          <Route path="/carrito" element={ <CartWidget/> }  />
        
          <Route path="*" element={ <NotFoundPage /> }  />
        
          </Routes>
          <Slider/> 
          <Footer/>   
          
            </div>
        
            </CartProvider>
        </BrowserRouter>
  
        
     
   
  );
}

export default App;
