import { Jugador } from "./Jugador";
import { Persona } from "./Persona";

export class Entrenador extends Persona{

    private cargo:string

    constructor(nombre:string,apellido:string,pasaporte:number,fechaNacimiento:string){

        super(nombre,apellido,pasaporte,fechaNacimiento);
        this.cargo = "Entrenador";
    }

    darOrden(jugador:Jugador,posicion:string):string{
            jugador.setPosicion(posicion);
            return jugador.getNombre() +" "+ jugador.getApellido()+" cambio de posicion a "+posicion;
    }

    darFormacion():string{
        return "la formacion del equipo es 4-3-1-2";
    }

    getCargo():string{
        return this.cargo;
    }

    toString(): string {
        return"=============="+"\n\n"+"Nombre y Apellido: "+this.getNombre()+" "+this.getApellido()+"\n"+"Pasaporte: "+this.getPasaporte()+"\n"+"fecha de nacimiento: "+this.getFechaNacimiento()+"\n"+"Cargo: "+this.getCargo();
    }
}