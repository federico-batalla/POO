import { Libro } from "./Libro";


export class GestorLibros{

    private libros : Libro[] = new Array<Libro>;
    private nombre : string;

    constructor(nombre:string,libro?:Libro[]){
        this.nombre = nombre;
        if (libro != undefined)
           this.libros = libro;
    }
          
    

    getIndex(titulo:string):number{
        let posicion:number = -1;
        for (let index:number = 0; index < this.libros.length; index++) {
             if (this.libros[index].getTitulo() === titulo) 
                posicion = index;   
        }
        return posicion;
    }

    
}