import { Jugador } from "./Jugador";
import { Persona } from "./Persona";

export class Kinesiologo extends Persona{
    
    private cargo:string

    constructor(nombre:string,apellido:string,pasaporte:number,fechaNacimiento:string){
        super(nombre,apellido,pasaporte,fechaNacimiento);
        this.cargo = "Kinesiologo";
    }

    getCargo():string{
        return this.cargo;
    }

    aplicarTratamiento(jugador:Jugador):string{
        jugador.setLesion(false);
        return "Se aplico el tratamiento a "+jugador.getNombre()+" "+jugador.getApellido()+" y se recuero de su lesion";
    }

    toString(): string {
        return"=============="+"\n\n"+"Nombre y Apellido: "+this.getNombre()+" "+this.getApellido()+"\n"+"Pasaporte: "+this.getPasaporte()+"\n"+"fecha de nacimiento: "+this.getFechaNacimiento()+"\n"+"Cargo: "+this.getCargo();
    }
}