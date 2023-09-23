
import "../Estilos/Contador.css"

function Contador ({victoriasUsuario, victoriasComputadora}){

    return(
        <div>
            <p className="contador">CONTADOR DE VICTORIAS</p>
            <p className="contador">Vos: {victoriasUsuario}</p>
            <p className="contador">Computadora: {victoriasComputadora}</p>

        </div>
    );
}

export default Contador;