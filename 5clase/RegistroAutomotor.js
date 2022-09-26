var Automovil = /** @class */ (function () {
    function Automovil(patente, marca, modelo) {
        this.patente = patente;
        this.marca = marca;
        this.modelo = modelo;
    }
    Automovil.prototype.get_Patente = function () {
        return this.patente;
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
    RegistroAutomotor.prototype.darBaja = function (auto) {
        var baja = false;
        for (var i = 0; i < this.listaDeAutos.length; i++) {
            if (this.listaDeAutos[i].get_Patente() === auto.get_Patente()) {
                this.listaDeAutos.splice(i, 1);
                baja = true;
            }
            else {
                baja = false;
            }
        }
        return baja;
    };
    return RegistroAutomotor;
}());
var movimientoBaja = false;
var logan = new Automovil("111ppp", "Renault", "Logan");
var clio = new Automovil("222rrr", "Renault", "Clio");
var ecosport = new Automovil("333eee", "Ford", "Ecosport");
var sandero = new Automovil("555ggg", "Renault", "sandero");
var lista = [logan, clio, ecosport];
var registro = new RegistroAutomotor(lista);
console.log(registro.get_listaDeAutos());
movimientoBaja = registro.darBaja(clio);
if (movimientoBaja) {
    console.log("se dio de baja el vehiculo");
}
else {
    console.log("el vehiculo no se encuentra registrado");
}
console.log(registro.get_listaDeAutos());
registro.darAlta(sandero);
console.log(registro.get_listaDeAutos());
