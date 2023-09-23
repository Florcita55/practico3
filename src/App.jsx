
import './App.css';
import Nombre from './Componentes/Nombre';
import Juego from './Componentes/Juego';

function App() {

  return (
    <div className="App">
      <header className='App-header'>
      <p className='titulo'>PIEDRA, PAPEL O TIJERA</p>
    
      <Nombre ></Nombre>
      <Juego></Juego>

      </header>
    </div>
  );
}

export default App;
