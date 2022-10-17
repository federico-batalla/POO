import { Entrenador} from "./class/Entrenador";
import { Jugador } from "./class/Jugador";


let delantero:Jugador = new Jugador("Enzo","Perez",34334935,"01/01/1989","Delantero");
let defensor:Jugador = new Jugador("Matias ","Maidana",35162369,"04/01/1995","Defensor");
let arquero:Jugador = new Jugador("Franco","Armani",57487229,"01/08/1988","Arquero");

let entrenador:Entrenador = new Entrenador("Marcelo","Gallardo",15236987,"09/10/1975");

console.log(delantero.entrenar());

console.log(delantero.jugarLeve());

console.log(defensor.jugarFuerte());

console.log(defensor.jugarLeve());

console.log(entrenador.darFormacion());

console.log(entrenador.darOrden(delantero,"Defensor"));

console.log(delantero.toString());