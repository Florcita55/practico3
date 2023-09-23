import "../Estilos/Nombre.css"

function Nombre (){

    return (
        <div className="jugador">
        <p>Nombre del jugador: </p><input className="nombreJugador" type="text"  id="nombre" required="" />
        </div>
    );
}
export default Nombre;