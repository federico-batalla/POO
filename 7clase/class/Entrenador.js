"use strict";
var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        if (typeof b !== "function" && b !== null)
            throw new TypeError("Class extends value " + String(b) + " is not a constructor or null");
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
exports.__esModule = true;
exports.Entrenador = void 0;
var Persona_1 = require("./Persona");
var Entrenador = /** @class */ (function (_super) {
    __extends(Entrenador, _super);
    function Entrenador(nombre, apellido, pasaporte, fechaNacimiento) {
        return _super.call(this, nombre, apellido, pasaporte, fechaNacimiento) || this;
    }
    Entrenador.prototype.darOrden = function (jugador, posicion) {
        jugador.setPosicion(posicion);
        return jugador.getNombre() + " " + jugador.getApellido() + " cambio de posicion a " + posicion;
    };
    Entrenador.prototype.darFormacion = function () {
        return "la formacion del equipo es 4-3-1-2";
    };
    return Entrenador;
}(Persona_1.Persona));
exports.Entrenador = Entrenador;
