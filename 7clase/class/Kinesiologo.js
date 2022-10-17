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
exports.Kinesiologo = void 0;
var Persona_1 = require("./Persona");
var Kinesiologo = /** @class */ (function (_super) {
    __extends(Kinesiologo, _super);
    function Kinesiologo(nombre, apellido, pasaporte, fechaNacimiento, titulo) {
        var _this = _super.call(this, nombre, apellido, pasaporte, fechaNacimiento) || this;
        _this.titulo = titulo;
        return _this;
    }
    Kinesiologo.prototype.aplicarTratamiento = function (jugador) {
        jugador.setLesion(false);
        return "Se aplico el tratamiento a " + jugador.getNombre() + " " + jugador.getApellido() + " y se recuero de su lesion";
    };
    return Kinesiologo;
}(Persona_1.Persona));
exports.Kinesiologo = Kinesiologo;
