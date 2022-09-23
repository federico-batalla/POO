"use strict";
exports.__esModule = true;
exports.Auto = void 0;
var Auto = /** @class */ (function () {
    function Auto(marca, modelo) {
        this.marca = marca;
        this.modelo = modelo;
        this.estaPrendido = false;
        this.combustibleActual = 10;
    }
    Auto.prototype.get_marca = function () {
        return this.marca;
    };
    Auto.prototype.set_marca = function (marca) {
        this.marca = marca;
    };
    Auto.prototype.get_modelo = function () {
        return this.modelo;
    };
    Auto.prototype.set_modelo = function (marca) {
        this.marca = this.modelo;
    };
    Auto.prototype.get_combustibleActual = function () {
        return this.combustibleActual;
    };
    Auto.prototype.get_estaPrendido = function () {
        return this.estaPrendido;
    };
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
exports.Auto = Auto;
var miAuto = new Auto("Ford", "falcon");
console.log("mi auto es un " + miAuto.get_marca() + " " + miAuto.get_modelo());
miAuto.prenderApagar();
for (var index = 0; index < 11; index++) {
    miAuto.avanzar();
}
miAuto.get_combustibleActual;
miAuto.cargarCombustible();
miAuto.cargarCombustible();
console.log("combustible actual " + miAuto.get_combustibleActual());
miAuto.prenderApagar();
