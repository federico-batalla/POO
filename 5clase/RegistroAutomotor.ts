
class Automovil {
    private patente:string;
    private marca:string;
    private modelo:string;

    constructor(patente:string, marca:string, modelo:string){
        
        this.patente = patente;
        this.marca = marca;
        this.modelo = modelo;
        
    }

    get_Patente():string{
        return this.patente
    }

}






class RegistroAutomotor {
    private listaDeAutos:Automovil[];

    constructor(listaDeAutos:Automovil[]){
        this.listaDeAutos = listaDeAutos;
    }

    get_listaDeAutos():Automovil[]{
        return this.listaDeAutos
    };


    darAlta(auto:Automovil){
        this.listaDeAutos.push(auto);
    }

    darBaja(auto:Automovil):boolean{
        let baja = false
        for (let i = 0; i < this.listaDeAutos.length; i++) {
            
            if(this.listaDeAutos[i].get_Patente() === auto.get_Patente()){
                this.listaDeAutos.splice(i,1);
                baja = true;
            }else{
                baja = false;
            }

        }
        return baja;


        
    }

    
}

let movimientoBaja:boolean = false;

let logan:Automovil = new Automovil("111ppp","Renault","Logan");
let clio:Automovil = new Automovil("222rrr","Renault","Clio");
let ecosport:Automovil = new Automovil("333eee","Ford","Ecosport");
let sandero:Automovil = new Automovil("555ggg","Renault","sandero");

let lista:Automovil[] = [logan,clio,ecosport];

let registro : RegistroAutomotor = new RegistroAutomotor(lista);



console.log(registro.get_listaDeAutos());
movimientoBaja = registro.darBaja(clio);
if(movimientoBaja){
    console.log("se dio de baja el vehiculo");
}else{
    console.log("el vehiculo no se encuentra registrado");
}

console.log(registro.get_listaDeAutos());
registro.darAlta(sandero);
console.log(registro.get_listaDeAutos());



