import { Persona } from "./Persona";

export class Jugador extends Persona{
    private posicion:string;
    private lesion:boolean;
    	
    constructor(nombre:string,apellido:string,pasaporte:number,fechaNacimiento:string,posicion:string){
        super(nombre,apellido,pasaporte,fechaNacimiento);
        this.lesion = false;
        this.posicion = posicion;
    }

    getPosicion():string{
        return this.posicion;
    }
    setPosicion(posicion:string):void{
        this.posicion = posicion;
    }

    getLesion():boolean{
        return this.lesion;
    }

    setLesion(lesion:boolean):void{
        this.lesion = lesion;
    }

    entrenar():string{
        return this.getNombre()+" "+this.getApellido()+" entreno en "+this.getPosicion();
    }

    jugarLeve():string{
        if(this.getLesion()){
            return this.getNombre()+" "+this.getApellido()+" esta lesionado, aplique un tratamiento con el masajista"
        }else{

            return this.getNombre()+" "+this.getApellido()+" jugo el partido";
        }
        
    }
    jugarFuerte():string{
        if(this.getLesion()){
            return this.getNombre()+" "+this.getApellido()+" esta lesionado, aplique un tratamiento con el masajista"
        }else{
            this.setLesion(true); 
            return this.getNombre()+" "+this.getApellido()+" jugo el partido y se lesiono"
        }
    }

    toString():string{
        return "=============="+"\n\n"+"Nombre y Apellido: "+this.getNombre()+" "+this.getApellido()+"\n"+"Pasaporte: "+this.getPasaporte()+"\n"+"fecha de nacimiento: "+this.getFechaNacimiento()+"\n"+"Lesion: "+ this.getLesion()+"\n"+"Posicion: "+this.getPosicion();
    }


}
