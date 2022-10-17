"use strict";
exports.__esModule = true;
exports.Persona = void 0;
var Persona = /** @class */ (function () {
    function Persona(nombre, apellido, pasaporte, fechaNacimiento) {
        this.nombre = nombre;
        this.apellido = apellido;
        this.pasaporte = pasaporte;
        this.fechaNacimiento = fechaNacimiento;
    }
    Persona.prototype.getNombre = function () {
        return this.nombre;
    };
    Persona.prototype.getApellido = function () {
        return this.apellido;
    };
    Persona.prototype.getPasaporte = function () {
        return this.pasaporte;
    };
    Persona.prototype.getFechaNacimiento = function () {
        return this.fechaNacimiento;
    };
    return Persona;
}());
exports.Persona = Persona;
