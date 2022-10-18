export class Cliente{
   protected nombre:string;
   protected apellido:string;
   protected dni:number;

   constructor(nombre:string,apellido:string,dni:number){
        this.nombre = nombre;
        this.apellido = apellido;
        this.dni = dni;
   }

   getNombre():string{
    return this.nombre;
   }

   getApellido():string{
    return this.apellido;
   }

   getDni():number{
    return this.dni;
   }
}