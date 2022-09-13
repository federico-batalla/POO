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


    prenderApagar() {
        if (this.estaPrendido){
            this.estaPrendido = false;
            console.log("se prendio el auto")

        }else{
            this.estaPrendido = true;
            console.log("se apaga el auto")
        }
    }

    cargarCombustible(){
        this.combustibleActual++;
    }
    verCombustibleActual(){
        console.log("combustible actual"+this.combustibleActual);
    }

    avanzar(){
        this.combustibleActual--
        console.log("el auto avanzo 10 mt");
    }





}