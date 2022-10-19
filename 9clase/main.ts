import { Cliente } from "./class/Cliente";
import { CuentaAhorro } from "./class/CuentaAhorro";
import { CuentaCorriente } from "./class/CuentaCorriente";


let cliente1:Cliente = new Cliente("Federico","Batalla",34334935);
let cliente2:Cliente = new Cliente("Milena","Gonzales",52899099);

let cuentaCorriente:CuentaCorriente = new CuentaCorriente(cliente1);
let cuentaAhorro:CuentaAhorro = new CuentaAhorro(cliente2,2.5);


console.log(cuentaCorriente.toString());

console.log("ingreso 1000")
cuentaCorriente.ingresar(1000);
console.log(cuentaCorriente.toString());

console.log("actualizo saldo");
cuentaCorriente.actualizarSaldo();
console.log(cuentaCorriente.toString());

console.log("retiro 345");
cuentaCorriente.retirar(345);
console.log(cuentaCorriente.toString());



