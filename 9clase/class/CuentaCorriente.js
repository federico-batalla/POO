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
exports.CuentaCorriente = void 0;
var Cuenta_1 = require("./Cuenta");
var CuentaCorriente = /** @class */ (function (_super) {
    __extends(CuentaCorriente, _super);
    function CuentaCorriente(cliente) {
        return _super.call(this, cliente) || this;
    }
    CuentaCorriente.prototype.retirar = function (monto) {
        var aux = 0;
        aux = this.getSaldo() - monto;
        this.setSaldo(aux);
    };
    CuentaCorriente.prototype.actualizarSaldo = function () {
        var interes = 0;
        var aux = 0;
        interes = (this.getSaldo() * 1.5) / 100;
        aux = this.getSaldo() + interes;
        this.setSaldo(aux);
    };
    CuentaCorriente.prototype.toString = function () {
        return "Cuenta Corriente" + "\n" +
            "Cliente: " + this.cliente.toString() + "\n" +
            "N° de Cuenta: " + this.getNumeroCuenta() + "\n" +
            "Saldo: " + this.getSaldo() + "\n";
    };
    return CuentaCorriente;
}(Cuenta_1.Cuenta));
exports.CuentaCorriente = CuentaCorriente;
