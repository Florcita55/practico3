import React, { useState } from 'react';
import "../Estilos/Juego.css";
import Contador from './Contador';


function Juego() {
  const [jugadaUsuario, setJugadaUsuario] = useState(null);
  const [jugadaComputadora, setJugadaComputadora] = useState(null);
  const [resultado, setResultado] = useState(null);
  const [victoriasUsuario, setVictoriasUsuario] = useState(0); // Inicializa el contador del usuario en 0
  const [victoriasComputadora, setVictoriasComputadora] = useState(0); // Inicializa el contador de la computadora en 0
  const [intentos, setIntentos] = useState(0);
  const [juegoFinalizado, setJuegoFinalizado] = useState(false);
  const [reiniciarJuego, setReiniciarJuego] = useState(false);

  const jugadasValidas = ["piedra", "papel", "tijera"];

  const obtenerJugadaComputadora = () => {
    const numAleatorio = Math.floor(Math.random() * 3);
    return jugadasValidas[numAleatorio];
  };

  const determinarGanador = (jugadaUsuario, jugadaComputadora) => {
    if (jugadaUsuario === jugadaComputadora) {
      return "Empate";
    } else if (
      (jugadaUsuario === "piedra" && jugadaComputadora === "tijera") ||
      (jugadaUsuario === "papel" && jugadaComputadora === "piedra") ||
      (jugadaUsuario === "tijera" && jugadaComputadora === "papel")
    ) {
      return "¡Ganaste!";
    } else {
      return "Gana la computadora";
    }
  };

  const usuario = (jugada) => {
    if (!juegoFinalizado) {
      const jugadaComp = obtenerJugadaComputadora();
      setJugadaUsuario(jugada);
      setJugadaComputadora(jugadaComp);

      const resultadoJuego = determinarGanador(jugada, jugadaComp);
      setResultado(resultadoJuego);

      if (resultadoJuego === "¡Ganaste!") {
        setVictoriasUsuario(victoriasUsuario + 1);
      } else if (resultadoJuego === "Gana la computadora") {
        setVictoriasComputadora(victoriasComputadora + 1);
      }

      setIntentos(intentos + 1);

      if (victoriasUsuario === 3 || victoriasComputadora === 3 || intentos === 5) {
        setJuegoFinalizado(true);
      }
    }
  };

  const reiniciarPartida = () => {
    setVictoriasUsuario(0);
    setVictoriasComputadora(0);
    setIntentos(0);
    setJuegoFinalizado(false);
    setJugadaUsuario(null);
    setJugadaComputadora(null);
    setResultado(null);
    setReiniciarJuego(!reiniciarJuego); // Cambiar el estado para forzar una actualización
  };

  return (
    <div>
      <p>Selecciona tu jugada:</p>
      <div>
        <button className="boton" onClick={() => usuario("piedra")}>
        <img src="../Imagenes/piedra feliz.jpg" alt="Piedra" />
        </button>
        <button className="boton" onClick={() => usuario("papel")}>
            <img src="../Imagenes/papel feliz.png" alt="Papel" />
        </button>
        <button className="boton" onClick={() => usuario("tijera")}>
          <img src="../Imagenes/tijera feliz.jpg" alt="Tijera" />
        </button>
      </div>

      
      {jugadaUsuario && (
        <p className='jugada'>Tu jugada: {jugadaUsuario}</p>
      )} 
      {jugadaComputadora && (
        <p className='jugada'>Jugada de la computadora: {jugadaComputadora}</p>
      )}
      {resultado && <p className='jugada'>Resultado: {resultado}</p>}

      <Contador victoriasUsuario={victoriasUsuario} victoriasComputadora={victoriasComputadora} />
      {juegoFinalizado ? (
        <div>
          <p className='resultado'> ¡Juego finalizado! {victoriasUsuario === 3 ? "¡Ganaste el juego!" : "Ganó la computadora."}</p>
          <button className= "reiniciar" onClick={() => reiniciarPartida()}>Reiniciar Partida</button>
        </div>
      ) : null}
    
    </div>
  );
}

export default Juego;