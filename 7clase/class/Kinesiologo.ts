import { Jugador } from "./Jugador";
import { Persona } from "./Persona";

export class Kinesiologo extends Persona{
    private titulo:string;

    constructor(nombre:string,apellido:string,pasaporte:number,fechaNacimiento:string,titulo:string){
        super(nombre,apellido,pasaporte,fechaNacimiento);
        this.titulo = titulo;
    }

    aplicarTratamiento(jugador:Jugador):string{
        jugador.setLesion(false);
        return "Se aplico el tratamiento a "+jugador.getNombre()+" "+jugador.getApellido()+" y se recuero de su lesion";
    }
}