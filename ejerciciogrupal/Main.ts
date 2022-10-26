import { Alumno } from "./Alumno";
import { Seminario } from "./Seminario";
import { TrabajoPractico } from "./Trabajopractico";

  
let seminario : Seminario = new Seminario("Programacion");

let alumno1:Alumno = new Alumno("pedro");
let alumno2:Alumno = new Alumno("juan");
let alumno3:Alumno = new Alumno("carlos");
let alumno4:Alumno = new Alumno("mariana");

let listaAlumnos: Array <Alumno> = new Array(alumno1,alumno2,alumno3,alumno4) ;


let trabajoPractico:TrabajoPractico= new TrabajoPractico("POO",6);









if(seminario.addRequisito("mayor 18 años")== true ){
    console.log("se agrego correctamente");
}else{
    console.log("ya existe el requisito");
}

alumno1.realizarTrabajoPractico()

