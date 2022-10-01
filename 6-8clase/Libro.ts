export class Libro{
    private titulo:string;
    private autor:string;
    private genero:string;

    constructor(titulo:string,autor:string,genero:string){
        this.titulo = titulo;
        this.autor = autor;
        this.genero = genero;
    }

    toString():string{
        return this.titulo+" "+this.autor+" "+this.genero
    }

}