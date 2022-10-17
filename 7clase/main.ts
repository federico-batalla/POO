import { Entrenador} from "./class/Entrenador";
import { Jugador } from "./class/Jugador";
import { Kinesiologo } from "./class/Kinesiologo";
import { Seleccion } from "./class/Seleccion";


let delantero:Jugador = new Jugador("Enzo","Perez",34334935,"01/01/1989","Delantero");
let defensor:Jugador = new Jugador("Matias ","Maidana",35162369,"04/01/1995","Defensor");
let arquero:Jugador = new Jugador("Franco","Armani",57487229,"01/08/1988","Arquero");

let entrenador:Entrenador = new Entrenador("Marcelo","Gallardo",15236987,"09/10/1975");

let kinesiologo:Kinesiologo = new Kinesiologo("Juan","Beltran",16789456,"15/08/1975");

let argentina:Seleccion = new Seleccion("Argentina",defensor,delantero,arquero,entrenador,kinesiologo);
console.log("------integrantes------");
console.log(argentina.tostring());
console.log("-----------------------");
console.log("------Conferencia------");
console.log(argentina.darConferencia(entrenador));
console.log("-----------------------");
console.log("------Partido ------");
console.log(argentina.jugar());