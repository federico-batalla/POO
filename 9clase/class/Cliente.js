"use strict";
exports.__esModule = true;
exports.Cliente = void 0;
var Cliente = /** @class */ (function () {
    function Cliente(nombre, apellido, dni) {
        this.nombre = nombre;
        this.apellido = apellido;
        this.dni = dni;
    }
    Cliente.prototype.getNombre = function () {
        return this.nombre;
    };
    Cliente.prototype.getApellido = function () {
        return this.apellido;
    };
    Cliente.prototype.getDni = function () {
        return this.dni;
    };
    Cliente.prototype.setNombre = function (nombre) {
        this.nombre = nombre;
    };
    Cliente.prototype.setApellido = function (apellido) {
        this.apellido = apellido;
    };
    Cliente.prototype.setDni = function (dni) {
        this.dni = dni;
    };
    Cliente.prototype.toString = function () {
        return this.getNombre() + " " + this.getApellido() + " " + this.getDni();
    };
    return Cliente;
}());
exports.Cliente = Cliente;
