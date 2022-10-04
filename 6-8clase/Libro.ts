export class Libro{
    private titulo:string;
    private autor:string;
    private genero:string;

    constructor(titulo:string,autor:string,genero:string){
        this.titulo = titulo;
        this.autor = autor;
        this.genero = genero;
    }

    getTitulo():string{
        return this.titulo;
    }

    setTitulo(titulo:string):void{
        this.titulo = titulo;
    }

    toString():string{
        return "Titulo: "+this.titulo+"\n"+"Autor: "+this.autor+"\n"+"Genero: "+this.genero;
    }


    
}