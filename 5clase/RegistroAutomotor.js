var Automovil = /** @class */ (function () {
    function Automovil(patente, marca, modelo) {
        this.patente = patente;
        this.marca = marca;
        this.modelo = modelo;
    }
    Automovil.prototype.get_Patente = function () {
        return this.patente;
    };
    Automovil.prototype.get_marca = function () {
        return this.marca;
    };
    Automovil.prototype.get_modelo = function () {
        return this.modelo;
    };
    Automovil.prototype.set_Patente = function (patente) {
        this.patente = patente;
    };
    Automovil.prototype.set_marca = function (marca) {
        this.marca = marca;
    };
    Automovil.prototype.set_modelo = function (modelo) {
        this.modelo = modelo;
    };
    return Automovil;
}());
var RegistroAutomotor = /** @class */ (function () {
    function RegistroAutomotor(listaDeAutos) {
        this.listaDeAutos = listaDeAutos;
    }
    RegistroAutomotor.prototype.get_listaDeAutos = function () {
        return this.listaDeAutos;
    };
    ;
    RegistroAutomotor.prototype.darAlta = function (auto) {
        this.listaDeAutos.push(auto);
    };
    RegistroAutomotor.prototype.darBaja = function (patente) {
        if (this.existeAuto(patente) > -1) {
            this.listaDeAutos.splice(this.existeAuto(patente), 1);
        }
    };
    RegistroAutomotor.prototype.existeAuto = function (patente) {
        var posicion = -1;
        for (var i = 0; i < this.listaDeAutos.length; i++) {
            if (this.listaDeAutos[i].get_Patente() === patente) {
                posicion = i;
            }
        }
        return posicion;
    };
    RegistroAutomotor.prototype.actualizar = function (patente, patenteNueva) {
        if (this.existeAuto(patente) > -1) {
            this.listaDeAutos[this.existeAuto(patente)].set_Patente(patenteNueva);
        }
    };
    return RegistroAutomotor;
}());
var logan = new Automovil("111ppp", "Renault", "Logan");
var clio = new Automovil("222rrr", "Renault", "Clio");
var ecosport = new Automovil("333eee", "Ford", "Ecosport");
var sandero = new Automovil("555ggg", "Renault", "sandero");
var lista = [logan, clio, ecosport];
var registro = new RegistroAutomotor(lista);
console.log("Consulta lista inicial");
console.log(registro.get_listaDeAutos());
console.log("doy de alta al auto sandero");
registro.darAlta(sandero);
console.log(registro.get_listaDeAutos());
console.log("Actualizo la patente 111ppp por 999jjj");
registro.actualizar("111ppp", "999jjj");
console.log(registro.get_listaDeAutos());
console.log("doy de baja la patente 222rrr");
registro.darBaja("222rrr");
console.log(registro.get_listaDeAutos());
