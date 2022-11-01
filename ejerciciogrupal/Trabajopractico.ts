import { Ejercicio } from "./ejercicio";

export class TrabajoPractico{

    private tema:string;
    protected ejercicios:Ejercicio[];
    private puntajeDeAprobacion:number;

    constructor(tema:string,puntajeDeAprobacion:number){
        this.tema = tema;
        this.puntajeDeAprobacion = puntajeDeAprobacion;
        this.ejercicios=new Array <Ejercicio>;
        
    }

    public addEjercicio(ejercicio:Ejercicio):boolean{
        let existe:boolean=false;
        for (let index = 0; index < this.ejercicios.length; index++) {
            if(ejercicio == this.ejercicios[index]){
                existe=false;
                
            }else{
                existe=true;
                this.ejercicios.push(ejercicio);
            }
            
        }
        return existe;
    }

    public corregirTrabajoPractico(respuestas:string[]):number{
        
        
    }

    public estaAprobado(respuestas:string[]):boolean{
        

    }

    public getTema():string{
        return this.tema;
    }

    public esDeTema():string{
        return "el  Trabajo Practico es de tema: "+this.getTema();
    }

    public getEjercicio():Ejercicio[]{
        return this.ejercicios;
    }

}