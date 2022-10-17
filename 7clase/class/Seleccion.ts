import { Entrenador } from "./Entrenador";
import { Jugador } from "./Jugador";
import { Kinesiologo } from "./Kinesiologo";

export class Seleccion{
    private defensor:Jugador;
    private delantero:Jugador;
    private arquero:Jugador;
    private entrenador:Entrenador;
    private kinesiologo:Kinesiologo;
    private seleccion:string;

    constructor(seleccion:string,defensor:Jugador,delantero:Jugador,arquero:Jugador,entrenador:Entrenador,kinesiologo:Kinesiologo){

        this.defensor = defensor;
        this.delantero = delantero;
        this.arquero = arquero;
        this.entrenador = entrenador;
        this.kinesiologo = kinesiologo;
        this.seleccion = seleccion;

    }

    private getSeleccion():string{
        return this.seleccion;
    }

    tostring():string{
        return this.getSeleccion() +"\n"+this.defensor.toString()+"\n"+this.delantero.toString()+"\n"+this.arquero.toString()+"\n"+this.entrenador.toString()+"\n"+this.kinesiologo.toString();
    }

    darConferencia(entrenador:Entrenador):string{
        return entrenador.darFormacion();
    }

    jugar():string{
        return this.arquero.jugarLeve()+" / "+this.defensor.jugarLeve()+" / "+this.delantero.jugarFuerte()+"\n"+this.kinesiologo.aplicarTratamiento(this.delantero)+"\n"+this.entrenador.darOrden(this.delantero,"defensor");
        
        
    };

    


}