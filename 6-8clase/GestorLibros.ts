import { Libro } from "./Libro";


export class GestorLibros{

    private libros : Libro[] = new Array<Libro>;
    private nombre : string;

    constructor(nombre:string,libro?:Libro[]){
        this.nombre = nombre;
        if (libro != undefined)
           this.libros = libro;
    }
          
    

    private getIndex(titulo:string):number{
        let posicion:number = -1;
        for (let index:number = 0; index < this.libros.length; index++) {
             if (this.libros[index].getTitulo() === titulo) 
                posicion = index;   
        }
        return posicion;
    }

    ingresarLibro(libro:Libro):void{
        this.libros.push(libro);
    }

    consultarLibro(titulo:string):boolean{
        if (this.getIndex(titulo) > -1) 
            return true;
        return false ;   
        
    }

    modificarTituloLibro(titulo:string,tituloNuevo:string):void{
        if (this.getIndex(titulo) > -1) 
            this.libros[this.getIndex(titulo)].setTitulo(tituloNuevo)   
        
    }

    eliminarLibro(titulo:string):void{
        if (this.getIndex(titulo))
            this.libros.splice(this.getIndex(titulo),1)    
        
    }
}