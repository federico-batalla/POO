
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

    darAlta(auto:Automovil){
        this.listaDeAutos.push(auto);
    }

    darBaja(auto:Automovil):boolean{
        let alta = false
        for (let i = 0; i < this.listaDeAutos.length; i++) {
            
            if(this.listaDeAutos[i].get_Patente === auto.get_Patente){
                this.listaDeAutos.splice(i,1);
                alta = true;
            }

        }
        return alta;


        
    }
}