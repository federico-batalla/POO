export class Persona{
    protected nombre:string;
    protected apellido:string;
    protected pasaporte:number;
    protected fechaNacimiento:string;

    constructor(nombre:string,apellido:string,pasaporte:number,fechaNacimiento:string){
        this.nombre = nombre;
        this.apellido = apellido;
        this.pasaporte = pasaporte;
        this.fechaNacimiento = fechaNacimiento;
    }

    getNombre():string{
        return this.nombre
    }

    getApellido():string{
        return this.apellido
    }

    getPasaporte():number{
        return this.pasaporte
    }

    getFechaNacimiento():string{
        return this.fechaNacimiento
    }

   
}