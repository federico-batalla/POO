import { Cliente } from "./class/Cliente";
import { CuentaAhorro } from "./class/CuentaAhorro";
import { CuentaCorriente } from "./class/CuentaCorriente";


let cliente1:Cliente = new Cliente("Federico","Batalla",34334935);
let cliente2:Cliente = new Cliente("Milena","Gonzales",52899099);

let cuentaCorriente:CuentaCorriente = new CuentaCorriente(cliente1);
let cuentaAhorro:CuentaAhorro = new CuentaAhorro(cliente2,2.5);

console.log("-------Prueba Cuenta Corriente-------");

console.log(cuentaCorriente.toString());

console.log("ingreso 1000")
cuentaCorriente.ingresar(1000);
console.log(cuentaCorriente.toString());

console.log("actualizo saldo");
cuentaCorriente.actualizarSaldo();
console.log(cuentaCorriente.toString());

console.log("retiro 345");
console.log(cuentaCorriente.retirar(345));
console.log(cuentaCorriente.toString());

console.log("retiro 2000");
console.log(cuentaCorriente.retirar(2000));
console.log(cuentaCorriente.toString());


console.log("-------Prueba Cuenta Ahorro-------");

console.log(cuentaAhorro.toString());

console.log("ingreso 5000");
cuentaAhorro.ingresar(5000);
console.log(cuentaAhorro.toString());


console.log("actualizo saldo interes 5%");
cuentaAhorro.actualizarSaldo(5);
console.log(cuentaAhorro.toString());

console.log("retiro 3000");
console.log(cuentaAhorro.retirar(2000));
console.log(cuentaAhorro.toString());

console.log("retiro 3250");
console.log(cuentaAhorro.retirar(3250));
console.log(cuentaAhorro.toString());


