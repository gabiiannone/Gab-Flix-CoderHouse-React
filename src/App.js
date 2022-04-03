import "./App.css";
import React, { useState, useffect } from "react";
import NavBar from "./components/NavBar/NavBar";
import "./logo.svg";
import ItemListContainer from "./components/ItemListContainer/ItemListcontainer";
import { PelisGrid } from "./components/Peliculas/PelisGrid";
//import ItemDetailContainer from './components/ItemDetailcontainer/ItemDetailContainer';

function App() {
  return (
    <header class="titulos">
      <div className="App">
        <NavBar />

        <h1>VIDEO JUEGOS</h1>

        <ItemListContainer />
        <main>
          <h1>PELICULAS</h1>

          <PelisGrid />
        </main>
      </div>
    </header>
  );
}

export default App;
