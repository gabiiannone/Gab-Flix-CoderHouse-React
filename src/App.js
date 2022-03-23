import './App.css';
import  NavBar from './components/NavBar/NavBar';
import './logo.svg';
import ListProducts from './components/ListProducts/ListProducts'; 



function App() {
  return (
    <header class="titulos">
          
         
            
    <div className="App">
     <NavBar />
     <h1>VIDEO JUEGOS</h1>
    
     <ListProducts />
  
    </div>
    </header>
  );
}

export default App;
