//Auto
//	Funciones
//		prenderApagar
//		PrenderApagarLuces
//		cargarCombustible
//		acelerar
//		frenar
//		
//	Estado
//		estaPrendido
//		combustibleActual
//		estaPrendidoLuces
//      velocidadActual
//

class Auto {
    
    estaPrendido : boolean = false;
    combustibleActual : number = 10;
    marca:string
    modelo:string;

    constructor(marca:string,modelo:string){
        this.marca = marca;
        this.modelo = modelo;
    }


    prenderApagar():void {
        if (this.estaPrendido){
            this.estaPrendido = false;
            console.log("se prendio el auto")

        }else{
            this.estaPrendido = true;
            console.log("se apago el auto")
        }
    }

    cargarCombustible():void{
        if(this.combustibleActual==10){
            console.log("tanque lleno")
        }else{
        this.combustibleActual++;
    }
    }
    verCombustibleActual():void{
        console.log("combustible actual"+this.combustibleActual);
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