import './App.css';
import  NavBar from './components/NavBar';
import './logo.svg';
import Cards from './components/Cards';


function App() {
  return (
    <header class="titulos">
          
         
            
    <div className="App">
     <NavBar />
     <h1>VIDEO JUEGOS</h1>
     <Cards src="spiderman1.png" titulo="Spiderman" consola="PS5" precio={8000}/>
     <Cards src="../imagenes/spiderman1.png" titulo="Fifa 2022" consola="PS5" precio={17000}/>
     <Cards src="../imagenes/spiderman1.png" titulo="Gran turismo 7" consola="PS5" precio={10500} />
     <Cards src="../imagenes/spiderman1.png" titulo="GTA trilogy" consola="PS5" precio={7000}/> 
     
     
    </div>
    </header>
  );
}

export default App;
