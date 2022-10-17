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
exports.Jugador = void 0;
var Persona_1 = require("./Persona");
var Jugador = /** @class */ (function (_super) {
    __extends(Jugador, _super);
    function Jugador(nombre, apellido, pasaporte, fechaNacimiento, posicion) {
        var _this = _super.call(this, nombre, apellido, pasaporte, fechaNacimiento) || this;
        _this.lesion = false;
        _this.posicion = posicion;
        return _this;
    }
    Jugador.prototype.getPosicion = function () {
        return this.posicion;
    };
    Jugador.prototype.getLesion = function () {
        return this.lesion;
    };
    Jugador.prototype.setLesion = function (lesion) {
        this.lesion = lesion;
    };
    Jugador.prototype.entrenar = function () {
        return this.getNombre() + " " + this.getApellido() + " entreno en " + this.getPosicion();
    };
    Jugador.prototype.jugarLeve = function () {
        if (this.getLesion()) {
            return this.getNombre() + " " + this.getApellido() + " esta lesionado, aplique un tratamiento con el masajista";
        }
        else {
            return this.getNombre() + " " + this.getApellido() + " jugo el partido";
        }
    };
    Jugador.prototype.jugarFuerte = function () {
        if (this.getLesion()) {
            return this.getNombre() + " " + this.getApellido() + " esta lesionado, aplique un tratamiento con el masajista";
        }
        else {
            this.setLesion(true);
            return this.getNombre() + " " + this.getApellido() + " jugo el partido y se lesiono";
        }
    };
    Jugador.prototype.toString = function () {
        return "==============" + "\n\n" + "Nombre y Apellido: " + this.getNombre() + " " + this.getApellido() + "\n" + "Pasaporte: " + this.getPasaporte() + "\n" + "fecha de nacimiento: " + this.getFechaNacimiento() + "\n" + "Lesion: " + this.getLesion() + "\n" + "Posicion: " + this.getPosicion();
    };
    return Jugador;
}(Persona_1.Persona));
exports.Jugador = Jugador;
