
import "./App.css";
import React, { useState, useffect } from "react";
import { BrowserRouter, Routes, Route} from "react-router-dom";
import NavBar from "./components/NavBar/NavBar";
import "./logo.svg";
import ItemListContainer from "./components/ItemListContainer/ItemListcontainer";
import  {PelisGrid}  from "./components/Peliculas/PelisGrid";
import ItemDetailContainer from './components/ItemDetailcontainer/ItemDetailContainer';
import NotFoundPage from "./pages/NotFoundPage";
import { MovieDetails } from "./pages/MovieDetails";
import JuegosDetails from "./pages/JuegosDetails";



function App() {
  return (
    <BrowserRouter>
        <div   className="App">
       
        <NavBar />
           
        <Routes>
        
        <Route path="/" element={  <h1  class="titulos" >BIENVENIDOS</h1> }  />
        <Route path="/registrarse" element={ <h1  class="titulos" >REGISTRARSE</h1> }  />
        <Route path="/iniciar_sesion" element={ <h1 class="titulos"  >INICIAR SESION</h1> }  />
        <Route path="/peliculas" element={ <PelisGrid/> }  />
        <Route path="/peliculas/:peliculaId" element={ <MovieDetails/> }  />
        <Route path="series" element={ <h1 class="titulos"  >SERIES</h1> }  />
        <Route path="/video_juegos" element={ <ItemListContainer /> }  />
        <Route path="/video_juegos/:dataId" element={ <JuegosDetails /> }  />
        <Route path="carrito" element={ <h1 class="titulos" >TU CARRITO</h1> }  />
        <Route path="*" element={ <NotFoundPage /> }  />
        
      </Routes>
       </div>
     
    </BrowserRouter>
   
  
  );
}

export default App;
