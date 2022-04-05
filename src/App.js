import "./App.css";
import React, { useState, useffect } from "react";
import { BrowserRouter, Routes, Route} from "react-router-dom";
import NavBar from "./components/NavBar/NavBar";
import "./logo.svg";
import ItemListContainer from "./components/ItemListContainer/ItemListcontainer";
import { PelisGrid } from "./components/Peliculas/PelisGrid";
//import ItemDetailContainer from './components/ItemDetailcontainer/ItemDetailContainer';
import NotFoundPage from "./pages/NotFoundPage";


function App() {
  return (
    <BrowserRouter>
      <header class="titulos">
         <div className="App">

        <NavBar />

        
       
      <Routes>
        <Route path="/" element={ <ItemListContainer /> }  />
        <Route path="/registrarse" element={ <h1>REGISTRARSE</h1> }  />
        <Route path="/iniciar_sesion" element={ <h1>INICIAR SESION</h1> }  />
        <Route path="peliculas" element={ <h1>PELICULAS</h1> }  />
        <Route path="series" element={ <h1>SERIES</h1> }  />
        <Route path="video_juegos" element={ <h1>VIDEO JUEGOS</h1> }  />
        <Route path="carrito" element={ <h1>TU CARRITO</h1> }  />
        <Route path="*" element={ <NotFoundPage /> }  />
      </Routes>
       <main>
       <h1>PELICULAS</h1>  
       <PelisGrid/>

             
            </main>
        </div>
      </header>
    </BrowserRouter>
  );
}

export default App;
