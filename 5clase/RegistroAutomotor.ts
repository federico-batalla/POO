
class Automovil {
    private patente: string;
    private marca: string;
    private modelo: string;

    constructor(patente: string, marca: string, modelo: string) {

        this.patente = patente;
        this.marca = marca;
        this.modelo = modelo;

    }

    get_Patente(): string {
        return this.patente;
    }

    get_marca(): string {
        return this.marca;
    }

    get_modelo(): string {
        return this.modelo;
    }

    set_Patente(patente: string): void {
        this.patente = patente;
    }

    set_marca(marca: string): void {
        this.marca = marca;
    }

    set_modelo(modelo: string): void {
        this.modelo = modelo;
    }

}






class RegistroAutomotor {
    private listaDeAutos: Automovil[];

    constructor(listaDeAutos: Automovil[]) {
        this.listaDeAutos = listaDeAutos;
    }

    get_listaDeAutos(): Automovil[] {
        return this.listaDeAutos;

    };


    darAlta(auto: Automovil) {
        this.listaDeAutos.push(auto);
    }

    darBaja(patente: string): void {

        if (this.existeAuto(patente) > -1) {

            this.listaDeAutos.splice(this.existeAuto(patente), 1);

        }


    }

    existeAuto(patente: string): number {
        let posicion: number = -1
        for (let i = 0; i < this.listaDeAutos.length; i++) {

            if (this.listaDeAutos[i].get_Patente() === patente) {

                posicion = i;
            }



        }
        return posicion;




    }

    actualizar(patente: string, patenteNueva: string) {
        if (this.existeAuto(patente) > -1) {

            this.listaDeAutos[this.existeAuto(patente)].set_Patente(patenteNueva);

        }



    }


}



let logan: Automovil = new Automovil("111ppp", "Renault", "Logan");
let clio: Automovil = new Automovil("222rrr", "Renault", "Clio");
let ecosport: Automovil = new Automovil("333eee", "Ford", "Ecosport");
let sandero: Automovil = new Automovil("555ggg", "Renault", "sandero");

let lista: Automovil[] = [logan, clio, ecosport];

let registro: RegistroAutomotor = new RegistroAutomotor(lista);




console.log("Consulta lista inicial");
console.log(registro.get_listaDeAutos());
console.log("doy de alta al auto sandero");
registro.darAlta(sandero);
console.log(registro.get_listaDeAutos());
console.log("Actualizo la patente 111ppp por 999jjj");
registro.actualizar("111ppp", "999jjj");
console.log(registro.get_listaDeAutos());
console.log("doy de baja la patente 222rrr");
registro.darBaja("222rrr");
console.log(registro.get_listaDeAutos());












