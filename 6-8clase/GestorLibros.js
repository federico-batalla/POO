"use strict";
exports.__esModule = true;
exports.GestorLibros = void 0;
var GestorLibros = /** @class */ (function () {
    function GestorLibros(nombre, libro) {
        this.libros = new Array;
        this.nombre = nombre;
        if (libro != undefined)
            this.libros = libro;
    }
    GestorLibros.prototype.getCopyLibros = function () {
        var copyArray = this.libros.slice();
        return copyArray;
    };
    GestorLibros.prototype.getIndex = function (titulo) {
        var posicion = -1;
        for (var index = 0; index < this.libros.length; index++) {
            if (this.libros[index].getTitulo() === titulo)
                posicion = index;
        }
        return posicion;
    };
    GestorLibros.prototype.toString = function () {
        var aux = "============ Libros Disponibles ============ \n\n";
        for (var index = 0; index < this.libros.length; index++) {
            aux += this.libros[index].toString() + "\n\n";
        }
        return aux;
    };
    GestorLibros.prototype.ingresarLibro = function (libro) {
        this.libros.push(libro);
    };
    GestorLibros.prototype.consultarLibro = function (titulo) {
        if (this.getIndex(titulo) > -1)
            return true;
        return false;
    };
    GestorLibros.prototype.modificarTituloLibro = function (titulo, tituloNuevo) {
        if (this.getIndex(titulo) > -1)
            this.libros[this.getIndex(titulo)].setTitulo(tituloNuevo);
    };
    GestorLibros.prototype.eliminarLibro = function (titulo) {
        if (this.getIndex(titulo))
            this.libros.splice(this.getIndex(titulo), 1);
    };
    return GestorLibros;
}());
exports.GestorLibros = GestorLibros;
