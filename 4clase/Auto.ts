

export class Auto {

    private estaPrendido: boolean;
    private combustibleActual: number;
    private marca: string;
    private modelo: string;

    constructor(marca: string, modelo: string) {
        this.marca = marca;
        this.modelo = modelo;
        this.estaPrendido = false
        this.combustibleActual = 10
    }


    get_marca(): string {
        return this.marca;
    }

    set_marca(marca: string) {
        this.marca = marca;
    }

    get_modelo(): string {
        return this.modelo;
    }

    set_modelo(marca: string): void {
        this.marca = this.modelo;
    }

    get_combustibleActual(): number {
        return this.combustibleActual;
    }

    get_estaPrendido(): boolean {
        return this.estaPrendido;
    }


    prenderApagar(): void {
        if (this.estaPrendido) {
            this.estaPrendido = false;
            console.log("se apago el auto");

        } else {
            this.estaPrendido = true;
            console.log("se prendio el auto");
        }
    }

    cargarCombustible(): void {
        if (this.combustibleActual == 10) {
            console.log("tanque lleno");
        } else {
            console.log("se cargo 1 de combustible")
            this.combustibleActual++;
        }
    }



    avanzar(): void {
        if (this.combustibleActual > 0) {
            this.combustibleActual--;
            console.log("el auto avanzo 10 mt");
        } else {
            console.log("debe cargar combustible");
        }

    }


}

let miAuto = new Auto("Ford", "falcon");


console.log("mi auto es un " + miAuto.get_marca() + " " + miAuto.get_modelo());
miAuto.prenderApagar();
for (let index = 0; index < 11; index++) {

    miAuto.avanzar();
}

miAuto.get_combustibleActual;
miAuto.cargarCombustible();
miAuto.cargarCombustible();
console.log("combustible actual "+miAuto.get_combustibleActual());
miAuto.prenderApagar();