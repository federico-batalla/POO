import { TrabajoPractico } from "./Trabajopractico";

export class Alumno{
    private nombre:string;
    private trabajosPracticos:TrabajoPractico[];
    private respuestas:Array <Array<string>>;

    constructor(nombre:string){
        this.nombre = nombre;

    }

    public realizarTrabajoPractico(trabajosPractico:TrabajoPractico,respuesta:string[]):boolean{

        
    }
}