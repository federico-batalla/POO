"use strict";
exports.__esModule = true;
var GestorLibros_1 = require("./GestorLibros");
var Libro_1 = require("./Libro");
var gestor = new GestorLibros_1.GestorLibros("Gestor");
var libro_1 = new Libro_1.Libro("el señor de los anillos 1", "jr tolkien", "fantasia");
var libro_2 = new Libro_1.Libro("el señor de los anillos 2", "jr tolkien", "fantasia");
var libro_3 = new Libro_1.Libro("el señor de los anillos 3", "jr tolkien", "fantasia");
var libro_4 = new Libro_1.Libro("el principito", "Antoine de Saint-Exupéry", "infantil");
gestor.ingresarLibro(libro_1);
gestor.ingresarLibro(libro_2);
gestor.ingresarLibro(libro_3);
gestor.ingresarLibro(libro_4);
console.log(gestor.toString());
if (gestor.consultarLibro("el principito")) {
    console.log("exite el principito");
}
else {
    console.log("no exite el principito");
}
console.log("elimino el principito");
gestor.eliminarLibro("el principito");
if (gestor.consultarLibro("el principito")) {
    console.log("existe el principito");
}
else {
    console.log("no exite el principito");
}
console.log("obtengo una copia del arreglo");
console.log(gestor.getCopyLibros());
console.log("modifico el titulo de el señor de los anillos 1");
gestor.modificarTituloLibro("el señor de los anillos 1", "el señor de las moscas");
console.log(gestor.toString());
