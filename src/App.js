import './App.css';
import React, {useState, useffect} from 'react';
import  NavBar from './components/NavBar/NavBar';
import './logo.svg';
import ItemListContainer from './components/ItemListContainer/ItemListcontainer'; 




function App() {

  
  return (
    <header class="titulos">
          
         
            
    <div className="App">
     <NavBar />
     <h1>VIDEO JUEGOS</h1>
    
     <ItemListContainer />
     <ItemListContainer />
     <ItemListContainer />
     <ItemListContainer />
     <ItemListContainer />
     <ItemListContainer />
    </div>
    </header>
  );
}

export default App;
