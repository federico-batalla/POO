export class Cliente{
   private nombre:string;
   private apellido:string;
   private dni:number;

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

   setNombre(nombre:string):void{
    this.nombre = nombre;
   }

   setApellido(apellido:string):void{
    this.apellido = apellido;
   }

   setDni(dni:number):void{
    this.dni = dni;
   }

   toString():string{
      return this.getNombre()+" "+ this.getApellido()+" "+this.getDni(); 
   }


}