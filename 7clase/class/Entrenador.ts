import { Jugador } from "./Jugador";
import { Persona } from "./Persona";

export class Entrenador extends Persona{

    constructor(nombre:string,apellido:string,pasaporte:number,fechaNacimiento:string){
        super(nombre,apellido,pasaporte,fechaNacimiento);
    }

    darOrden(jugador:Jugador,posicion:string):string{
            jugador.setPosicion(posicion);
            return jugador.getNombre() +" "+ jugador.getApellido()+" cambio de posicion a "+posicion;
    }

    darFormacion():string{
        return "la formacion del equipo es 4-3-1-2";
    }
}