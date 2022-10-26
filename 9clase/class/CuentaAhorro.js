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
exports.CuentaAhorro = void 0;
var Cuenta_1 = require("./Cuenta");
var CuentaAhorro = /** @class */ (function (_super) {
    __extends(CuentaAhorro, _super);
    function CuentaAhorro(cliente, porcentajeInteresInicial) {
        var _this = _super.call(this, cliente) || this;
        _this.porcentajeInteres = porcentajeInteresInicial;
        return _this;
    }
    CuentaAhorro.prototype.getPorcentajeInteres = function () {
        return this.porcentajeInteres;
    };
    CuentaAhorro.prototype.setPorcentajeInteres = function (porcentaje) {
        this.porcentajeInteres = porcentaje;
    };
    CuentaAhorro.prototype.retiro = function (monto) {
        var aux = 0;
        aux = this.getSaldo() - monto;
        this.setSaldo(aux);
    };
    CuentaAhorro.prototype.retirar = function (monto) {
        if (this.getSaldo() > monto) {
            this.retiro(monto);
            return "retiro Exitoso";
        }
        else {
            return "Exede el monto maximo de retiro";
        }
    };
    CuentaAhorro.prototype.actualizarSaldo = function (porcentaje) {
        var aux = 0;
        var interes = 0;
        interes = (this.getSaldo() * porcentaje) / 100;
        aux = this.getSaldo() + interes;
        this.setSaldo(aux);
        this.setPorcentajeInteres(porcentaje);
    };
    CuentaAhorro.prototype.toString = function () {
        return "Cuenta Ahorro" + "\n" +
            "Cliente: " + this.cliente.toString() + "\n" +
            "N° de Cuenta: " + this.getNumeroCuenta() + "\n" +
            "Saldo: " + this.getSaldo() + "\n" +
            "Interes: " + this.getPorcentajeInteres() + "%" + "\n";
    };
    return CuentaAhorro;
}(Cuenta_1.Cuenta));
exports.CuentaAhorro = CuentaAhorro;
