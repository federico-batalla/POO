import { GestorLibros } from "./GestorLibros";
import { Libro } from "./Libro";

let gestor:GestorLibros = new GestorLibros("Gestor");

let libro_1 : Libro = new Libro("el señor de los anillos 1","jr tolkien","fantasia");
let libro_2 : Libro = new Libro("el señor de los anillos 2","jr tolkien","fantasia");
let libro_3 : Libro = new Libro("el señor de los anillos 3","jr tolkien","fantasia");
let libro_4 : Libro = new Libro("el principito","Antoine de Saint-Exupéry","infantil");


gestor.ingresarLibro(libro_1);
gestor.ingresarLibro(libro_2);
gestor.ingresarLibro(libro_3);
gestor.ingresarLibro(libro_4);

console.log(gestor.toString());


if (gestor.consultarLibro("el principito")){
    console.log("exite el principito");
}else{
    console.log("no exite el principito");
}



console.log("elimino el principito")
gestor.eliminarLibro("el principito");



if (gestor.consultarLibro("el principito")){
    console.log("existe el principito");
}else{
    console.log("no exite el principito");
}



console.log("obtengo una copia del arreglo");
console.log(gestor.getCopyLibros());



console.log("modifico el titulo de el señor de los anillos 1");
gestor.modificarTituloLibro("el señor de los anillos 1","el señor de las moscas");
console.log(gestor.toString());



