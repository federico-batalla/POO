"use strict";
exports.__esModule = true;
exports.Cuenta = void 0;
var Cuenta = /** @class */ (function () {
    function Cuenta(cliente) {
        this.numeroCuenta = cliente.getDni();
        this.saldo = 0;
        this.cliente = cliente;
    }
    Cuenta.prototype.getNumeroCuenta = function () {
        return this.numeroCuenta;
    };
    Cuenta.prototype.getSaldo = function () {
        return this.saldo;
    };
    Cuenta.prototype.getcliente = function () {
        return this.cliente;
    };
    Cuenta.prototype.setNumeroCuenta = function (numeroCuenta) {
        this.numeroCuenta = numeroCuenta;
    };
    Cuenta.prototype.setSaldo = function (saldo) {
        this.saldo = saldo;
    };
    Cuenta.prototype.setCliente = function (nombre, apellido, dni) {
        this.cliente.setApellido(apellido);
        this.cliente.setNombre(nombre);
        this.cliente.setDni(dni);
        this.setNumeroCuenta(dni);
    };
    Cuenta.prototype.ingresar = function (monto) {
        var aux = 0;
        aux = this.getSaldo() + monto;
        this.setSaldo(aux);
    };
    return Cuenta;
}());
exports.Cuenta = Cuenta;
