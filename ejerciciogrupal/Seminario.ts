import { Alumno } from "./Alumno";

export class Seminario { 
    private tema:string;
    private temasRequisito:string[];
    private alumnos:Alumno[];

    constructor(tema:string){
        this.tema = tema;

    }

    public addRequisito(requisito:string):boolean{
        let existe:boolean=false;
        for (let index = 0; index < this.temasRequisito.length; index++) {
            if(requisito == this.temasRequisito[index]){
                existe=false;
                
            }else{
                existe=true;
                this.temasRequisito.push(requisito);
            }
            
        }
        return existe;
    }
}