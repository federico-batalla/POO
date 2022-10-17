"use strict";
exports.__esModule = true;
exports.Seleccion = void 0;
var Seleccion = /** @class */ (function () {
    function Seleccion(seleccion, defensor, delantero, arquero, entrenador, kinesiologo) {
        this.defensor = defensor;
        this.delantero = delantero;
        this.arquero = arquero;
        this.entrenador = entrenador;
        this.kinesiologo = kinesiologo;
        this.seleccion = seleccion;
    }
    Seleccion.prototype.getSeleccion = function () {
        return this.seleccion;
    };
    Seleccion.prototype.tostring = function () {
        return this.getSeleccion() + "\n" + this.defensor.toString() + "\n" + this.delantero.toString() + "\n" + this.arquero.toString() + "\n" + this.entrenador.toString() + "\n" + this.kinesiologo.toString();
    };
    Seleccion.prototype.darConferencia = function (entrenador) {
        return entrenador.darFormacion();
    };
    Seleccion.prototype.jugar = function () {
        return this.arquero.jugarLeve() + " / " + this.defensor.jugarLeve() + " / " + this.delantero.jugarFuerte() + "\n" + this.kinesiologo.aplicarTratamiento(this.delantero) + "\n" + this.entrenador.darOrden(this.delantero, "defensor");
    };
    ;
    return Seleccion;
}());
exports.Seleccion = Seleccion;
