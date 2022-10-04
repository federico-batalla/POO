"use strict";
exports.__esModule = true;
exports.Libro = void 0;
var Libro = /** @class */ (function () {
    function Libro(titulo, autor, genero) {
        this.titulo = titulo;
        this.autor = autor;
        this.genero = genero;
    }
    Libro.prototype.getTitulo = function () {
        return this.titulo;
    };
    Libro.prototype.setTitulo = function (titulo) {
        this.titulo = titulo;
    };
    Libro.prototype.toString = function () {
        return "Titulo: " + this.titulo + "\n" + "Autor: " + this.autor + "\n" + "Genero: " + this.genero;
    };
    return Libro;
}());
exports.Libro = Libro;
