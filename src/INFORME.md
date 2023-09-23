# Juego de piedra, papel o tijera

_Este proyecto es el resultado del tercer trabajo práctico del curso "Páginas web con Componentes Dinámicos" del programa nacional de formación y capacitación "Argentina Programa" dictado por profesores de FAMAF- UNC_

## Comenzando 🚀

Este proyecto es una propuesta del juego tradicional del "piedra,  papel o tijera" entre el usuario y la PC que juega de manera aleatoria, con la particularidad de ser elaborad con REACT. 

La manera de utlizar la página es muy intuitiva: 
Se presenta un campo de texto en el que el usuario debe ingresar su nombre. Luego se encuentran 3 botones, que son las opciones de jugada para el usuario, debajo de dichos botones se muestra el resultado de la jugada, y con ello cambia tambien el contador de las victorias. 
Una vez alcanzadas 3 victorias de cualquiera de los dos oponentes se comunica la finalizacion del juego y el ganador del mismo.
En ese caso aparece un boton de Reiniciar para poder regresar  de cero las jugadas.


## Descripcion del proceso ⚙️

Con los trabajos practicos numero 1 y 2 innové en la utlilizacion de HTML, CSS y Javascript de manera vinculada. Este nuevo desafío implica realizar este juego utlicanzdo REACT. 

### REACT 🔩

Tomé como guia el trabajo practico 2. Lo primero que hice fue separar en componentes, y almacenarlos en una carpeta con el nombre Componentes. 
A cada componente le copié el codigo HTML del practico 2, traduciendolo con la página indicada en las clases teóricas (citada en el apartado de consultados) para que aparecieran en pantalla los distintos elementos.

A partir de ahi comenzó lo más dificilpara mi que fue "adaptar" el codigo js que da las funcionalidades.

* El primer componente es Nombre: le gragué texto y el campo de texto para ingresar el nombre. No supe como restringir el hecho de que si o si deba ingresar un nombre para jugar.

* El segundo componente es Juego:
    - Declare las constantes utilizando useState.
    - Readecué la funcion de obtenerJugadaComputadora declarandola como constante, siguiendo las indicaciones de chat GPT.
    - Lo mismo hice con determinarGanador, que es casi igual a la funcion que tenia e el tp2 con la diferencia de que va indicando en pantalla el resultado de cada jugada.
    - Las constantes usuario y reiniciarPartida las hice con ayuda de chat GPT.
    - Importé Contador para poder vincularlo. Porque sino no se actualizaba. Pero cuando lo hice me aparecia 2 veces el contador y se actualizaba uno solo, consulté a chat GPT y me indicaba que controlara la:
                "Renderización duplicada del            componente Juego: Asegúrate de que el componente Juego no se esté renderizando dos veces en tu aplicación. Puede ocurrir si lo estás incluyendo en múltiples lugares o en el mismo lugar de tu aplicación."
    Asi eliminé de "App.jsx" la importacion de Contador, por lo cual quedaron solo Nombre y Juego como subcomponentes, y asíquedó funcioando un solo contador de victorias.


    * Consulté a Chat GPT, vi tutoriales en Youtube y no logré que quedaran bien las imágenes de los botones.

    * También me hubiese gustado poder usar el nombre igresado por el jugador, por ejemplo para anunciar al ganador como tenia en el tp2, pero no supe hacerlo.

    * En un primer momento habia creado un componente para Reiniciar, pero luego lo resolvi dentro del componente juego.


### ESTILO ⌨️
Tomé como base tomé la hoja de estilo del práctico anterior, copié:

* el formato del campo de texto para que el/la usuario/a ingrese su nombre. Que tambien lo segui con algunas modificaciones para el resultado de las jugadas
 * el estilo del boton de reiniciar, solo le agregue negrita y le cambie el color;
 * redondié mas los bordes y agrande los tamaños de letra.
 
* A cada componente le importe una hoja de estilo. Las almacene tambien en una misma carpeta llamada "Estilos".
* Mantuve el formato de css de App que centra todo (quite las  idicaciones de margin que traiadel css del tp2 ) solo le cambie un poco el color .

* Fui moviendo el orden de los elementos sobre todo el del boton de reiniciar y los resultados para que me quedara como el tp2, que me parece el orden mas simple para el usuario.

Me hubiese gustado agregarle mejoras esteticas, como la transicon a los botones  otras cosas de colores, porque quedó bastante opaco y aburrido.



## Pruebas⚙️
* Para lograr que funcionara tuve que resolver varios errores, la mayoria los resolvi con ayuda de chat GPT, algunos de ellos fueron: 
```
El problema en tu código parece estar relacionado con la llamada a la función obtenerJugadaComputadora y la función determinarGanador. Estas funciones están definidas dentro del componente Juego, pero las estás llamando antes de definirlas en tu código. Esto puede causar errores y resultados inesperados.

Para solucionar este problema, debes reorganizar tu código de manera que las funciones obtenerJugadaComputadora y determinarGanador se definan antes de que sean llamadas en el componente.

```
Por ello lo reordené como quedo ahora.

Tambien tuve muchos errores con el useState. 



## Construido con 🛠️


* [Visual Estudio Code ](http://www.dropwizard.io/1.0.2/docs/) - Editor de código fuente


## Consultado 📖

En numerosas oportunidades consulté dudas al [Chat GPT](https://chat.openai.com/)

Para traducir el HTML a JSX utilicé [transform](https://transform.tools/html-to-jsx) indicada en el tutorial recomendado por el profe del teorico: [react.dev](https://es.react.dev/learn/writing-markup-with-jsx#converting-html-to-jsx)


Fueron fundamentales las clases teóricas y prácticas del curso.


## Autora ✒️


* **Milagros Florencia Chavez** - *Estudiante del "Argentina Programa"* - [Florcita55](https://github.com/Florcita55)

---
