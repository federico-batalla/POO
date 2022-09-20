var Auto = /** @class */ (function () {
    function Auto(marca, modelo) {
        this.estaPrendido = false;
        this.combustibleActual = 10;
        this.marca = marca;
        this.modelo = modelo;
    }
    Auto.prototype.prenderApagar = function () {
        if (this.estaPrendido) {
            this.estaPrendido = false;
            console.log("se apago el auto");
        }
        else {
            this.estaPrendido = true;
            console.log("se prendio el auto");
        }
    };
    Auto.prototype.cargarCombustible = function () {
        if (this.combustibleActual == 10) {
            console.log("tanque lleno");
        }
        else {
            console.log("se cargo 1 de combustible");
            this.combustibleActual++;
        }
    };
    Auto.prototype.verCombustibleActual = function () {
        console.log("combustible actual " + this.combustibleActual);
    };
    Auto.prototype.avanzar = function () {
        if (this.combustibleActual > 0) {
            this.combustibleActual--;
            console.log("el auto avanzo 10 mt");
        }
        else {
            console.log("debe cargar combustible");
        }
    };
    return Auto;
}());
var miAuto = new Auto("Ford", "falcon");
console.log("mi auto es un " + miAuto.marca + " " + miAuto.modelo);
miAuto.prenderApagar();
for (var index = 0; index < 11; index++) {
    miAuto.avanzar();
}
miAuto.verCombustibleActual();
miAuto.cargarCombustible();
miAuto.cargarCombustible();
miAuto.verCombustibleActual();
miAuto.prenderApagar();
