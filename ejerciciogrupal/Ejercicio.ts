export class Ejercicio {
    private consigna:string;
    private respuestaCorecta:string;
    private puntajeMaximo:number;


    public constructor(consigna:string,respuestaCorrecta:string,puntajeMaximo:number){
        this.consigna = consigna;
        this.respuestaCorecta = respuestaCorrecta;
        this.puntajeMaximo= puntajeMaximo;

    }

    public resueltoCorrectamente(respuesta:string):boolean{
        if (this.respuestaCorecta == respuesta){
            return true;
        }else{
            return false;
        }
    }

    public coregirEjercicio(respuesta:string):number{
        if(this.resueltoCorrectamente(respuesta)){
            return this.getPuntajeMaximo();
        }else{
            return 0;
        }
    }

    public getPuntajeMaximo():number{
        return this.puntajeMaximo;
    }
}