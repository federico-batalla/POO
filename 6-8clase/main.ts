import { GestorLibros } from "./GestorLibros";
import { Libro } from "./Libro";

let gestor:GestorLibros = new GestorLibros("Gestor");

let libro_1 : Libro = new Libro("el señor de los anillos 1","jr tolkien","fantasia");
let libro_2 : Libro = new Libro("el señor de los anillos 2","jr tolkien","fantasia");
let libro_3 : Libro = new Libro("el señor de los anillos 3","jr tolkien","fantasia");
let libro_4 : Libro = new Libro("el principito ","Antoine de Saint-Exupéry","infantil");


gestor.ingresarLibro(libro_1);
gestor.ingresarLibro(libro_2);
gestor.ingresarLibro(libro_3);
gestor.ingresarLibro(libro_4);

console.log(gestor.toString());

