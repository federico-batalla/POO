

class Auto {
    
    estaPrendido : boolean = false;
    combustibleActual : number = 10;
    marca:string;
    modelo:string;

    constructor(marca:string,modelo:string){
        this.marca = marca;
        this.modelo = modelo;
    }


    prenderApagar():void {
        if (this.estaPrendido){
            this.estaPrendido = false;
            console.log("se apago el auto");

        }else{
            this.estaPrendido = true;
            console.log("se prendio el auto");
        }
    }

    cargarCombustible():void{
        if(this.combustibleActual==10){
            console.log("tanque lleno");
        }else{
        console.log("se cargo 1 de combustible")
        this.combustibleActual++;
    }
    }
    verCombustibleActual():void{
        console.log("combustible actual "+this.combustibleActual);
    }

    avanzar():void{
        if(this.combustibleActual>0){
        this.combustibleActual--;
        console.log("el auto avanzo 10 mt");
        }else{
            console.log("debe cargar combustible");
        }
    
    }


}

let miAuto = new Auto("Ford","falcon");


console.log("mi auto es un " + miAuto.marca + " "+ miAuto.modelo);
miAuto.prenderApagar();
for (let index = 0; index < 11; index++) {
    
    miAuto.avanzar();
}

miAuto.verCombustibleActual();
miAuto.cargarCombustible();
miAuto.cargarCombustible();
miAuto.verCombustibleActual();
miAuto.prenderApagar();




